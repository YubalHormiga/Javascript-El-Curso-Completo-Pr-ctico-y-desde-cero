const producto = document.getElementById('producto')
const productoImagen = producto.querySelector('.producto__imagen')
const thumbs = producto.querySelector('.producto__thumbs')
//ℂ𝕠𝕝𝕠𝕣
const propiedadColor = producto.querySelector('#propiedad-color')
//ℂ𝕒𝕟𝕥𝕚𝕕𝕒𝕕
const btnIncrementarCantidad = producto.querySelector('#incrementar-cantidad')
const btnDisminuirCantidad = producto.querySelector('#disminuir-cantidad')
const inputCantidad = producto.querySelector('#cantidad')

thumbs.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        //𝕆𝕓𝕥𝕖𝕟𝕖𝕞𝕠𝕤  𝕖𝕝  𝕤𝕣𝕔 𝕕𝕖 𝕝𝕒 𝕚𝕞𝕒𝕘𝕖𝕟
        const imgSrc = e.target.src
        //𝕆𝕓𝕥𝕖𝕟𝕖𝕞𝕠𝕤 𝕝𝕒 𝕡𝕠𝕤𝕚𝕔𝕚ó𝕟 𝕕𝕖𝕝 𝕦𝕝𝕥𝕚𝕞𝕠 
        const lastIndex = imgSrc.lastIndexOf('/')
        //ℂ𝕠𝕣𝕥𝕒𝕞𝕠𝕤 𝕝𝕒 𝕔𝕒𝕕𝕖𝕟𝕒 𝕕𝕖 𝕥𝕖𝕩𝕥𝕠 𝕡𝕒𝕣𝕒 𝕠𝕓𝕥𝕖𝕟𝕖𝕣 𝕤𝕠𝕝𝕒𝕞𝕖𝕟𝕥𝕖 𝕦𝕟𝕒 𝕡𝕒𝕣𝕥𝕖
        const nombreImagen = imgSrc.substring(lastIndex + 1)
        //ℂ𝕒𝕞𝕓𝕚𝕒𝕞𝕠𝕤 𝕝𝕒 𝕣𝕦𝕥𝕒 𝕕𝕖 𝕝𝕒 𝕚𝕞𝕒𝕘𝕖𝕟 
        productoImagen.src = `./img/tennis/${nombreImagen}`
    }
})


propiedadColor.addEventListener('click', (e) => {
    if (e.target.tagName === 'INPUT') {
        productoImagen.src = `./img/tennis/${e.target.value}.jpg`
    }
})

btnIncrementarCantidad.addEventListener('click', (e) => {
    inputCantidad.value = parseInt(inputCantidad.value) + 1
})

btnDisminuirCantidad.addEventListener('click', (e) => {
    if (parseInt(inputCantidad.value) > 1){
        inputCantidad.value = parseInt(inputCantidad.value) - 1
    }
})
