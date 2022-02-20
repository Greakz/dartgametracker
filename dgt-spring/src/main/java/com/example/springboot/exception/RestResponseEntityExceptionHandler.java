package com.example.springboot.exception;

import com.example.springboot.controller.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class RestResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {
    @ExceptionHandler(Exception.class)
    protected ResponseEntity<Response<String>> handleConflict(Exception ex, WebRequest request) {
        if(ex instanceof CustomException) {
            Response<String> response = new Response<>(ex.getMessage(), ((CustomException) ex).getStatus().value(), "");
            return new ResponseEntity<>(response, ((CustomException) ex).getStatus());
        }
        else {
            return new ResponseEntity<>(new Response<>("Internal Server Error", HttpStatus.INTERNAL_SERVER_ERROR.value(), ""), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
