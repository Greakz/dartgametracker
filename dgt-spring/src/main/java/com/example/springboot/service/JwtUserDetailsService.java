package com.example.springboot.service;

import com.example.springboot.entity.database.UserAccount;
import com.example.springboot.entity.database.UserAccountRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;

@Component
public class JwtUserDetailsService implements UserDetailsService {

    private Logger logger = LoggerFactory.getLogger(JwtUserDetailsService.class);
    @Autowired
    private UserAccountRepository userAccountRepository;

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

    public UserAccount save(UserAccount saveAccount) {
        logger.info("Save into Database: " + saveAccount.getUsername() + " - " + saveAccount.getPassword());
        return userAccountRepository.save(saveAccount);
    }
}