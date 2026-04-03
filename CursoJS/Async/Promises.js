function login(usuario) {
    return new Promise((resolve, reject) => {
        console.log("iniciando login...")

        setTimeout(() => {
            if (usuario === "Ana") {
                resolve({ nombre: "Ana", rol: "admin" }) 
            } else {
                reject("usuario no encontrado ❌")    
            }
        }, 2000)
    })
}

// Consumirla
login("Juan")
    .then(datos => {
        console.log("Login exitoso:", datos)
    })
    .catch(error => {
        console.log("Error:", error)
    })
    .finally(() => {
        console.log("proceso terminado")
    })