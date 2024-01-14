package com.java.userapi.service;

import com.java.userapi.entity.User;
import com.java.userapi.entity.UserDetail;
import com.java.userapi.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class UserService{
    @Autowired
    private UserRepo repository;

    public User saveUser(User user){
        return repository.save(user);
    }
    public List<User> saveAllUsers(List<User> user){
        return repository.saveAll(user);
    }
    public List<User> getAllUsers(){
        return  repository.findAll();
    }
    public User getUserById(int id){
        return  repository.findById(id).orElse(null);
    }
    public User getUserByName(String name){
        return  repository.findByName(name);
    }
    public String deleteUser(int id){
        repository.deleteById(id);
        return "User Removed "+ id;
    }
    public User updateUser(User user){
        User existingUser= repository.findById(user.getId()).orElse(null);
        assert existingUser != null;
        existingUser.setName(user.getName());
        existingUser.setEmail(user.getEmail());
        return repository.save(existingUser);
    }

    public UserDetail getUserDetailById(int id){
        User user = repository.findById(id).orElse(null);
        assert user != null;
        return Objects.requireNonNull(user).getUserDetail();
    }
}
