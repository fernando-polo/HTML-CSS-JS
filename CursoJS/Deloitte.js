// 1. FizzBuzz
//     Del 1 al 100, imprime:
//     "Fizz" si es divisible entre 3
//     "Buzz" si es divisible entre 5
//     "FizzBuzz" si es divisible entre ambos
//     El número si no cumple ninguna condición


for(let i=1; i<=100; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log('FizzBuzz')
        }
        else if(i % 3 === 0){
            console.log('Fizz')
        }
        else if(i % 5 === 0){
            console.log('Buzz')
        }
        else{
            console.log(i)
        }
}

// 2. Palíndromo
// Dado un string, determina si se lee igual al derecho y al revés.
// "racecar" → true | "hello" → false

// La palabra original tengo que desarmarla,, voltearla y unirla, entonces verificar si es lo mismo y devolver un valor true or false

const isPalindrome = ((wrd) => {
    const cleanedWord = wrd.toLowerCase()
    const reversed = [...cleanedWord].reverse().join('')
    return cleanedWord === reversed
})
console.log(isPalindrome('ANa'))


// 3. Contar vocales
// Dado un string, retorna cuántas vocales tiene.
// "hola mundo" → 3

    // Iterar sobre cada letra del String
    // Si hay una vocal sumar 1 
    // Si no hay una vocal, ignorar y pasar al otro 

const vocalesArray = ['a', 'e', 'i', 'o', 'u']
let contadorVocales = 0

function cuantasVocales(wrd){
    for (let letra of wrd){
        if(vocalesArray.includes(letra)){
            contadorVocales ++
        }
    }
    return contadorVocales
}

console.log(cuantasVocales('anabelle'))

// 4. Duplicados
// Dado un array, retorna un nuevo array solo con los elementos que se repiten.
// [1, 2, 3, 2, 4, 1] → [2, 1]
const numbersArray = [1, 2, 3, 2, 4, 1]
const noDuplicatesArray = []

const noDuplicatesReduce = numbersArray.reduce((acc, number) => {
    if(!acc[number]){
        acc[number] = 1
    }
    else{
        acc[number]++
    }
    return acc
},{})

function isNoDuplicates(){
    for (let i in noDuplicatesReduce){
        if (noDuplicatesReduce[i] >= 2){
            noDuplicatesArray.push(Number(i))
        }
    }
    return noDuplicatesArray
}

console.log(isNoDuplicates())






// 5. Aplanar array
// Dado un array con arrays adentro, retorna todo en un solo nivel.
// [1, [2, 3], [4, [5]]] → [1, 2, 3, 4, 5]
let complexArray = [1, [2, 3], [4, [5]]]
console.log(complexArray.flat(Infinity))


// 6. Contar ocurrencias
// Dado un string, retorna un objeto con cuántas veces aparece cada carácter.
// "banana" → { b: 1, a: 3, n: 2 }

// iterar por cada letra de la palabra
// guardar en una variable, en esta caso un objeto cada letra, si es nueva una letra la declaras y la guardas, si no, la sumas


const wrd = 'banana'
const iterableWrd = [...wrd]

const characterObject = iterableWrd.reduce((acc, character) => {
    if (!acc[character]){
        acc[character] = 1
    }
    else{
        acc[character]++
    }
    return acc
},{})

console.log(characterObject)


// 7. Agrupar por propiedad
// Dado un array de objetos, agrúpalos por una propiedad dada.
// [{nombre: "Ana", rol: "dev"}, {nombre: "Luis", rol: "qa"}, {nombre: "María", rol: "dev"}]
// { dev: ["Ana", "María"], qa: ["Luis"] }

const empleados = [
    {nombre: "Ana", rol: "dev"}, 
    {nombre: "Luis", rol: "qa"}, 
    {nombre: "María", rol: "dev"}
]


const res = empleados.reduce((acc, empleado) => {
    if(!acc[empleado.rol]){
        acc[empleado.rol] = [empleado.nombre]
    }
    else{
        acc[empleado.rol].push(empleado.nombre)
    }
    return acc
}, {})

console.log(res)


// 8. Promesas en cadena
// Simula dos llamadas a una API con setTimeout. 
// La segunda solo se ejecuta si la primera fue exitosa. Maneja el error si alguna falla.

function llamadaAPI(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data) // simula éxito
    //   reject('No jalo este pd')
    }, 1000)
  })
}

async function fetchData() {
  try {
    const res1 = await llamadaAPI("datos del primer fetch")
    console.log("Primera llamada exitosa:", res1)
    const res2 = await llamadaAPI("datos del segundo fetch")
    console.log('Segunda llamada si jaló', res2)

  } catch(error) {
    console.log("Algo falló:", error)
  }
}

fetchData()