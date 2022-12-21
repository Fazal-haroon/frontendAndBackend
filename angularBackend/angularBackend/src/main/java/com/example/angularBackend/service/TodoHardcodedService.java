package com.example.angularBackend.service;

import com.example.angularBackend.model.Todo;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoHardcodedService {

    private static List<Todo> todos = new ArrayList<>();
    private static int idCounter = 0;

    static {
        todos.add(new Todo(++idCounter, "Angular", "Learn typescript and integration", new Date(), true));
        todos.add(new Todo(++idCounter, "React Js", "Learn typescript in reactJS and integration in react js", new Date(), true));
        todos.add(new Todo(++idCounter, "frontend", "Learn frontend integration", new Date(), true));
    }

    public List<Todo> findAll(){
        return todos;
    }

}
