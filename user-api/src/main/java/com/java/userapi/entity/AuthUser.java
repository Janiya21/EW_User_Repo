package com.java.userapi.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "AuthUser_TBL")
public class AuthUser {
    @Id
    @GeneratedValue
    private int id;
    @Column(name = "username")
    private String username;
    private String password;
}
