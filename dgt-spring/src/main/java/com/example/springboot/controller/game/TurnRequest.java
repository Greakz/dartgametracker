package com.example.springboot.controller.game;

import java.util.Collection;

public class TurnRequest {
    private int turnNumber;
    private Collection<ThrowRequest> dartThrows;

    public int getTurnNumber() {
        return turnNumber;
    }

    public Collection<ThrowRequest> getDartThrows() {
        return dartThrows;
    }
}
