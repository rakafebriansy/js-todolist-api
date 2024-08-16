export class TodolistService {
    todolist = ['Raka', 'Febrian', 'Syahputra'];

    getJsonTodolist(code) {
        return JSON.stringify({
            code: code,
            status: 'OK',
            data: this.todolist.map((value, index) => {
                return {
                    id: index,
                    todo: value
                };
            })
        });
    }

    getTodolist(request, response) {
        response.write(this.getJsonTodolist(200));
        response.end();
    }

    createTodo(request, response) {
        request.addListener('data', (data) => {
            const body = JSON.parse(data.toString());
            this.todolist.push(body.todo);

            response.write(this.getJsonTodolist(201));
            response.end();
        });
    }

    updateTodo(request, response) {
        request.addListener('data', (data) => {
            const body = JSON.parse(data.toString());
            if(this.todolist[body.id]) {
                this.todolist[body.id] = body.todo;
            }

            response.write(this.getJsonTodolist(200));
            response.end();
        });
    }
}