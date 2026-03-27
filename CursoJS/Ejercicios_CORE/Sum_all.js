// Sumar todos los items de la lista

const lst_num = [1,2,3,4]

let res = lst_num.reduce((acc, item) => {
    return acc += item;
});

console.log(res)