import data from '../datos/fotos'

const galeria = document.getElementById('galeria')

const cargarImagen = (id, nombre, ruta, descripcion) => {

    galeria.querySelector('.galeria__imagen').src = ruta
    galeria.querySelector('.galeria__imagen').dataset.idImagen = id //Creamos un atributo personalizado
    galeria.querySelector('.galeria__titulo').textContent = nombre
    galeria.querySelector('.galeria__descripcion-imagen-activa').textContent = descripcion

    const categoriaActual = galeria.dataset.categoria
    const fotos = data.fotos[categoriaActual]

    let indexImagenActual;
    fotos.forEach((foto, index) => {
        if (foto.id === id) {
            indexImagenActual = index
        }
    });


    //Marcamos el carousel como activa
    if (galeria.querySelectorAll('.galeria__carousel-slide') > 0) {
        //Eliminamos la clase active de cualquier slide
        galeria.querySelector('.galeria__carousel-slide--active').classList.remove('galeria__carousel-slide--active')

        galeria.querySelectorAll('.galeria__carousel-slide')[indexImagenActual].classList.add('galeria__carousel-slide--active')
    }
}

const cargarAnteriorSiguiente = (direccion) => {
    const categoriaActual = galeria.dataset.categoria
    const fotos = data.fotos[categoriaActual]
    const idImagenActual = Number(galeria.querySelector('.galeria__imagen').dataset.idImagen)
    let indexImagenActual;
    fotos.forEach((foto, index) => {
        if (foto.id === idImagenActual) {
            indexImagenActual = index
        }
    });

    if (direccion === 'siguiente') {
        if (fotos[indexImagenActual + 1]) {
            const { id, nombre, ruta, descripcion } = fotos[indexImagenActual + 1]
            cargarImagen(id, nombre, ruta, descripcion)

        }
    } else if (direccion === 'anterior') {
        if (fotos[indexImagenActual - 1]) {
            const { id, nombre, ruta, descripcion } = fotos[indexImagenActual - 1]
            cargarImagen(id, nombre, ruta, descripcion)
        }

    }
}



export {
    cargarImagen,
    cargarAnteriorSiguiente
}