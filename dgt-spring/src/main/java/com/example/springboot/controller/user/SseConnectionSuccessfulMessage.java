package com.example.springboot.controller.user;

import com.example.springboot.entity.database.UserAccount;
import com.fasterxml.jackson.annotation.JsonInclude;

import java.util.List;
import java.util.stream.Collectors;

@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class SseConnectionSuccessfulMessage {
    private List<SseFriendWrapper> friends;

    private List<SseFriendsPendingWrapper> friendsPending;

    private List<SseFriendReceivingWrapper> friendReceiving;

    public SseConnectionSuccessfulMessage(UserAccount user) {
        wrap(user.getFriends(), user.getSendFriendRequests(), user.getReceivedFriendRequests());
    }

    private void wrap(List<UserAccount> friendAccounts, List<UserAccount> pendingFriendAccounts, List<UserAccount> pendingReceivedFriendAccounts) {
        friends = friendAccounts.stream().map(acc -> new SseFriendWrapper(acc)).collect(Collectors.toList());
        friendsPending = pendingFriendAccounts.stream().map(acc -> new SseFriendsPendingWrapper(acc)).collect(Collectors.toList());
        friendReceiving = pendingReceivedFriendAccounts.stream().map(acc -> new SseFriendReceivingWrapper(acc)).collect(Collectors.toList());
    }
}