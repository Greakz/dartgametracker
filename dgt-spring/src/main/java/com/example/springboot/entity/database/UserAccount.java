package com.example.springboot.entity.database;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "UserAccount")
public class UserAccount {
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String username;

    private String password;

    private String email;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name="FriendRequests",
            joinColumns={@JoinColumn(name="ReceivingUserId")},
            inverseJoinColumns={@JoinColumn(name="RequestingUserId")})
    private List<UserAccount> sendFriendRequests;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name="FriendRequests",
            joinColumns={@JoinColumn(name="RequestingUserId")},
            inverseJoinColumns={@JoinColumn(name="ReceivingUserId")})
    private List<UserAccount> receivedFriendRequests;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name="FriendRel",
            joinColumns={@JoinColumn(name="UserIdFirst")},
            inverseJoinColumns={@JoinColumn(name="UserIdSecond")})
    private List<UserAccount> friends;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<UserAccount> getFriends() {
        return friends;
    }

    public void setFriends(List<UserAccount> friends) {
        this.friends = friends;
    }

    public List<UserAccount> getSendFriendRequests() {
        return sendFriendRequests;
    }

    public void setSendFriendRequests(List<UserAccount> sendFriendRequests) {
        this.sendFriendRequests = sendFriendRequests;
    }

    public List<UserAccount> getReceivedFriendRequests() {
        return receivedFriendRequests;
    }

    public void setReceivedFriendRequests(List<UserAccount> receivedFriendRequests) {
        this.receivedFriendRequests = receivedFriendRequests;
    }
}
