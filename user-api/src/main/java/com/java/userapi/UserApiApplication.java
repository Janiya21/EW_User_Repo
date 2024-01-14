package com.java.userapi;

import com.java.userapi.entity.AuthUser;
import com.java.userapi.repository.AuthUserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.annotation.PostConstruct;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@SpringBootApplication
public class UserApiApplication {

    @Autowired
    private AuthUserRepo authUserRepo;

    /*@PostConstruct
    public void initUsers(){
        List<AuthUser> authUsers = Stream.of(
                new AuthUser(101,"Janith","123"),
                new AuthUser(102,"Sandaru","123"),
                new AuthUser(103,"Diss","123")
        ).collect(Collectors.toList());
        authUserRepo.saveAll(authUsers);
    }*/

    public static void main(String[] args) {
        SpringApplication.run(UserApiApplication.class, args);
    }

}
