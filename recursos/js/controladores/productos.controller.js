import { ProductosServicio } from "./../servicios/producto.servicio.js";
const productos = document.querySelector('.productos');

async function obtenerProductos() {
    try {
        const url = new URL(window.location);
        const busqueda = url.searchParams.get("q");

        const obtener_productos = await ProductosServicio.productos();

        obtener_productos.forEach(elemento => {
            if(busqueda == null) {
                const producto = document.createElement('div');
                producto.classList.add('producto');
                const producto_contenido = `
                    <a href="#" class="producto-sinlink" role="link">
                        <img src="${elemento.imagen}" alt="Producto 1" class="producto-imagen">
                    </a>
                    <p class="producto-nombre">
                        <a href="#" class="producto-sinlink" role="link">${elemento.nombre}</a>
                    </p>
                    <p class="producto-precio">${elemento.precio}</p>
                `;
                producto.innerHTML = producto_contenido;
                productos.insertBefore(producto, productos.children[0]);
            } else if(elemento.nombre.toLowerCase().includes(busqueda.toLowerCase())) {
                const producto = document.createElement('div');
                producto.classList.add('producto');
                const producto_contenido = `
                    <a href="#" class="producto-sinlink" role="link">
                        <img src="${elemento.imagen}" alt="Producto 1" class="producto-imagen">
                    </a>
                    <p class="producto-nombre">
                        <a href="#" class="producto-sinlink" role="link">${elemento.nombre}</a>
                    </p>
                    <p class="producto-precio">${elemento.precio}</p>
                `;
                producto.innerHTML = producto_contenido;
                productos.insertBefore(producto, productos.children[0]);
            }

        });
    } catch (error) {
        console.log('error');
    }
}

obtenerProductos();