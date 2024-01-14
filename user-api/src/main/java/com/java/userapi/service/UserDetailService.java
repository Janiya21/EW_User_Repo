package com.java.userapi.service;

import com.java.userapi.entity.UserDetail;
import com.java.userapi.repository.UserDetailRepo;
import com.java.userapi.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserDetailService {
    @Autowired
    private UserDetailRepo repository;

    /*public UserDetail findByUserId(int userId){
        return repository.findByUserId(userId);
    }*/

}
