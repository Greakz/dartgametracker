package com.example.springboot.exception;

import com.example.springboot.exception.CustomException;
import org.springframework.http.HttpStatus;

public class UserAlredyInFriendlistException extends CustomException {

    public UserAlredyInFriendlistException() {
        super("User already in Friendlist", HttpStatus.BAD_REQUEST);
    }
}
