package com.smartcityapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smartcityapp.model.User;
import com.smartcityapp.repository.UserRepository;

import jakarta.validation.Valid;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;

	public List<User> getAllUsers() {
		return userRepository.findAll();
	}

	public User getUserById(long id) {
		return userRepository.findById(id).orElse(null);
	}

	public User addUser(User user) {
		return userRepository.save(user);
	}

	public User updateUser(long id, User userDetails) {
		User user = userRepository.findById(id).orElse(null);
		if (user != null) {
			user.setName(userDetails.getName());
			user.setEmail(userDetails.getEmail());
			user.setMobile(userDetails.getMobile());
			return userRepository.save(user);
		}
		return null;
	}

	public void deleteUser(long id) {
		userRepository.deleteById(id);
	}

	public Object authenticateUser(String email, String password) {
		// TODO Auto-generated method stub
		return null;
	}

	public String registerUser(@Valid User user) {
		// TODO Auto-generated method stub
		return null;
	}

	public boolean userExists(@Valid User user) {
		// TODO Auto-generated method stub
		return false;
	}
}
