// Crea una función async que busque la orden con id 1 y con el userId que devuelve esa orden busque al cliente. 
// Imprime ambos al final.

function obtenerOrden(id) {
    const ordenes = [
        { id: 1, producto: "laptop", userId: 101 },
        { id: 2, producto: "mouse", userId: 102 },
    ]
    return new Promise((resolve, reject) => {
        const orden = ordenes.find(o => o.id === id)
        setTimeout(() => {
            orden ? resolve(orden) : reject("Orden no encontrada")
        }, 1000)
    })
}

function obtenerCliente(userId) {
    const clientes = [
        { id: 101, nombre: "Ana", email: "ana@mail.com" },
        { id: 102, nombre: "Luis", email: "luis@mail.com" },
    ]
    return new Promise((resolve, reject) => {
        const cliente = clientes.find(c => c.id === userId)
        setTimeout(() => {
            cliente ? resolve(cliente) : reject("Cliente no encontrado")
        }, 1000)
    })
}


async function ordenUsuario(){
    try{
        const orden = await obtenerOrden(1)
        const cliente = await obtenerCliente(orden.userId)
        console.log(cliente)
    }
    catch(error){
        console.log(error)
    }
}

ordenUsuario()