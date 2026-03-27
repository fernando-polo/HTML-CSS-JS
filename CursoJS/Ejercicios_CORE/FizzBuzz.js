// FizzBuzz
    // Recorrer una lista de números del 0 al 100
    // Verificar cada número;  
    //     Si el número es multiplo de 3 -> Fizz
    //     Si el número es multiplo de 5 -> Buzz
    //     Si el número es ambos -> FizzBuzz

    let i = 1

    while (i <= 100){
        if (i % 3 === 0 && i % 5 === 0){
            console.log('FizzBuzz')
            i++;
        }
        else if (i % 3 === 0){
            console.log('Fizz')
            i++;
        }
        else if (i % 5 === 0){
            console.log('Buzz')
            i++;
        }
        else{
            console.log(i)
        }
        i++;
    }