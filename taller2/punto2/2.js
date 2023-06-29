/* 2. Dado el arreglo [ [ ["%", 7, true, "#"] , ["&", 55, false, "="] ], [ [false, 0, 99, "?"] , [true, 1000, “@”, "¡"] ], [ [44, 55,66, 77], [1, 2, 3, 4] ] ]
a) Recorrer el arreglo imprimiendo todos sus elementos más internos usando ciclo for
b) Recorrer el arreglo imprimiendo todos sus elementos más internos usando ciclo forEach */
let arreglo= [ [ ["%", 7, true, "#"] , ["&", 55, false, "="] ], [ [false, 0, 99, "?"] , [true, 1000, "@", "¡"] ], [ [44, 55,66, 77], [1, 2, 3, 4] ] ]
    
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