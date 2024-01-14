package com.java.userapi.service;

import com.java.userapi.entity.AuthUser;
import com.java.userapi.entity.User;
import com.java.userapi.repository.AuthUserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthUserService {
    @Autowired
    private AuthUserRepo repository;

    public AuthUser saveUser(AuthUser user){
        return repository.save(user);
    }
}
