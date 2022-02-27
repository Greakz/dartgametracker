package com.example.springboot.controller.user;

import com.example.springboot.controller.Response;
import com.example.springboot.exception.CustomException;
import com.example.springboot.service.JwtUserDetailsService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    private final JwtUserDetailsService userDetailsService;

    public UserController(JwtUserDetailsService userDetailsService) {
        this.userDetailsService = userDetailsService;
    }

    @RequestMapping(value = "/add-friend", method = RequestMethod.POST, produces = "application/json; charset=utf-8")
    public ResponseEntity<Response<FriendCreationResponse>> addFriend(@RequestBody FriendCreationRequest request) throws CustomException {
        FriendCreationResponse result = userDetailsService.addFriend(request);
        Response<FriendCreationResponse> response = new Response<>("Friend-request sent", 201, result);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }
}
