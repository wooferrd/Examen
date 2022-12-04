/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function index() {
  // Escribi una función encontraIndex en el prototipo de Arrays,
  // que recibe un elemento.
  // La function tiene que devolver el indice (index) del primer elemento que coincida con el pasado como parametro dentro del array.
  // Si el elemento se repite dentro del Array, este devuelve el indice del Primer elemento.
  // Si no existe ese elemento la funcion debe devolver -1
  // NO USAR LA FUNCION indexOf DE LOS ARREGLOS.
  // ej:
  // var numeros = [5, 6, 4, 65, 8, 4]
  // numeros.encontraIndex(4) debe devolver 2.
  // ya que el numero 4 se encuentra en la posicion 2 dentro del array.
  // numeros.encontraIndex(23) debe devolver -1 ya que ese elemento no existe en ese array.

  // Tu código aca:

}
function encuentraIndex(array, elemento) {
  for (let i=0;i<array.length;i++) {
    if (array[i] === elemento) {
      return i;
    }
  }
  return -1;
}
const miArray = [2,4,6,8,10,1,3,5,7,9];
let index = encuentraIndex(miArray, 5);
console.log('En la posición', index);

// No modifiques nada debajo de esta linea //

module.exports = index