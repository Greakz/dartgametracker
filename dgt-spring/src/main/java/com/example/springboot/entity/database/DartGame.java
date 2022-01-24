package com.example.springboot.entity.database;

import javax.persistence.*;
import java.util.Collection;

@Entity
public class DartGame {
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Enumerated(EnumType.STRING)
    private DartGameType gameType;

    @OneToMany(mappedBy = "game", fetch = FetchType.LAZY)
    private Collection<DartTurn> turns;

    @ManyToMany
    @JoinTable(name="dart_game_users", joinColumns = @JoinColumn(name="game_id"), inverseJoinColumns = @JoinColumn(name = "user_id"))
    private Collection<UserAccount> user;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public DartGameType getGameType() {
        return gameType;
    }

    public void setGameType(DartGameType gameType) {
        this.gameType = gameType;
    }

    public Collection<DartTurn> getTurns() {
        return turns;
    }

    public void setTurns(Collection<DartTurn> turns) {
        this.turns = turns;
    }

    public Collection<UserAccount> getUser() {
        return user;
    }

    public void setUser(Collection<UserAccount> user) {
        this.user = user;
    }
}
