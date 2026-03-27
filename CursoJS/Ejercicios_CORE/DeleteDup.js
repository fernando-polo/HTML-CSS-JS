// Eliminar los duplicados de la lista
//     Hacer la lista en un set

let lst = [1,2,2,3,4,4]
const new_lst = [... new Set(lst)]
console.log(new_lst)