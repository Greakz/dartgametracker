package com.example.springboot.entity.database;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DartThrowRepository extends CrudRepository<DartThrow, Long> {
}