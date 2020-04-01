package com.example.demo.service;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/coordi")
class CoordiService {


    @GetMapping(value="/test", produces = MediaType.APPLICATION_JSON_VALUE)
    public String test() {
        return "{\"message\": \"coordi OK\"}";
    }

}