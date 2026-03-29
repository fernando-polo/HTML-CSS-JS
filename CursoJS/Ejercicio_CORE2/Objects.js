// Crea un objeto book con propiedades title, author, year y available. 
// Luego escribe una función que reciba ese objeto e 
// imprima en consola una descripción como: "El libro 'X' de Y (2020) está disponible".

    const book = {
        title : 'The practice of the presence of God.',
        author : 'Brother Lawrence',
        year : 1700,
        available : true
    }

    function bookData(book){
        return book.available === true ? `El libro '${book.title}' de ${book.author} ${book.year} está disponible` : 'No está disponible.'
    }

    console.log(bookData(book))


// Crea una función updateUser que reciba un objeto usuario y un objeto con cambios,
// y regrese un nuevo objeto con los cambios aplicados sin mutar el original (aquí vas a necesitar spread 👀).

    const user = {
        nombre : 'Fernando',
        edad : 23
    }

    let user_changes = {
        sexo : 'mucho'
    }


    function updateUser(user, user_changes){
        return {...user, ...user_changes}
    }

    console.log(updateUser(user, user_changes))


// Dado este array de objetos, usa reduce para crear un objeto donde la llave sea el id y el valor sea el objeto completo 
// (esto se llama indexar por id y es muy común en apps reales):

    const products = [
        { id: "a1", name: "Teclado", price: 799 },
        { id: "b2", name: "Mouse", price: 349 },
        { id: "c3", name: "Monitor", price: 4599 },
    ];

    const indx_products = products.reduce((acc, product) => {
        acc[product.id] = product 
        return acc
    }, {})


    console.log(indx_products)


// Combina estos dos arrays en uno solo usando spread:

    const frontend = ["HTML", "CSS", "JS"];
    const backend = ["Node", "Python", "SQL"];

    const fullStack = [...frontend, ...backend]
    console.log(fullStack)


// Escribe una función sum usando rest que pueda recibir cualquier cantidad de números y regrese su suma:

// sum(1, 2, 3)       
// sum(10, 20)        
// sum(1, 2, 3, 4, 5) 

    function sum(...rest){
        return rest.reduce((acc, num) => acc + num, 0)
    }

    console.log(sum(1,2,3))
    console.log(sum(10, 20))
    console.log(sum(1, 2, 3, 4, 5))


// Copia el objeto config y sobreescribe solo la propiedad theme sin modificar el original:

    const config = { theme: "light", lang: "es", fontSize: 14 };
    const config_copy = {...config}

    config_copy.theme = 'dark'
    console.log(config_copy)