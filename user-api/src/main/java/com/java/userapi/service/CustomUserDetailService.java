package com.java.userapi.service;

import com.java.userapi.entity.AuthUser;
import com.java.userapi.repository.AuthUserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class CustomUserDetailService implements UserDetailsService {

    @Autowired
    private AuthUserRepo authUserRepo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        AuthUser authUser = authUserRepo.findByUserName(username);
        return new User(authUser.getUsername(), authUser.getPassword(), new ArrayList<>());
    }
}
