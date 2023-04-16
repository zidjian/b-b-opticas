import { ProductosServicio } from "./../servicios/producto.servicio.js";


async function cargarDatos() {
    const productos_varon = document.querySelector('[data-categoria="Varón"]');
    const productos_mujer = document.querySelector('[data-categoria="Mujer"]');
    const productos_ninios = document.querySelector('[data-categoria="Niños"]');

    const productos = await ProductosServicio.productos();

    productos.forEach(elemento => {
        const producto = document.createElement("div");
        producto.classList.add("producto");

        const producto_contenido = `
            <a href="./recursos/paginas/producto.html?id=${elemento.id}" class="producto-sinlink" role="link">
                <img src="${elemento.imagen}" alt="Producto 1" class="producto-imagen">
            </a>
            <p class="producto-nombre">
                <a href="./recursos/paginas/producto.html?id=${elemento.id}" class="producto-sinlink" role="link">${elemento.nombre}</a>
            </p>
            <p class="producto-precio">${elemento.precio}</p>
            <a href="./recursos/paginas/producto.html?id=${elemento.id}" class="producto-link" role="link">Ver producto</a>
        `;
        producto.innerHTML = producto_contenido;

        console.log(producto);

        if (elemento.categoria.toLowerCase().includes('varón')) {
            productos_varon.insertBefore(producto, productos_varon.children[0]);
        }
        if (elemento.categoria.toLowerCase().includes('mujer')) {
            productos_mujer.insertBefore(producto, productos_mujer.children[0]);
        }
        if (elemento.categoria.toLowerCase().includes('niños')) {
            productos_ninios.insertBefore(producto, productos_ninios.children[0]);
        }
    });
}

cargarDatos();