// Contar el número de ocurrencias de cada item de la lista
const lst = ['a', 'b', 'a', 'c', 'd', 'a']
const contador = {};

for (let i = 0; i < lst.length; i++) {
    const letra = lst[i];
    
    if (contador[letra] === undefined) {
        contador[letra] = 1;
    } else {
        contador[letra] = contador[letra] + 1;
    }
}

console.log(contador);