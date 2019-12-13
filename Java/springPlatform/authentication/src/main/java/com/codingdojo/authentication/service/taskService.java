package com.codingdojo.authentication.service;

import java.util.List;

import com.codingdojo.authentication.model.User;
import com.codingdojo.authentication.repository.UserRepository;

public class taskService {
	 public List<User> allUsers(){
	    	return (List<User>) UserRepository.findAll();
	    }


}
