// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

// Event Listeners
document.addEventListener('DOMContentLoaded', getTodos)
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

// Functions

function addTodo(event){
    //Prevent form from sumbitting
    event.preventDefault();
    console.log("Clicked");

    //Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    //Create LI
    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-item');
    newTodo.innerText = todoInput.value;
    todoDiv.appendChild(newTodo);

    // Add todos too local storage
    saveLocalTodos(todoInput.value);
    //Check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    //CHECK Trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    //apend to list
    todoList.appendChild(todoDiv);

    //clear todo input value
    todoInput.value = "";
}

function deleteCheck(e){
    const item = e.target;

    //Delete todo
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        //animation
        todo.classList.add("fall");
        removeLocalTodo(todo);

        todo.addEventListener('transitionend', function(){
         todo.remove();           
        })

    }

    //check mark
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
        


        saveCompletedTodo(todo);

    }
}

function filterTodo(e){

    const todos = todoList.childNodes;

    todos.forEach( function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = 'flex';

            break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                }
                else {
                    todo.style.display = "none";
                }
            break;
            case "uncompleted":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "none";
                }
                else {
                    todo.style.display = "flex";
                }
            break;
        }
    });
}

function saveLocalTodos(todo){
    //Check
    let todos;

    if(localStorage.getItem('todos') === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos(){
    let todos;
    let completedtodos;

    if(localStorage.getItem('todos') === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    if(localStorage.getItem('completedtodos') === null){
        completedtodos = [];
    }
    else{
        completedtodos = JSON.parse(localStorage.getItem('completedtodos'));
    }

    todos.forEach(function(todo){
        //Todo DIV
        const todoDiv = document.createElement('div');
        todoDiv.classList.add("todo");

        //Create LI
        const newTodo = document.createElement('li');
        newTodo.classList.add('todo-item');

        //check if save item is completed
            for(let i = 0; i < completedtodos.length; i++){
                if( todo == completedtodos[i]){
                    todoDiv.classList.add("completed");
                }
            }
 
        newTodo.innerText = todo;
        todoDiv.appendChild(newTodo);


        //Check mark button
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add('complete-btn');
        todoDiv.appendChild(completedButton);

        //CHECK Trash button
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add('trash-btn');
        todoDiv.appendChild(trashButton);

        //apend to list
        todoList.appendChild(todoDiv);

    });

}

function removeLocalTodo(todo){
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem('todos', JSON.stringify(todos));

    if(localStorage.getItem('completedtodos') === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem('completedtodos'));
    }

    const todoCompletedIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoCompletedIndex), 1);
    localStorage.setItem('completedtodos', JSON.stringify(todos));
}

function saveCompletedTodo(todo){
    let todos;
    let item;
    if (todo.classList.contains("completed")){
        item = todo.innerText;
        console.log(todos);

        if(localStorage.getItem('completedtodos') === null){
            todos = [];
        }
        else{
            todos = JSON.parse(localStorage.getItem('completedtodos'));
        }

        todos.push(item);
        localStorage.setItem('completedtodos', JSON.stringify(todos));
    }
    else {

        if(localStorage.getItem('completedtodos') === null){
            todos = [];
        }
        else{
            todos = JSON.parse(localStorage.getItem('completedtodos'));
        }

        const todoIndex = todo.children[0].innerText;
        todos.splice(todos.indexOf(todoIndex), 1);
        localStorage.setItem('completedtodos', JSON.stringify(todos));

        
    }


    

}