package com.java.userapi.repository;

import com.java.userapi.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepo extends JpaRepository<User,Integer> {
    User findByName(String name);
}
