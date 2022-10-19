function salute1(nombre){
    console.log('hola${nombre}.')
}
salute1('Oscar')

console.log(salute2)
var salute2 = function (nombre) {
    console.log('hola ${nombre}.')
}

var saludar = (nombre) => {return "Hola al sabroso de " + nombre; }
console.log(saludar ('Oscar'))