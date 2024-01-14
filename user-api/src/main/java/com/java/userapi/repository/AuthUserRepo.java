package com.java.userapi.repository;

import com.java.userapi.entity.AuthUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface AuthUserRepo extends JpaRepository<AuthUser,Integer> {
    @Query("SELECT u FROM AuthUser u WHERE u.username = :username")
    AuthUser findByUserName(@Param("username") String username);
}
