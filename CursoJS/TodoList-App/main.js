// Array con las tareas guardadas
const tareas = []

// Div para crear la lista
const listDiv = document.querySelector('#listDiv')

// Lista en donde se van a añadir las tareas
const list = document.createElement('ul')
listDiv.append(list)

const formCrear = document.querySelector('#formCrearTareas')
const inputTask = document.querySelector('#inputTask')
const btnAdd = document.querySelector('#btnAdd')

const formBuscar = document.querySelector('#formBuscarTareas')
const inputSearchTask = document.querySelector('#inputSearchTask')
const btnSearch = document.querySelector('#btnSearch')


// Función en donde se crea la lógica para añadir la nueva tarea a la lista
function addTask(e){
    e.preventDefault()

    if(!inputTask.value){
        alert('No se puede registrar una tarea vacía')
    }
    else{

        tareas.push({ texto: inputTask.value, completada: false })

        renderTask(inputTask.value)

        inputTask.value = ''
    }
}



function searchTask(e){
    e.preventDefault()

    if(tareas.length === 0){
        alert('No hay tareas por buscar')
    }
    else{
        const tareasFiltradas = tareas.filter((t) => 
        t.texto.includes(inputSearchTask.value))

        list.innerHTML = ''

        tareasFiltradas.forEach((t) => renderTask(t.texto))
    }
}


function renderTask(texto){
    const circle = document.createElement('input')
    circle.type = "checkbox"

    const task = document.createElement('li')
    task.textContent = texto
    // logica dependiendo si checkbox es seleccionado o no, cambiar su clase
    circle.addEventListener('change', () => {
        circle.checked ? task.classList.add('completedTask') : task.classList.remove('completedTask')
    })

    task.textContent = texto

    // hacer un nuevo botón que sirva para elminar esa task 
    const rmvButton = document.createElement('button')
    rmvButton.textContent = 'Borrar tarea'
    rmvButton.addEventListener('click', () => {
        task.remove()
    })

    task.append(circle)
    task.append(rmvButton)
    list.append(task)
}

// EventListener para añadir la tarea a la lista
formCrear.addEventListener('submit', addTask)

// EventListener para buscar tarea
formBuscar.addEventListener('submit', searchTask)