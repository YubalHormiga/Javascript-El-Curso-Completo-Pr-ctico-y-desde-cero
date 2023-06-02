import datos from '../datos/fotos'
import { cargarImagen } from './cargarImagen'

const slideClick = (e)=>{

    let ruta, nombre, descripcion
    const galeria = document.getElementById('galeria')
    const id = Number(e.target.dataset.id)

    const categoriaActiva = galeria.dataset.categoria
    // console.log('hiciste click en un slide', id, categoriaActiva)
    // console.log(datos.fotos[categoriaActiva])
    datos.fotos[categoriaActiva].forEach(foto => {
       if(foto.id === id){
        ruta = foto.ruta
        nombre = foto.nombre
        descripcion = foto.descripcion
       }

    });
    
    cargarImagen(id, nombre, ruta, descripcion)
}
export default slideClick