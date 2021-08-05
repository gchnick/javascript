const todos = []

window.onload = () => {
    // from
    const from = document.getElementById('todo-from')
    from.onsubmit = (e) => {
        // Detiene el procedimiento de refezco automatico
        e.preventDefault() 

        // todo
        const todo = document.getElementById('todo')
        todos.push(todo.value)
        todo.value = ''

        // todo-list
        const todoList = document.getElementById('todo-list')
        todoList.innerHTML = todos.map(t => '<li>' + t + '</li>').join('')
    }
}