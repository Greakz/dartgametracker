package com.example.springboot.entity.database;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DartTurnRepository extends CrudRepository<DartTurn, Long> {
}
