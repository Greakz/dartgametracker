package com.example.springboot.exception;

import org.springframework.http.HttpStatus;

public class CustomException extends Exception{

    private String s;

    private HttpStatus status;

    private CustomException() {
        // to prevent empty instantiation
    }

    public CustomException(String s, HttpStatus status) {
        super(s);
        this.s = s;
        this.status = status;
    }

    public HttpStatus getStatus() {
        return status;
    }
}
