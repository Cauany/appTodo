const listElement = document.querySelector('#app ul')
const inputElement = document.querySelector('#app input')
const buttonElement = document.querySelector('#app button')

const todos = JSON.parse(localStorage.getItem('list_todos')) || []

function renderTodos(){
    listElement.innerHTML = ''

    for(todo of todos){
        const todoElement = document.createElement('li')
        const todoText = document.createTextNode(todo)

        const linkElement = document.createElement('a')
        const linkText = document.createTextNode('Excluir')

        const pos = todos.indexOf(todo)
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos +')')

        linkElement.appendChild(linkText)
        linkElement.setAttribute('href', '#')

        todoElement.appendChild(todoText)
        todoElement.appendChild(linkElement)

        listElement.appendChild(todoElement)
    }
}
renderTodos()



function addTodo(){
    let todoText = inputElement.value

    todos.push(todoText)
    inputElement.value = ''
    renderTodos()
    saveTostorage()
}

buttonElement.onclick = addTodo

function deleteTodo(pos){
    todos.splice(pos, 1)
    renderTodos()
    saveTostorage()
}

function saveTostorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos))

}