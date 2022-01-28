package com.example.springboot.controller.game;

import com.example.springboot.entity.database.DartGameType;

import java.util.Collection;

public class GameCreationRequest {

    private DartGameType type;
    private RuleSetRequest ruleSet;
    private Collection<String> users;
    private Collection<TurnRequest> turns;

    public DartGameType getType() {
        return type;
    }

    public RuleSetRequest getRuleSet() {
        return ruleSet;
    }

    public Collection<String> getUsers() {
        return users;
    }

    public Collection<TurnRequest> getTurns() {
        return turns;
    }

    @Override
    public String toString() {
        return "GameCreationRequest{" +
                "type=" + type +
                ", ruleSet=" + ruleSet +
                ", users=" + users +
                ", turns=" + turns +
                '}';
    }
}
