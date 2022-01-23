package com.example.springboot.controller.authentication;

import java.io.Serializable;

public class JwtRegistrationResponse implements Serializable {

    private static final long serialVersionUID = -8091879578924046844L;

    private final boolean success;
    private final String registeredUsername;
    private final String registeredEmail;
    private final String message;

    public JwtRegistrationResponse(String error) {
        this.success = false;
        this.registeredUsername = "";
        this.registeredEmail = "";
        this.message = error;
    }

    public JwtRegistrationResponse(String username, String email) {
        this.success = true;
        this.registeredUsername = username;
        this.registeredEmail = email;
        this.message = "";
    }

    public boolean isSuccess() {
        return success;
    }

    public String getRegisteredUsername() {
        return registeredUsername;
    }

    public String getRegisteredEmail() {
        return registeredEmail;
    }

    public String getMessage() {
        return message;
    }
}