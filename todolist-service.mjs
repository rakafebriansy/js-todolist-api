export class TodolistService {
    todolist = ['Raka', 'Febrian', 'Syahputra'];

    getJsonTodolist() {
        return JSON.stringify({
            code: 200,
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
        response.write(this.getJsonTodolist());
        response.end();
    }
}