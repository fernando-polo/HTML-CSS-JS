// Crea una función async que obtenga los empleados y filtre solo los del departamento "tech", 
// luego imprime sus nombres y salarios.

function obtenerEmpleados() {
    const empleados = [
        { nombre: "Ana", departamento: "tech", salario: 32000 },
        { nombre: "Luis", departamento: "marketing", salario: 28000 },
        { nombre: "Sofía", departamento: "tech", salario: 35000 },
        { nombre: "Pedro", departamento: "marketing", salario: 30000 },
    ]
    return new Promise((resolve) => {
        setTimeout(() => resolve(empleados), 1000)
    })
}

async function empleadoTech(){
    try{
        const empleados = await obtenerEmpleados()
        const empleadosTech = empleados
            .filter(e => e.departamento === "tech")
            .map(({nombre, salario}) => ({ nombre, salario: salario.toLocaleString("es-MX")}))
        console.log(empleadosTech)
    }
    catch (error){
        console.log(error)
    }
}

empleadoTech()