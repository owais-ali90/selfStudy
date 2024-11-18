const todoInput = document.getElementById('todoInput');
const addTodoBtn = document.getElementById('todoAddBtn');
const clearAllBtn = document.getElementById('todoDelAllBtn');
const todoList = document.getElementById('todoList');
let totalTodo = 0;
let isEditing = false;
let currentEleId = null;

console.log(todoInput, addTodoBtn, clearAllBtn, todoList);

addTodoBtn.addEventListener('click', () => {
    if (isEditing) {
        const currentElement = document.getElementById(currentEleId);
        if (currentElement) {
            const para = currentElement.querySelector('p');
            para.innerText = todoInput.value;
            isEditing = false;
            currentEleId = null;
            todoInput.value = '';
        }
        return;
    }


    let listItem = document.createElement('li');
    listItem.id = `todoItem-${totalTodo + 1}`;

    let innerDiv = document.createElement('div');
    let para = document.createElement('p');
    let editBtn = document.createElement('button');
    let delBtn = document.createElement('button')

    para.style.marginBlock;
    para.appendChild(document.createTextNode(todoInput.value));
    innerDiv.appendChild(para);

    editBtn.innerText = 'Edit';
    innerDiv.appendChild(editBtn);

    delBtn.innerHTML = 'Delete'
    innerDiv.appendChild(delBtn)

    listItem.appendChild(innerDiv);
    todoList.appendChild(listItem);

    todoInput.value = '';


    editBtn.addEventListener('click', () => {
        isEditing = true;
        currentEleId = listItem.id; 
        todoInput.value = para.innerText; 
    });
    delBtn.addEventListener('click', ()=>{
        document.getElementById(`${listItem.id}`).remove()
    })

    totalTodo++;
});

clearAllBtn.addEventListener('click', ()=>{
    todoList.innerHTML = ''
})
