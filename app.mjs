import http from 'http';
import { TodolistService } from './todolist-service.mjs';

const service = new TodolistService();
const server = http.createServer((request, response) => {
    if(request.method == 'GET') {
        response.setHeader('Content-Type','application/json');
        service.getTodolist(request, response);
    } else if (request.method == 'POST') {
        response.setHeader('Content-Type','application/json');
        service.createTodo(request, response);
    } else if (request.method == 'PUT') {
        response.setHeader('Content-Type','application/json');
        service.updateTodo(request, response);
    }

});

server.listen(3000);