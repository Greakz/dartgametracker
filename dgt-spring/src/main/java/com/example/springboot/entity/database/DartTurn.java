package com.example.springboot.entity.database;

import javax.persistence.*;
import java.util.Collection;

@Entity
public class DartTurn {
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private int turnNumber;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "game_id", nullable = false)
    private DartGame game;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private UserAccount user;

    @OneToMany(mappedBy = "turn", fetch = FetchType.LAZY)
    private Collection<DartThrow> dartThrows;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getTurnNumber() {
        return turnNumber;
    }

    public void setTurnNumber(int turnNumber) {
        this.turnNumber = turnNumber;
    }

    public DartGame getGame() {
        return game;
    }

    public void setGame(DartGame game) {
        this.game = game;
    }

    public UserAccount getUser() {
        return user;
    }

    public void setUser(UserAccount user) {
        this.user = user;
    }

    public Collection<DartThrow> getDartThrows() {
        return dartThrows;
    }

    public void setDartThrows(Collection<DartThrow> dartThrows) {
        this.dartThrows = dartThrows;
    }
}

