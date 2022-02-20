package com.example.springboot.service;

import com.example.springboot.controller.game.*;
import com.example.springboot.entity.database.*;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.Optional;

@Component
public class GameService {

    private Logger logger = LoggerFactory.getLogger(GameService.class);
    private final DartGameRepository dartGameRepository;

    private final DartTurnRepository dartTurnRepository;

    private final DartThrowRepository dartThrowRepository;

    private final UserAccountRepository userAccountRepository;

    @Autowired
    public GameService(DartGameRepository dartGameRepository, DartTurnRepository dartTurnRepository, DartThrowRepository dartThrowRepository, UserAccountRepository userAccountRepository) {
        this.dartGameRepository = dartGameRepository;
        this.dartTurnRepository = dartTurnRepository;
        this.dartThrowRepository = dartThrowRepository;
        this.userAccountRepository = userAccountRepository;
    }

    public GameCreationResponse createGame(GameCreationRequest request) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentPrincipalName = authentication.getName();

        DartGame game = new DartGame();
        UserAccount userAccount = userAccountRepository.findByUsername(currentPrincipalName);
        game.setUser(Arrays.asList(userAccount));
        game.setRuleSet(request.getRuleSet().toJson());
        game.setUsers(String.valueOf(request.getUsers().stream().reduce((s, s2) -> s + "," + s2).get()));
        game.setGameType(request.getType());
        game = dartGameRepository.save(game);

        for (TurnRequest turn: request.getTurns()) {
            DartTurn dartTurnEntity = new DartTurn();
            dartTurnEntity.setGame(game);
            dartTurnEntity.setTurnNumber(turn.getTurnNumber());
            dartTurnEntity.setUser(userAccount);
            dartTurnEntity.setUserString(turn.getUser());
            dartTurnEntity = dartTurnRepository.save(dartTurnEntity);

            for (ThrowRequest throwRequest: turn.getDartThrows()) {
                DartThrow dartThrowEntity = new DartThrow();
                dartThrowEntity.setUser(userAccount);
                dartThrowEntity.setNumber(throwRequest.getNumber());
                dartThrowEntity.setTurn(dartTurnEntity);
                dartThrowEntity.setType(throwRequest.getThrowType());
                dartThrowEntity.setResult(throwRequest.getResult());
                dartThrowRepository.save(dartThrowEntity);
                //dartTurnEntity.getDartThrows().add(dartThrowEntity);
            }
            //game.getTurns().add(dartTurnEntity);
        }
        game = dartGameRepository.findById(game.getId()).get();
        return new GameCreationResponse(game);
    }
}
