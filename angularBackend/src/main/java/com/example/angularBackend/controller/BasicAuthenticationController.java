package com.example.angularBackend.controller;

import com.example.angularBackend.bean.AuthenticationBean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class BasicAuthenticationController {

    @GetMapping("/basicauth")
    public AuthenticationBean authBasic(){
        return new AuthenticationBean("YOu are authenticated");
    }

}
