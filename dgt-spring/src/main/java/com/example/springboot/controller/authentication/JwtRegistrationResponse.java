package com.example.springboot.controller.authentication;

import java.io.Serializable;

public class JwtRegistrationResponse implements Serializable {

    private static final long serialVersionUID = -8091879578924046844L;

    private final String registeredUsername;
    private final String registeredEmail;

    public JwtRegistrationResponse(String error) {
        this.registeredUsername = "";
        this.registeredEmail = "";
    }

    public JwtRegistrationResponse(String username, String email) {
        this.registeredUsername = username;
        this.registeredEmail = email;
    }

    public String getRegisteredUsername() {
        return registeredUsername;
    }

    public String getRegisteredEmail() {
        return registeredEmail;
    }
}