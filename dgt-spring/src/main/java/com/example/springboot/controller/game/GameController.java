package com.example.springboot.controller.game;

import com.example.springboot.entity.database.DartGame;
import com.example.springboot.service.GameService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class GameController {

    private Logger logger = LoggerFactory.getLogger(GameController.class);

    private final GameService gameService;

    @Autowired
    public GameController(GameService gameService) {
        this.gameService = gameService;
    }

    @RequestMapping(value = "/game", method = RequestMethod.POST, produces = "application/json; charset=utf-8")
    public ResponseEntity<GameCreationResponse> createGame(@RequestBody GameCreationRequest request) {
        return new ResponseEntity<GameCreationResponse>( gameService.createGame(request), HttpStatus.CREATED);
    }
}
