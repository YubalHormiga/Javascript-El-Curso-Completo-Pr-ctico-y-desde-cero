import dataFotos from './datos/fotos'
import { cargarImagen } from './galeria/cargarImagen'
const contenedorCategorias = document.getElementById('categorias')
const galeria = document.getElementById('galeria')

contenedorCategorias.addEventListener('click', (e) => {
    e.preventDefault()

    if (e.target.closest('a')) {
        //Añadimos clase
        galeria.classList.add('galeria--active')
        document.body.style.overflow = 'hidden' // escondemos scroll

        const categoriaActiva = e.target.closest('a').dataset.categoria//averiguamos la categoria 
        galeria.dataset.categoria = categoriaActiva // añadimos una nueva categoria

        const fotos = dataFotos.fotos[categoriaActiva] //vemos las fotos de esa categoria

        const { id, nombre, ruta, descripcion } = fotos[0]

        cargarImagen(id, nombre, ruta, descripcion)

        const carousel = galeria.querySelector('.galeria__carousel-slides')
        carousel.innerHTML = '' //para dejar el carousel en blanco y no se acumulen fotos
        //Cramos un a por  cada una de las fotos
        fotos.forEach(foto => {
            const slide = `
            <a href="#" class="galeria__carousel-slide">
            <img class="galeria__carousel-image" src="${foto.ruta}" alt="${foto.id}" data-id="${foto.id}"/>
             </a>
          `
            galeria.querySelector('.galeria__carousel-slides').innerHTML += slide
        });

        galeria.querySelector('.galeria__carousel-slides').classList.add('galeria__carousel-slides--active')
    }

})