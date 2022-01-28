package com.example.springboot.service;

import com.example.springboot.controller.authentication.JwtRegistrationRequest;
import com.example.springboot.exception.InvalidCredentialsException;
import com.example.springboot.exception.UserAlreadyExistsException;
import com.example.springboot.entity.database.UserAccount;
import com.example.springboot.entity.database.UserAccountRepository;
import com.example.springboot.exception.UserDisabledException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Collection;

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

    public void authenticate(String username, String password) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (DisabledException e) {
            throw new UserDisabledException();
        } catch (BadCredentialsException e) {
            throw new InvalidCredentialsException();
        }
    }
}