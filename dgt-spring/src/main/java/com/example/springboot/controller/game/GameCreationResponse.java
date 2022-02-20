package com.example.springboot.controller.game;

import com.example.springboot.entity.database.DartGame;

public class GameCreationResponse {

    private DartGame dartGame;

    public GameCreationResponse() {

    }

    public GameCreationResponse(DartGame dartGame) {
        this.dartGame = dartGame;
    }

    public DartGame getDartGame() {
        return dartGame;
    }

    public void setDartGame(DartGame dartGame) {
        this.dartGame = dartGame;
    }
}
