// Div para crear la lista
const listDiv = document.querySelector('#listDiv')

// Lista en donde se van a añadir las tareas
const list = document.createElement('ul')
listDiv.append(list)

// Input y Button los cuales se define cada tarea
const inputTask = document.querySelector('#inputTask')
const btnAdd = document.querySelector('#btnAdd')

// Función en donde se crea la lógica para añadir la nueva tarea a la lista
function addTask(){
    // Tomar lo que el usuario escribío en el input

    if(!inputTask.value){
        alert('No se puede registrar una tarea vacía')
    }
    else{
        const task = document.createElement('li')
        task.textContent = inputTask.value

        // hacer un nuevo botón que sirva para elminar esa task 
        const rmvButton = document.createElement('button')
        rmvButton.textContent = 'Borrar tarea'
        rmvButton.addEventListener('click', () => {
         task.remove()
    })

        task.append(rmvButton)
        list.append(task)

        inputTask.value = ''
    }
}

// EventListener para añadir la tarea a la lista
btnAdd.addEventListener('click', addTask)


