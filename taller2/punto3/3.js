/* 3. Dado el arreglo [ [2, 8, 9], [30, 71, 77], [11, 990, 41] ]:
a) Recorrer todos sus elementos más internos y mostrar los números que sean impares. Use cualquier ciclo, for o
forEach.
b) Recorrer todos sus elementos más internos y mostrar la suma de estos. Como sugerencia use una variable
para acumular la suma, declarela antes del ciclo. Use cualquier ciclo, for o forEach. */
/* let arreglo =[ [2, 8, 9], [30, 71, 77], [11, 990, 41] ]
for (let i = 0; i < arreglo.length; i++) {
  for (let j = 0; j < arreglo[i].length; j++) {
    if (arreglo[i][j] % 2 !== 0) {
      console.log(arreglo[i][j]);
    }
  }
}
 */
let arreglo=[ [2, 8, 9], [30, 71, 77], [11, 990, 41] ]
let suma = 0;
for (let i = 0; i < arreglo.length; i++) {
  for (let j = 0; j < arreglo[i].length; j++) {
    suma = suma + arreglo[i][j];
  }
}

console.log(suma);
