package com.java.userapi.controller;

import com.java.userapi.entity.User;
import com.java.userapi.entity.UserDetail;
import com.java.userapi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/addUser")
    public User saveUser(@RequestBody User user){
        return userService.saveUser(user);
    }

    @PostMapping("/addUsers")
    public List<User> saveAllUsers(@RequestBody List<User> users){
        return userService.saveAllUsers(users);
    }

    @GetMapping("/getAllUsers")
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }

    @GetMapping("/getUserById/{id}")
    public User findUserById(@PathVariable int id){
        return userService.getUserById(id);
    }

    @GetMapping("/getUserDetailById/{id}")
    public UserDetail findUserDetailById(@PathVariable int id){
        return userService.getUserDetailById(id);
    }

    @GetMapping("/getUserByName/{name}")
    public User findUserByName(@PathVariable String name){
        return userService.getUserByName(name);
    }

    @PutMapping("/getUserByName")
    public User updateUser(@RequestBody User user){
        return userService.updateUser(user);
    }

    @DeleteMapping("/deleteUserById/{id}")
    public String deleteUserById(@PathVariable int id){
        return userService.deleteUser(id);
    }
}
