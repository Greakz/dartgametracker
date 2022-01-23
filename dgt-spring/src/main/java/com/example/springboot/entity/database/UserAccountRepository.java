package com.example.springboot.entity.database;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface UserAccountRepository extends CrudRepository<UserAccount, Integer> {

    UserAccount findByUsername(String username);


}