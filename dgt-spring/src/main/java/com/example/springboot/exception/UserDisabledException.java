package com.example.springboot.exception;

import org.springframework.http.HttpStatus;

public class UserDisabledException extends CustomException {
    public UserDisabledException() {
        super("User disabled", HttpStatus.UNAUTHORIZED);
    }
}
