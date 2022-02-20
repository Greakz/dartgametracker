package com.example.springboot.controller.game;

import com.example.springboot.entity.database.ThrowType;

public class ThrowRequest {
    private int number;
    private ThrowType throwType;
    private int result;

    public int getNumber() {
        return number;
    }

    public ThrowType getThrowType() {
        return throwType;
    }

    public int getResult() {
        return result;
    }

    @Override
    public String toString() {
        return "ThrowRequest{" +
                "number=" + number +
                ", throwType=" + throwType +
                ", result=" + result +
                '}';
    }
}
