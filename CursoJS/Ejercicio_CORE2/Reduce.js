// Suma todos los números:

    const nums = [10, 20, 30, 40, 50]

    let initialValue = 0
    const sum = nums.reduce((acc, number) => acc + number, initialValue)

    console.log(sum)


// Multiplica todos los números (producto total):

    const factors = [1, 2, 3, 4, 5]

    let new_initialValue = 1
    const mult = factors.reduce((acc, number) => acc * number, new_initialValue)

    console.log(mult)


// Encuentra el número mayor del array usando solo reduce, sin Math.max:

    const values = [3, 7, 1, 9, 4, 6];

    const max = values.reduce((acc, num) => 
        num > acc ? num : acc);

    console.log(max); 


// Calcula el total de un carrito de compras
    // Esperado: 2396
    // Ojo: hay qty (cantidad), no es solo sumar precios

    const cart = [
        { name: "Teclado", price: 799, qty: 1 },
        { name: "Mouse", price: 349, qty: 2 },
        { name: "Webcam", price: 899, qty: 1 },
    ];

    const new_initialValue2 = 0

    const total = cart.reduce((acc, item) => acc + (item.price * item.qty), new_initialValue2)

    console.log(total)


// Agrupa usuarios por rol en un objeto:
    // Esperado:
    // {
    //   admin: ["Ana", "Sofía"],
    //   editor: ["Luis", "María"],
    //   viewer: ["Pedro"]
    // }
   
    const users = [
        { name: "Ana", role: "admin" },
        { name: "Luis", role: "editor" },
        { name: "Sofía", role: "admin" },
        { name: "Pedro", role: "viewer" },
        { name: "María", role: "editor" },
    ];

    function sortUsers(acc, user) {
        const { role, name } = user;

        if (!acc[role]) {
            acc[role] = [];
        }

        acc[role].push(name);

        return acc;
    }

    const users_rol = users.reduce(sortUsers, {});

    console.log(users_rol);



// Cuenta cuántas veces aparece cada palabra:

    const words = ["js", "python", "js", "rust", "python", "js"];

    const result = words.reduce((acc, word) => {
    if (!acc[word]) {
        acc[word] = 1; // primera vez que aparece
    } else {
        acc[word]++; // ya existe → incrementa
    }

    return acc;
    }, {});

    console.log(result);