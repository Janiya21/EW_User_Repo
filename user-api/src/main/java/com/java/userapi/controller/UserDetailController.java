package com.java.userapi.controller;

import com.java.userapi.service.UserDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class UserDetailController {
    @Autowired
    private UserDetailService userDetailService;

}
