package com.example.springboot.controller.user;

public class FriendCreationResponse {

    private String friendUsername;

    public FriendCreationResponse(String friendUsername) {
        this.friendUsername = friendUsername;
    }

    public String getFriendUsername() {
        return friendUsername;
    }

    public void setFriendUsername(String friendUsername) {
        this.friendUsername = friendUsername;
    }
}
