/*
    📌 Eliminar elementos del DOM
*/

const eliminarCaja = () => {
    const padre = document.querySelector('#contenedor1')
    const cajaAEliminar = document.querySelector('.caja');

    if (cajaAEliminar) {

        padre.removeChild(cajaAEliminar);
    }
};