package com.example.springboot.entity.database;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

public enum ThrowType {
    SINGLE, DOUBLE, TRIPLE;

    @JsonCreator
    public static ThrowType forValue(String value) {
        return valueOf(value);
    }

    @JsonValue
    public String toValue() {
        return toString();
    }
}
