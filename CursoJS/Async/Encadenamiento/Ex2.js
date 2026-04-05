// Ejercicio 5
    // Simula un login en dos pasos encadenados:

    // Primera promise: verifica usuario
    // Segunda promise: carga su perfil
    // Imprime el perfil al final


const usuarios = [
    { nombre: "Ana", password: "1234" },
    { nombre: "Luis", password: "5678" },
]

const perfiles = [
    { usuario: "Ana", rol: "admin", email: "ana@mail.com" },
    { usuario: "Luis", rol: "editor", email: "luis@mail.com" },
]


function login(nombreUser){
    return new Promise((resolve, reject) => {
        const userFound = usuarios.find(u => u.nombre === nombreUser)

        if (userFound){
            resolve(nombreUser)
        }
        else{
            reject('Usuario no encontrado')
        }
    })

}

function cargarPerfil(nombreUser){
        return new Promise((resolve, reject) => {
        const perfil = perfiles.find(u => u.usuario === nombreUser)

        if (perfil){
            resolve(perfil)
        }
        else{
            reject('Perfil no encontrado')
        }
    })
}

async function iniciarSesion(){
    try{
        const user = await login('Ana')
        const perfil = await cargarPerfil(user)  
        console.log(perfil)
    }
    catch (error){
        console.log(error)
    }


}


iniciarSesion()


// login("Ana")
//     .then((user) => cargarPerfil(user))
//     .then((perfil) => console.log(perfil))
//     .catch((error) => console.log(error))