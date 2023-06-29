/* 1. Dado el arreglo [ ["a", "z", "t"], [789, 887, 451], [true, false, 0] ]:
a) Recorrer el arreglo imprimiendo todos sus elementos más internos usando ciclo for
b) Recorrer el arreglo imprimiendo todos sus elementos más internos usando ciclo forEach */

let arreglo=[ ["a", "z", "t"], [789, 887, 451], [true, false, 0] ]
for (let index = 0; arreglo.length; index++) {
    for (let j = 0; j < arreglo[index].length; j++) {
        console.log(arreglo[index][j])
    }  
}
arreglo.forEach(index=>{
    index.forEach(j=>{
        console.log(j)
    })
})