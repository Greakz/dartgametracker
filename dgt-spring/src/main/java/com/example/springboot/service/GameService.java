package com.example.springboot.service;

import com.example.springboot.controller.game.GameCreationRequest;
import com.example.springboot.controller.game.GameCreationResponse;
import com.example.springboot.controller.game.ThrowRequest;
import com.example.springboot.controller.game.TurnRequest;
import com.example.springboot.entity.database.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Collection;

@Component
public class GameService {
    private final DartGameRepository dartGameRepository;

    private final DartTurnRepository dartTurnRepository;

    private final DartThrowRepository dartThrowRepository;

    @Autowired
    public GameService(DartGameRepository dartGameRepository, DartTurnRepository dartTurnRepository, DartThrowRepository dartThrowRepository) {
        this.dartGameRepository = dartGameRepository;
        this.dartTurnRepository = dartTurnRepository;
        this.dartThrowRepository = dartThrowRepository;
    }

    public GameCreationResponse createGame(GameCreationRequest request) {
        DartGame dartGame = request.getGame();
        Collection<DartTurn> dartTurns = dartGame.getTurns();
        Collection<DartThrow> dartThrows = new ArrayList<>();
        dartTurns.stream().map(dartTurn -> dartThrows.addAll(dartTurn.getDartThrows()));
        dartThrowRepository.saveAll(dartThrows);
        dartTurnRepository.saveAll(dartTurns);
        dartGame = dartGameRepository.save(dartGame);
        return new GameCreationResponse(dartGame);
    }
}
