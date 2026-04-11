// return the sum of 2 integers

function sum(a,b){
    if(typeof(a) !== 'number' || typeof(b) !== 'number' ){
        throw new Error('Both values must be integers')
    }
    return a + b
} 

console.log(sum(1,2))


// return true if n is even, false otherwise
function nIsEven(n){
    if(typeof(n) !== 'number' || n < 0){
        throw new Error('n must be an integer and positive')
    }
    return n % 2 === 0
}

console.log(nIsEven(2))


// return factorial of n
function factorialN(n){
    if(typeof(n) !== 'number' || n < 0){
        throw new Error('n must be an integer and a positive one')
    }
    else if(n === 0 || n === 1){
        return 1
    }
    else{
        return n * factorialN(n - 1)
    }
}

console.log(factorialN(5))


function fibonacci(n){
    if(typeof(n) !== 'number' || n < 0){
        throw new Error('n must be an integer and a positive one')
    }
    else if(n < 2){
        return n
    }
    else{
        return (fibonacci(n - 1) + fibonacci(n - 2) )
    }
}

console.log(fibonacci(2))