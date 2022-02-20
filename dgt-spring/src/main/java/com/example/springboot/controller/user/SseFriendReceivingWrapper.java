package com.example.springboot.controller.user;

import com.example.springboot.entity.database.UserAccount;

public class SseFriendReceivingWrapper {
    private String username;

    private UserStatus status;

    SseFriendReceivingWrapper(UserAccount user) {
        this.username = user.getUsername();
        this.status = UserStatus.ONLINE;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public UserStatus getStatus() {
        return status;
    }

    public void setStatus(UserStatus status) {
        this.status = status;
    }
}
