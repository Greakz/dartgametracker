package com.example.springboot.controller;

import com.example.springboot.service.JwtUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
public class HelloWorldController {

	@Autowired
	private JwtUserDetailsService userDetailsService;

	@RequestMapping({ "/hello" })
	public String firstPage() {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		String currentPrincipalName = authentication.getName();
		return "Hello " + currentPrincipalName;
	}

	@RequestMapping({ "/user-list" })
	public ResponseEntity<Collection<String>> userList() {
		userDetailsService.loadAllUsers();

	}
}