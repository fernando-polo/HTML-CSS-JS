// Ejercicio 6
// Tienes este array:
const productos = [
    { id: 1, nombre: "laptop", precio: 15000 },
    { id: 2, nombre: "mouse", precio: 350 },
    { id: 3, nombre: "teclado", precio: 800 },
]
// Crea una promise que simule buscar un producto por id. Si existe resuelve con el producto, si no rechaza con "producto no encontrado".

function searchId(id){
    return new Promise((resolve, reject) => {
        const product = productos.find(prod => prod.id === id)

        if(product){
            resolve(product)
        }
        else{
            reject('producto no encontrado')
        }
    })
}


searchId(2)
    .then(product => console.log(product))
    .catch(error => console.log(error))



// Ejercicio 7
// Con el mismo array, crea una promise que simule aplicar un descuento del 10% a todos los productos y resuelva con un nuevo array actualizado.

function discounts(){
    return new Promise((resolve) => {
        const discountProducts = productos.map((producto) => ({
            ...producto,
            precio: producto.precio * 0.90
            })
        )
        resolve(discountProducts)
    }) 
}

discounts()
    .then(discountProducts => console.log(discountProducts))