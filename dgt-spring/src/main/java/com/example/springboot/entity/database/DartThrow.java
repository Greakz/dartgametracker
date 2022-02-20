package com.example.springboot.entity.database;

import javax.persistence.*;

@Entity
public class DartThrow {
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private int number;

    @Enumerated(EnumType.STRING)
    private ThrowType type;

    private int result;

    @ManyToOne
    @JoinColumn(name = "turn_id", nullable = false)
    private DartTurn turn;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private UserAccount user;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public ThrowType getType() {
        return type;
    }

    public void setType(ThrowType type) {
        this.type = type;
    }

    public int getResult() {
        return result;
    }

    public void setResult(int result) {
        this.result = result;
    }

    public DartTurn getTurn() {
        return turn;
    }

    public void setTurn(DartTurn turn) {
        this.turn = turn;
    }

    public UserAccount getUser() {
        return user;
    }

    public void setUser(UserAccount user) {
        this.user = user;
    }
}
