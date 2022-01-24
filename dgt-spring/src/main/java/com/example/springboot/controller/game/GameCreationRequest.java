package com.example.springboot.controller.game;

import com.example.springboot.entity.database.DartGame;
import com.example.springboot.entity.database.DartGameType;

import java.util.Collection;

public class GameCreationRequest {
    private DartGame game;

    public DartGame getGame() {
        return game;
    }

    public void setGame(DartGame game) {
        this.game = game;
    }
}
