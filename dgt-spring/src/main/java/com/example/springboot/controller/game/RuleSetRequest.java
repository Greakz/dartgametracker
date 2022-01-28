package com.example.springboot.controller.game;

public class RuleSetRequest {
    private boolean doubleIn;

    private boolean doubleOut;

    public boolean isDoubleIn() {
        return doubleIn;
    }

    public void setDoubleIn(boolean doubleIn) {
        this.doubleIn = doubleIn;
    }

    public boolean isDoubleOut() {
        return doubleOut;
    }

    public void setDoubleOut(boolean doubleOut) {
        this.doubleOut = doubleOut;
    }

    @Override
    public String toString() {
        return "RuleSetRequest{" +
                "doubleIn=" + doubleIn +
                ", doubleOut=" + doubleOut +
                '}';
    }

    public String toJson() {
        return "{\"doubleIn\":" + doubleIn + ", \"doubleOut\":" + doubleOut + "}";
    }
}
