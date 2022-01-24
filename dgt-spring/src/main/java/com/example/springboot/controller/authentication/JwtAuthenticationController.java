package com.example.springboot.controller.authentication;

import com.example.springboot.config.JwtTokenUtil;
import com.example.springboot.controller.game.GameCreationRequest;
import com.example.springboot.entity.database.UserAccount;
import com.example.springboot.service.GameService;
import com.example.springboot.service.JwtUserDetailsService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class JwtAuthenticationController {

    private Logger logger = LoggerFactory.getLogger(JwtAuthenticationController.class);

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private JwtUserDetailsService userDetailsService;

    @Autowired
    private PasswordEncoder bcryptEncoder;

    @RequestMapping(value = "/authenticate", method = RequestMethod.POST, produces = "application/json; charset=utf-8")
    public ResponseEntity<JwtAuthenticationResponse> createAuthenticationToken(@RequestBody JwtAuthenticatonRequest authenticationRequest) throws Exception {
        authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());
        final UserDetails userDetails = userDetailsService
                .loadUserByUsername(authenticationRequest.getUsername());

        final String token = jwtTokenUtil.generateToken(userDetails);

        return ResponseEntity.ok(new JwtAuthenticationResponse(token));
    }

    @RequestMapping(value = "/register", method = RequestMethod.POST, produces = "application/json; charset=utf-8")
    public ResponseEntity<JwtRegistrationResponse> registerUserAccount(@RequestBody JwtRegistrationRequest registrationRequest) throws Exception {
        UserAccount newUser = new UserAccount();
        newUser.setUsername(registrationRequest.getUsername());
        newUser.setPassword(bcryptEncoder.encode(registrationRequest.getPassword()));
        newUser.setEmail(registrationRequest.getEmail());

        UserAccount registeredAccount = userDetailsService.save(newUser);

        logger.info("sending back: " + registeredAccount.getUsername() + " - " + registeredAccount.getPassword() + " - " + registeredAccount.getEmail());

        JwtRegistrationResponse response = new JwtRegistrationResponse(
                registeredAccount.getUsername(),
                registeredAccount.getEmail()
        );
        return ResponseEntity.ok(response);
    }

    private void authenticate(String username, String password) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }
    }
}