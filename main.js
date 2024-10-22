// 1. Funciones flecha

// Convierte la siguiente función en una función flecha:
// function saludar() {
//   return "Hola";
// }
const saludar = () => "Hola"

// Convierte la siguiente función en una función flecha en línea:
// function division(a,b) {
//   return a / b;
// }
const division = (a, b) => a/b

// Convierte la siguiente función en una función flecha:
// function miNombre(nombre) {
//   return `Mi nombre es ${nombre}`;
// }
const miNombre = (nombre) => `Mi nombre es ${nombre}`

// Convierte las siguientes funciones en funciones flecha:
// function test2() {
//   console.log("Función test 2 ejecutada.");
// }
// function test1(callback) {
//   callback();
// }	
const test2 = () => console.log("Función test 2 ejecutada.")
const test1 = (callback) => callback()

// 2. Foreach
// Utiliza la siguiente array para resolver los próximos ejercicios: 
      
let gente = [
        {
          nombre: "Jamiro",
          edad: 45,
        },
        {
          nombre: "Juan",
          edad: 35,
        },
        {
          nombre: "Paco",
          edad: 34,
        },
        {
          nombre: "Pepe",
          edad: 14,
        },
        {
          nombre: "Pilar",
          edad: 24,
        },
        {
          nombre: "Laura",
          edad: 24,
        },
        {
          nombre: "Jenny",
          edad: 10,
        },
      ];
    
// Crea un array con la gente mayor de 25 años y muéstralo por consola.
const mayores25 = []

gente.forEach(mayor => {
  if(mayor.edad > 25){
    mayores25.push(mayor)
  }
 });
 console.log(mayores25);
 
// Crea un array con la gente que empieza por J. 
const empiezaJ = []

gente.forEach(jotero => {
  if(jotero.nombre[0] == "J"){
    empiezaJ.push(jotero)
  }
 }); 
      
// 3. Map
// Utilizando el array de antes crea un array con la gente mayor de 25 años y muéstralo por consola.
const mayores25Map = gente.map(mayor =>{
  if(mayor.edad>25){
    return mayor
  }
})
console.log(mayores25Map);

// Crea un array con la gente que empieza por J. 
const empiezaJMap = gente.map(jotero =>{
  if(jotero.nombre[0] == "J"){
    return jotero
  }
})
console.log(empiezaJMap);

// Dado el siguiente array, crear otro que sea el resultado de elevar cada número a si mismo:
const numbers = [ 4, 5, 6, 7, 8, 9, 10];

// // Resultado esperado
// // [256, 3125, 46656, 823543, 16777216, 387420489, 10000000000]
const numbersPow = numbers.map((value)=>{
  return Math.pow(value, value)
})
console.log(numbersPow);
     
      
// 4. Filter
// Crea un segundo array que devuelva los impares
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersPeers = numbers2.filter(numero => numero%2 == 0)
console.log(numbersPeers);

// Dado el siguiente array, genera un segundo array que filtre los platos veganos y saque una sentencia como la del ejemplo:
       const foodList = [
        { name: 'Tempeh', isVeggie: true },
        { name: 'Cheesbacon burguer', isVeggie: false },
        { name: 'Tofu burguer', isVeggie: true },
        { name: 'Entrecot', isVeggie: false }
      ];
const veganFood = foodList.filter(food => food.isVeggie == true)
console.log(veganFood);

// 5. Reduce
// Dado el siguiente array, obtén la multiplicación de todos los elementos del array:
const numeros = [39, 2, 4, 25, 62];
// Salida--> 483600
const mult = numeros.reduce((a, b)=> a * b)
console.log(mult);

      