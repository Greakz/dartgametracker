package com.example.springboot.exception;

import org.springframework.http.HttpStatus;

public class InvalidCredentialsException extends CustomException {
    public InvalidCredentialsException() {
        super("Invalid Credentials", HttpStatus.UNAUTHORIZED);
    }
}
