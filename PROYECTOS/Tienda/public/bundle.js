'use strict';

const producto$1 = document.getElementById('producto');
const productoImagen = producto$1.querySelector('.producto__imagen');
const thumbs = producto$1.querySelector('.producto__thumbs');
//ℂ𝕠𝕝𝕠𝕣
const propiedadColor = producto$1.querySelector('#propiedad-color');
//ℂ𝕒𝕟𝕥𝕚𝕕𝕒𝕕
const btnIncrementarCantidad = producto$1.querySelector('#incrementar-cantidad');
const btnDisminuirCantidad = producto$1.querySelector('#disminuir-cantidad');
const inputCantidad = producto$1.querySelector('#cantidad');

thumbs.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        //𝕆𝕓𝕥𝕖𝕟𝕖𝕞𝕠𝕤  𝕖𝕝  𝕤𝕣𝕔 𝕕𝕖 𝕝𝕒 𝕚𝕞𝕒𝕘𝕖𝕟
        const imgSrc = e.target.src;
        //𝕆𝕓𝕥𝕖𝕟𝕖𝕞𝕠𝕤 𝕝𝕒 𝕡𝕠𝕤𝕚𝕔𝕚ó𝕟 𝕕𝕖𝕝 𝕦𝕝𝕥𝕚𝕞𝕠 
        const lastIndex = imgSrc.lastIndexOf('/');
        //ℂ𝕠𝕣𝕥𝕒𝕞𝕠𝕤 𝕝𝕒 𝕔𝕒𝕕𝕖𝕟𝕒 𝕕𝕖 𝕥𝕖𝕩𝕥𝕠 𝕡𝕒𝕣𝕒 𝕠𝕓𝕥𝕖𝕟𝕖𝕣 𝕤𝕠𝕝𝕒𝕞𝕖𝕟𝕥𝕖 𝕦𝕟𝕒 𝕡𝕒𝕣𝕥𝕖
        const nombreImagen = imgSrc.substring(lastIndex + 1);
        //ℂ𝕒𝕞𝕓𝕚𝕒𝕞𝕠𝕤 𝕝𝕒 𝕣𝕦𝕥𝕒 𝕕𝕖 𝕝𝕒 𝕚𝕞𝕒𝕘𝕖𝕟 
        productoImagen.src = `./img/tennis/${nombreImagen}`;
    }
});


propiedadColor.addEventListener('click', (e) => {
    if (e.target.tagName === 'INPUT') {
        productoImagen.src = `./img/tennis/${e.target.value}.jpg`;
    }
});

btnIncrementarCantidad.addEventListener('click', (e) => {
    inputCantidad.value = parseInt(inputCantidad.value) + 1;
});

btnDisminuirCantidad.addEventListener('click', (e) => {
    if (parseInt(inputCantidad.value) > 1){
        inputCantidad.value = parseInt(inputCantidad.value) - 1;
    }
});

var data = {
    productos: [
        {
            id: '1',
            nombre: 'Tennis Converse Standart.',
            descripcion: 'Lorem ipsum dolor sit me',
            precio: 501.0,
            colores: ['negro', 'rojo', 'amarillo'],
            tamaños: ['1,5', '2', '2.5', '3', '4']
        },
        {
            id: '2',
            nombre: 'Tennis Converse 2000.',
            descripcion: 'Lorem ipsum dolor sit me',
            precio: 450.0,
            colores: ['negro', 'rojo', 'amarillo'],
            tamaños: ['1,5', '2', '2.5', '3', '4']
        }
    ]
};

const botonesAbrirCarrito = document.querySelectorAll('[data-accion="abrir-carrito"]');
const botonesCerrarCarrito = document.querySelectorAll('[data-accion="cerrar-carrito"]');
const ventanaCarrito = document.getElementById('carrito');
const btnAgregarCarrito = document.getElementById('agregar-al-carrito');
const producto = document.getElementById('producto');
const notificacion = document.getElementById('notificacion');

let carrito = [];

const formatearMoneda = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' });

const renderCarrito = () => {
    ventanaCarrito.classList.add('carrito--active');

    //ℙ𝕒𝕣𝕒 𝕝𝕚𝕞𝕡𝕚𝕒𝕣 𝕝𝕠𝕤 𝕡𝕣𝕠𝕕𝕦𝕔𝕥𝕠 𝕒𝕟𝕥𝕖𝕣𝕚𝕠𝕣𝕖𝕤
    const productosAnteriores = ventanaCarrito.querySelectorAll('.carrito__producto');
    productosAnteriores.forEach((producto) => producto.remove());

    let total = 0;

    //ℂ𝕠𝕞𝕡𝕣𝕠𝕓𝕒𝕞𝕠𝕤 𝕤𝕚 𝕙𝕒𝕪 𝕡𝕣𝕠𝕕𝕦𝕔𝕥𝕠𝕤
    if (carrito.length < 1) {
        ventanaCarrito.classList.add('carrito--vacio');

    } else {
        //𝔼𝕝𝕚𝕞𝕚𝕟𝕒𝕞𝕠𝕤 𝕝𝕒 𝕔𝕝𝕒𝕤𝕖
        ventanaCarrito.classList.remove('carrito--vacio');
        //𝕀𝕥𝕖𝕣𝕒𝕞𝕠𝕤 𝕤𝕠𝕓𝕣𝕖 𝕔𝕒𝕕𝕒 𝕡𝕣𝕠𝕕𝕦𝕔𝕥𝕠 𝕕𝕖𝕝 𝕔𝕒𝕣𝕣𝕚𝕥𝕠 𝕪  𝕝𝕠𝕤 𝕞𝕠𝕤𝕥𝕣𝕒𝕞𝕠𝕤
        carrito.forEach(productoCarrito => {
            const { cantidad, color, nombre, tamaño } = productoCarrito;
            //𝕆𝕓𝕥𝕖𝕟𝕖𝕞𝕠𝕤 𝕖𝕝 𝕡𝕣𝕖𝕔𝕚𝕠 𝕕𝕖𝕝 𝕒𝕣𝕔𝕙𝕚𝕧𝕠 𝕡𝕣𝕠𝕕𝕦𝕔𝕥𝕠.𝕛𝕤
            //ℂ𝕦𝕒𝕟𝕕𝕠 𝕖𝕝 𝕚𝕕 𝕕𝕖𝕝 𝕚𝕥𝕖𝕞 𝕕𝕖𝕝 𝕔𝕒𝕣𝕣𝕚𝕥𝕠 𝕤𝕖𝕒 𝕚𝕘𝕦𝕒𝕝 𝕒 𝕒𝕝𝕘𝕦𝕟𝕠 𝕕𝕖 𝕝𝕒 𝕝𝕚𝕤𝕥𝕒
            data.productos.forEach((productoBaseDatos) => {
                if (productoBaseDatos.id === productoCarrito.id) {
                    productoCarrito.precio = productoBaseDatos.precio;

                    total += (productoBaseDatos.precio * productoCarrito.cantidad);
                    console.log(total);
                }
            });
            //ℙ𝕒𝕣𝕒 𝕓𝕦𝕤𝕔𝕒𝕣 𝕝𝕒 𝕣𝕦𝕥𝕒 𝕕𝕖 𝕝𝕒𝕤 𝕚𝕞𝕒𝕘𝕖𝕟𝕖𝕤 
            let thumbSrc = producto.querySelectorAll('.producto__thumb-img')[0].src;

            if (productoCarrito.color === 'rojo') {
                thumbSrc = './img/thumbs/rojo.jpg';
            } else if (productoCarrito.color === 'amarillo') {
                thumbSrc = './img/thumbs/amarillo.jpg';
            }
            // console.log(thumbSrc)

            //ℂ𝕣𝕖𝕒𝕞𝕠𝕤 𝕔𝕒𝕣𝕣𝕚𝕥𝕠
            const itemCarrito = document.createElement('DIV');
            itemCarrito.classList.add('carrito__producto');
            const plantillaProducto = `
        <div class="carrito__producto-info">
            <img src="${thumbSrc}" alt="" class="carrito__thumb" />
            <div>
                <p class="carrito__producto-nombre">
                    <span class="carrito__producto-cantidad">${cantidad} x </span>${nombre}
                </p>
                <p class="carrito__producto-propiedades">
                    Tamaño:<span>${tamaño}</span> Color:<span>${color}</span>
                </p>
            </div>
        </div>
        <div class="carrito__producto-contenedor-precio">
            <button class="carrito__btn-eliminar-item" data-accion="eliminar-item-carrito">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"
                    />
                </svg>
            </button>
            <p class="carrito__producto-precio">${formatearMoneda.format(productoCarrito.precio * productoCarrito.cantidad)}</p>
        </div>
        `;
            itemCarrito.innerHTML = plantillaProducto;

            ventanaCarrito.querySelector('.carrito__body').appendChild(itemCarrito);
        });
    }

    ventanaCarrito.querySelector('.carrito__total').innerText = formatearMoneda.format(total);

};



//𝔸𝕓𝕣𝕚𝕣 𝕔𝕒𝕣𝕣𝕚𝕥𝕠

botonesAbrirCarrito.forEach((boton) => {
    boton.addEventListener('click', (e) => {
        renderCarrito();
    });
});
//ℂ𝕖𝕣𝕣𝕒𝕣 𝕔𝕒𝕣𝕣𝕚𝕥𝕠

botonesCerrarCarrito.forEach((boton) => {
    boton.addEventListener('click', (e) => {
        ventanaCarrito.classList.remove('carrito--active');
    });
});

//𝔸𝕘𝕣𝕖𝕘𝕒𝕣 𝕒𝕝 ℂ𝕒𝕣𝕣𝕚𝕥𝕠 
btnAgregarCarrito.addEventListener('click', (e) => {
    const id = producto.dataset.productoId; // Viene de data personalizado **data-producto-id="1"**
    const nombre = producto.querySelector('.producto__nombre').textContent;
    const cantidad = parseInt(producto.querySelector('#cantidad').value);
    const color = producto.querySelector('#propiedad-color input:checked').value;
    const tamaño = producto.querySelector('#propiedad-tamaño input:checked').value;

    if (carrito.length > 0) {
        let productoEnCarrito = false;
        carrito.forEach(item => {
            if (item.id === id && item.nombre === nombre && item.color === color && item.tamaño === tamaño) {

                item.cantidad += cantidad;
                productoEnCarrito = true;
            }
        });
        if (!productoEnCarrito) {
            const productoSeleccionado = {
                id,
                nombre,
                cantidad,
                color,
                tamaño,
            };

            carrito.push(productoSeleccionado);
        }


    } else {

        const productoSeleccionado = {
            id,
            nombre,
            cantidad,
            color,
            tamaño,
        };

        carrito.push(productoSeleccionado);
    }
    //𝔼𝕤𝕥𝕒𝕓𝕝𝕖𝕔𝕖𝕞𝕠𝕤 𝕝𝕒 𝕣𝕦𝕥𝕒 𝕕𝕖 𝕝𝕒 𝕚𝕞𝕒𝕘𝕖𝕟 𝕢𝕦𝕖 𝕢𝕦𝕖𝕣𝕖𝕞𝕠𝕤 𝕞𝕠𝕤𝕥𝕣𝕒𝕣
    let thumbSrc = producto.querySelectorAll('.producto__thumb-img')[0].src;

    if (color === 'rojo') {
        thumbSrc = './img/thumbs/rojo.jpg';
    } else if (color === 'amarillo') {
        thumbSrc = './img/thumbs/amarillo.jpg';
    }
    notificacion.querySelector('img').src = thumbSrc;


    notificacion.classList.add('notificacion--active');
    setTimeout(() => {
        notificacion.classList.remove('notificacion--active');
    }, 3000);

});

//𝔹𝕠𝕥𝕠𝕟𝕖𝕤 𝕕𝕖 𝔼𝕝𝕚𝕞𝕚𝕟𝕒𝕣
ventanaCarrito.addEventListener('click', (e) => {
    if (e.target.closest('button')?.dataset.accion === 'eliminar-item-carrito') {
        const producto = e.target.closest('.carrito__producto');
        const indexProducto = [...ventanaCarrito.querySelectorAll('.carrito__producto')].indexOf(producto);

        carrito = carrito.filter((item, index) => {
            if (index !== indexProducto) {
                return item
            }
        });

        renderCarrito();
    }
});

//𝔹𝕠𝕥𝕠𝕟 𝕕𝕖 𝕖𝕟𝕧𝕚𝕒𝕣 𝕔𝕒𝕣𝕣𝕚𝕥𝕠 (𝕔𝕠𝕞𝕡𝕣𝕒𝕣)
document.querySelector('#carrito__btn-comprar').addEventListener('click', ()=>{
    console.log('Enviada compra¡¡¡¡', carrito);

});

class Tabs {
    constructor(idElemento) {
        this.tabs = document.getElementById(idElemento);
        this.nav = this.tabs.querySelector('.tabs');


        this.nav.addEventListener('click', (e) => {
            if ([...e.target.classList].includes('tabs__button')) {
                const tab = e.target.dataset.tab;

                if (this.tabs.querySelector('.tab--active')) {
                    this.tabs.querySelector('.tab--active').classList.remove('tab--active');
                }
                if (this.tabs.querySelector('.tabs__button--active')) {
                    this.tabs.querySelector('.tabs__button--active').classList.remove('tabs__button--active');
                }

                this.tabs.querySelector(`#${tab}`).classList.add('tab--active');

                e.target.classList.add('tabs__button--active');
            }
        });
    }
}

new Tabs('mas-informacion');
