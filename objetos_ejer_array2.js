const{dato}=require("./dataest");

//console.log("Datos de estudiantes", dato)
//1. Devuelve al array de objetos estudiantes
//resultado esperando:[{estudiante:"Juan perez"},{estudiante:"jose de la cuadra"}]
const nombres_estu= dato.map(({estudiante})=>(
    {
        ["estudiante"]:estudiante,
        
    }
    )
    )
    console.log("Ejercicio #1:",nombres_estu)


//2 Devuelve el array de estudiantes ordenados de la z a la a
//resultado esperando:["Juan perez","jose de la cuadra"]
const arrayest=dato.map(item=>{
    return item.estudiante
}).sort().reverse()

console.log("Ejercicio #2:",arrayest)
//3 Devuelve en un array la sumatoria de parciales
//resultado esperado:[92,150,43]
const sumatoriapar=dato.map(item=>{
    return item.parciales.reduce((a,par)=>{
        return a+par
    },0)
})
console.log("Ejercicio #3:",sumatoriapar)
//4 Devuelve el promedio de los parciales (un solo bloque de codigo)
//resultado esperado:123.44
const promedio=dato.map(item=>{
    return item.parciales.reduce((a,par)=>{
        return a+par
    },0)
}).reduce((acum,valor)=>acum+valor,0)/dato.length

console.log("Ejercicio #4:",promedio)
//5 Devuelve un array de objetos que contiene  el nombre del estudiante , la materia y la sumatoria de los parciales
/*Resultado esperado:[
    {estudiantes:"Juana",materia:"Algoritmos",Sumaparciales:120}
    {estudiantes:"Juana",materia:"Algoritmos",Sumaparciales:110}
]
*/
const comple=dato.map(item=>{
    return {estudiante: item.estudiante,materia: item.materia,
    sumaparciales:item.parciales.reduce((acum,valor)=>acum+valor,0)
    } 
})

console.log("Ejercicio #5",comple)
//6 Devuleve un array de objetos que incluye el nombre del estudiante la materia , la suma de parciales y la nota final
//la nota final es igual a la sumatoria de los parciales + nota teorica + nota practica
/*(un solo bloque de codigo)
resultado esperado:
[
    {estudiante:"Juana",materia:"Algoritmos",sumaparciales:120,notafinal:160}
     {estudiante:"Pedro",materia:"Algoritmos",sumaparciales:110,notafinal:175}
]
*/
const sumatoriaf=dato.map(item=>{
    return {
        estudiante: item.estudiante, materia: item.materia,sumaparciales:item.parciales.reduce((acum,d)=>acum+d,0),
        notafinal:item.parciales.reduce((acum,d)=>acum+d,0)+item.examen_final.practica+item.examen_final.teoria
    }

})
console.log("Ejercicio #6",sumatoriaf)
//7. Agregue 2 registros al array data para la asignatura Física. A continuación, 
//devuelva el promedio del campo notafinal de la materia Algoritmos.
//Resultado esperado: { materia : "Algoritmos" , promedio: 178.22} 

const algoritmos = dato.filter(item => item.materia == "Algoritmos");
const promedi = algoritmos.reduce((acum, item) => {
    const notaFinal = item.parciales.reduce((acum, parc) => 
    acum + parc, 0) + item.examen_final.teoria + item.examen_final.practica;
    return acum + notaFinal;
}, 0) / algoritmos.length;
console.log("")
console.log("Ejercicio#7",{materia: "Algoritmos", promedi:promedi.toFixed(2)});

/*
8. Diseñe  la función que recibe como parámetro una letra del alfabeto(puede estar en mayúsculas
     o minúsculas). La función devuelve el array data para aquellos estudiantes que empiezan con esa letra 
     (se deben incluir todos los campos)
por ejemplo si la letra es la A o la a:
*/
function estudiantesPorLetra(letra) {
    letra = letra.toLowerCase();
    return dato.filter(estudiante => estudiante.estudiante.toLowerCase().startsWith(letra));
  }
console.log("Ejercicio# 8",estudiantesPorLetra("A"))  