package com.example.springboot.controller.authentication;

import com.example.springboot.config.JwtTokenUtil;
import com.example.springboot.controller.Response;
import com.example.springboot.entity.database.UserAccount;
import com.example.springboot.service.JwtUserDetailsService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class JwtAuthenticationController {

    private Logger logger = LoggerFactory.getLogger(JwtAuthenticationController.class);

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private JwtUserDetailsService userDetailsService;

    @Autowired
    private PasswordEncoder bcryptEncoder;

    @RequestMapping(value = "/authenticate", method = RequestMethod.POST, produces = "application/json; charset=utf-8")
    public ResponseEntity<Response<JwtAuthenticationResponse>> createAuthenticationToken(@RequestBody JwtAuthenticatonRequest authenticationRequest) throws Exception {
        userDetailsService.authenticate(authenticationRequest);
        final UserDetails userDetails = userDetailsService
                .loadUserByUsername(authenticationRequest.getUsername());

        final String token = jwtTokenUtil.generateToken(userDetails);
        JwtAuthenticationResponse result = new JwtAuthenticationResponse(token);
        Response<JwtAuthenticationResponse> response = new Response<>("User authenticated", 200, result);

        return ResponseEntity.ok(response);
    }

    @RequestMapping(value = "/register", method = RequestMethod.POST, produces = "application/json; charset=utf-8")
    public ResponseEntity<Response<JwtRegistrationResponse>> saveUser(@RequestBody JwtRegistrationRequest registrationRequest) throws Exception {
        UserAccount registeredAccount = userDetailsService.save(registrationRequest);
        //LOGGER.info(registeredAccount);
        JwtRegistrationResponse result = new JwtRegistrationResponse(
                registeredAccount.getUsername(),
                registeredAccount.getPassword()
        );
        Response<JwtRegistrationResponse> response = new Response<>("User registered", 200, result);
        return ResponseEntity.ok(response);
    }
}