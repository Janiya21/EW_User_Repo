package com.java.userapi.controller;

import com.java.userapi.entity.AuthRequest;
import com.java.userapi.entity.AuthResponse;
import com.java.userapi.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class InitialController {

    @Autowired
    private JwtUtil jwtUtil;
    @Autowired
    private AuthenticationManager authenticationManager;

    @GetMapping("/")
    public String welcome(){
        return "welcome to EW";
    }

    @PostMapping("/authenticate")
    public AuthResponse generateToken(@RequestBody AuthRequest authRequest) throws Exception {
        try{
            System.out.println(authRequest);
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword())
            );
        }catch (Exception e){
            throw new Exception("Invalid username or Password");
        }
        return new AuthResponse(authRequest.getUsername(),jwtUtil.generateToken(authRequest.getUsername()));
    }
}
