package com.example.springboot.service;

import com.example.springboot.controller.authentication.JwtAuthenticatonRequest;
import com.example.springboot.controller.authentication.JwtRegistrationRequest;
import com.example.springboot.controller.user.FriendCreationRequest;
import com.example.springboot.controller.user.FriendCreationResponse;
import com.example.springboot.controller.user.SseConnectionSuccessfulMessage;
import com.example.springboot.exception.*;
import com.example.springboot.entity.database.UserAccount;
import com.example.springboot.entity.database.UserAccountRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import static java.util.concurrent.CompletableFuture.runAsync;

@Component
public class JwtUserDetailsService implements UserDetailsService {

    private static final Logger logger = LoggerFactory.getLogger(JwtUserDetailsService.class);

    private final UserAccountRepository userAccountRepository;

    private final PasswordEncoder bcryptEncoder;

    private final AuthenticationManager authenticationManager;

    @Autowired
    public JwtUserDetailsService(UserAccountRepository userAccountRepository, PasswordEncoder bcryptEncoder, AuthenticationManager authenticationManager) {
        this.userAccountRepository = userAccountRepository;
        this.bcryptEncoder = bcryptEncoder;
        this.authenticationManager = authenticationManager;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        UserAccount user = userAccountRepository.findByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException("User not found with username: " + username);
        }
        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(),
                new ArrayList<>());
    }

    public UserDetails loadUserByEmail(String email) throws UsernameNotFoundException {

        UserAccount user = userAccountRepository.findUserByEmail(email);
        if (user == null) {
            throw new UsernameNotFoundException("User not found with username: " + email);
        }
        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(),
                new ArrayList<>());
    }

    public Collection<UserAccount> loadAllUsers() throws UsernameNotFoundException {
        return userAccountRepository.findAll();
    }

    public UserAccount save(JwtRegistrationRequest request) throws Exception {
        if(null != userAccountRepository.findByUsername(request.getUsername())) throw new UserAlreadyExistsException();
        UserAccount newUser = new UserAccount();
        newUser.setUsername(request.getUsername());
        newUser.setPassword(bcryptEncoder.encode(request.getPassword()));
        logger.info(newUser.getUsername() + " : " + newUser.getPassword());
        return userAccountRepository.save(newUser);
    }

    public void authenticate(JwtAuthenticatonRequest request) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
        } catch (DisabledException e) {
            throw new UserDisabledException();
        } catch (BadCredentialsException e) {
            throw new InvalidCredentialsException();
        }
    }

    public FriendCreationResponse addFriend(FriendCreationRequest request) throws CustomException {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
        UserAccount user = userAccountRepository.findByUsername(username);
        List<UserAccount> friends = user.getFriends();
        UserAccount friend = userAccountRepository.findByUsername(request.getFriendUsername());
        if(friends.contains(friend)) {
            throw new UserAlredyInFriendlistException();
        }
        if (null == friend) {
            throw new FriendUserNameNotFoundException(request.getFriendUsername());
        }

        user.getSendFriendRequests().add(friend);
        userAccountRepository.save(user);

        SseEmitter sseEmitter = new SseEmitter(Long.MAX_VALUE);
        sseEmitter.onCompletion(() -> logger.info("SseEmitter is completed"));
        sseEmitter.onTimeout(() -> logger.info("SseEmitter is timed out"));
        sseEmitter.onError((ex) -> logger.info("SseEmitter got error:", ex));

        SseConnectionSuccessfulMessage progress = new SseConnectionSuccessfulMessage(friend);
        runAsync(() -> {
            sleep(1, sseEmitter);
            pushProgress(sseEmitter, progress);
        });

        return new FriendCreationResponse(friend.getUsername());
    }

    private void pushProgress(SseEmitter sseEmitter, SseConnectionSuccessfulMessage progress) {
        try {
            logger.info("Pushing progress: {}", progress.toString());
            sseEmitter.send(SseEmitter.event().name("user-service").data(progress, MediaType.APPLICATION_JSON));
        } catch (IOException e) {
            logger.error("An error occurred while emitting progress.", e);
        }
    }

    private void sleep(int seconds, SseEmitter sseEmitter) {
        try {
            Thread.sleep(seconds * 1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
            sseEmitter.completeWithError(e);
        }
    }
}