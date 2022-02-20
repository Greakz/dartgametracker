package com.example.springboot.exception;

import org.springframework.http.HttpStatus;

public class FriendUserNameNotFoundException extends CustomException {

    public FriendUserNameNotFoundException(String s) {
        super("Friend " + s + " not found.", HttpStatus.NOT_FOUND);
    }
}
