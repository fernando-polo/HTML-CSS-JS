// Confirmar si un string es palindromo
    // Comprobar letra por letra el str junto a el mismo str pero invertido

    let str = 'anap'
    let str_inverso = [...str].reverse().join('')

    if (str === str_inverso){
        console.log(true)
    }
    else{
        console.log(false)
    }
