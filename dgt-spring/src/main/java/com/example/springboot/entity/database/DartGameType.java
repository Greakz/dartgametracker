package com.example.springboot.entity.database;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

public enum DartGameType {
    NORMAL, CRICKET;

    @JsonCreator
    public static DartGameType forValue(String value) {
        return valueOf(value);
    }

    @JsonValue
    public String toValue() {
        return toString();
    }
}
