// Usa filter para quedarte solo con los números pares:

    const nums = [1, 2, 3, 4, 5, 6, 7, 8]
    const evenNumbers = nums.filter((number) => number % 2 === 0)

    console.log(evenNumbers)



// Filtra solo las palabras que tengan más de 4 letras:

    const words = ["sol", "casa", "elefante", "mar", "computadora", "luz"]
    const greaterThan4 = words.filter((str) => str.length >= 4)

    console.log(greaterThan4)


// Filtra solo los números negativos:

    const temps = [15, -3, 22, -8, 0, 7, -1, 30]
    const negNumbers = temps.filter((number) => number < 0)

    console.log(negNumbers)



// De una lista de usuarios, filtra solo los que están activos y son mayores de edad:

    const users = [
        { name: "Carlos", age: 17, active: true },
        { name: "María", age: 23, active: true },
        { name: "José", age: 15, active: false },
        { name: "Laura", age: 19, active: false },
        { name: "Pedro", age: 25, active: true },
    ];

    // Esperado: Carlos no pasa (menor), María y Pedro sí, José y Laura no (inactivos)
    // Ojo: Carlos es activo pero menor — ambas condiciones deben cumplirse

    const newUsers = users.filter(user => {user.age >= 18 && user.active})

    console.log(newUsers)


// Tienes un carrito de compras. Filtra solo los productos que están en stock y cuyo precio es menor a $1,000:

    const cart = [
        { name: "Teclado", price: 799, inStock: true },
        { name: "Monitor", price: 4599, inStock: true },
        { name: "Mouse", price: 349, inStock: false },
        { name: "Webcam", price: 899, inStock: true },
        { name: "Audífonos", price: 650, inStock: false },
    ]

    const newCart = cart.filter(item => item.inStock && item.price < 1000)

    console.log(newCart)


// De un log de peticiones HTTP, filtra solo los errores (códigos 400 o mayores):

    const logs = [
        { endpoint: "/home", status: 200 },
        { endpoint: "/login", status: 401 },
        { endpoint: "/products", status: 200 },
        { endpoint: "/cart", status: 404 },
        { endpoint: "/checkout", status: 500 },
        { endpoint: "/profile", status: 200 },
    ];

    const logs_error400 = logs.filter(log => log.status >= 400)

    console.log(logs_error400)