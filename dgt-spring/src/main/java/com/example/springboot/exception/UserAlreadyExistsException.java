package com.example.springboot.exception;

import org.springframework.http.HttpStatus;

public class UserAlreadyExistsException extends CustomException {

    public UserAlreadyExistsException() {
        super("User already exists", HttpStatus.BAD_REQUEST);
    }
}
