package com.example.springboot.controller.game;

import java.util.Collection;

public class TurnRequest {
    private int turnNumber;
    private Collection<ThrowRequest> dartThrows;
    private String user;

    public int getTurnNumber() {
        return turnNumber;
    }

    public Collection<ThrowRequest> getDartThrows() {
        return dartThrows;
    }

    public String getUser() {
        return user;
    }

    @Override
    public String toString() {
        return "TurnRequest{" +
                "turnNumber=" + turnNumber +
                ", dartThrows=" + dartThrows +
                '}';
    }
}
