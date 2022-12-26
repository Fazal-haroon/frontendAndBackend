package com.example.angularBackend.controller;

import com.example.angularBackend.bean.HelloWorldBean;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
//Controller
@RestController
public class HelloWorldController {

    //Get
    //URI - /hello-world
    //method - "Hello World"
    //return only string value
    @RequestMapping(method = RequestMethod.GET, path = "/hello-world")
    public String helloWorld(){
        return "Hello World";
    }

    //return bean and automatically converted into JSON and returned
    @GetMapping(path = "/hello-world-bean")
    public HelloWorldBean helloWorldBean(){
        return new HelloWorldBean("Hello World - Changed");
    }

    @GetMapping(path = "/hello-world-bean2")
    public HelloWorldBean helloWorldBean2(){
        throw new RuntimeException("Some Error has Happened! contact support");
    }

    //hello-world/path-variable/fazal
    @GetMapping(path = "/hello-world/path-variable/{name}")
    public HelloWorldBean helloWorldPathVariable(@PathVariable String name){
        return new HelloWorldBean(String.format("Hello Full Stack Developer %s", name));
    }
}
