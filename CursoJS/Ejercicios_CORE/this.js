// Ejercicio 1 — perder el this
const user = {
    name: "Ana",
    sayHi() { 
        console.log(this.name); 
        setTimeout(() => user.sayHi, 100)
    }
};

user.sayHi()

const counter = {
  count: 0,
  increment() { 
    this.count++; console.log(this.count); 
  },
  decrement() { 
    this.count--; console.log(this.count); 
  }
};

counter.increment(); 
counter.decrement(); 
