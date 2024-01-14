package com.java.userapi.repository;

import com.java.userapi.entity.UserDetail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDetailRepo extends JpaRepository<UserDetail,Integer> {

}
