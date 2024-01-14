package com.java.userapi.service;

import com.java.userapi.repository.AuthUserRepo;
import org.springframework.beans.factory.annotation.Autowired;

public class AuthUserService {
    @Autowired
    private AuthUserRepo repository;

}
