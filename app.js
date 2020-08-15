// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

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

        todo.addEventListener('transitionend', function(){
         todo.remove();           
        })

    }

    //check mark
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}
