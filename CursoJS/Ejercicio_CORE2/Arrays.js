// Dado este array, usa map para regresar un nuevo array donde cada nombre esté en mayúsculas:

    const names = ["ana", "luis", "sofía", "pedro"]
    const namesUpper = names.map((i) => i.toUpperCase())


    console.log(namesUpper)


// Crear un nuevo array duplicando cada numero
    const numbers = [1, 3, 5, 7]
    const lst_dupNumber = numbers.map(duplicateNumberFN)

    function duplicateNumberFN(element){
        return element * 2
    }

    console.log(lst_dupNumber)



// Crear un nuevo array con la mitad de cada numero
    const lst_halfNumber = numbers.map((i) => i / 2)

    console.log(lst_halfNumber)
    


// Crear un nuevo array con el doble de la suma de cada numero 
    const lst_dobleSum = numbers.map(dobleSumFN)

    function dobleSumFN(number){
        return (number + number) * 2
    }

    console.log(lst_dobleSum)


// Transforma este array para que cada objeto tenga la estructura que se indica:

// const apiResponse = [
//   { first_name: "ana", last_name: "garcía", salary: 32000 },
//   { first_name: "luis", last_name: "martínez", salary: 45000 },
//   { first_name: "sofía", last_name: "lópez", salary: 28000 },
// ];

// Resultado esperado:
// [
//   { fullName: "Ana García", salaryFormatted: "$32,000" },
//   { fullName: "Luis Martínez", salaryFormatted: "$45,000" },
//   { fullName: "Sofía López", salaryFormatted: "$28,000" },
// ]


    const apiResponse = [
      { first_name: "ana", last_name: "garcía", salary: 32000 },
      { first_name: "luis", last_name: "martínez", salary: 45000 },
      { first_name: "sofía", last_name: "lópez", salary: 28000 },
    ];

    const apiResponseNew = apiResponse.map(apiReformatted)

    function apiReformatted(user){

        function Capitalize(str){
            return str[0].toUpperCase() + str.slice(1)
        }

        return{
            fullName: `${Capitalize(user.first_name)} ${Capitalize(user.last_name)}`,
            salaryFormatted: `$${user.salary.toLocaleString()}` 
        }
    }

    console.log(apiResponseNew)

// Ejercicio B — Generar elementos para una UI

// jsconst products = [
//   { name: "Teclado", price: 799, inStock: true },
//   { name: "Mouse", price: 349, inStock: false },
//   { name: "Monitor", price: 4599, inStock: true },
// ];

// // Resultado esperado:
// [
//   '<li class="available">Teclado - $799</li>',
//   '<li class="unavailable">Mouse - $349</li>',
//   '<li class="available">Monitor - $4599</li>',
// ]


    const products = [
        { name: "Teclado", price: 799, inStock: true },
        { name: "Mouse", price: 349, inStock: false },
        { name: "Monitor", price: 4599, inStock: true },
    ];


    const newProducts = products.map(products_html)

    function products_html(product){
        return `<li class="${ product.inStock ? 'available' : 'unavailable'}">${product.name} - $${product.price.toLocaleString()}</li>`
    }

    console.log(newProducts)

