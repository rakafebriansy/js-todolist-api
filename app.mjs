import http from 'http';
import { TodolistService } from './todolist-service.mjs';

const service = new TodolistService();
const server = http.createServer((request, response) => {
    if(request.method == 'GET') {
        response.setHeader('Content-Type','application/json');
        service.getTodolist(request, response);
    }

    response.end();
});

server.listen(3000);