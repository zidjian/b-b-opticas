import { ProductosServicio } from "./../servicios/producto.servicio.js";

const url = new URL(window.location);
const id = url.searchParams.get("id");
const imagen = document.querySelector("[data-carrucel]");
const nombre = document.querySelector("[data-nombre]");
const precio = document.querySelector("[data-precio]");
const descripcion = document.querySelector("[data-descripcion]");
const productos = document.querySelector(".productos");

if (id != null) {
    const mi_producto = await ProductosServicio.obtenerProducto(id);
    
    if(mi_producto) {
        imagen.innerHTML = `
            <swiper-slide>
                <img src="${mi_producto.imagen}" alt="" class="productoDetalle-imagen">
            </swiper-slide>
        `;
        nombre.textContent = mi_producto.nombre;
        precio.textContent = mi_producto.precio;
        descripcion.textContent = mi_producto.descripcion;
        
        // productosSimilares(mi_producto.categoria);
        productos.innerHTML = '';
        const productos_categoria = await ProductosServicio.productos();

        productos_categoria.forEach(elemento => {
            const producto = document.createElement("div");
            producto.classList.add("producto");

            const producto_contenido = `
                <a href="./producto.html?id=${elemento.id}" class="producto-sinlink" role="link">
                    <img src="${elemento.imagen}" alt="Producto 1" class="producto-imagen">
                </a>
                <p class="producto-nombre">
                    <a href="./producto.html?id=${elemento.id}" class="producto-sinlink" role="link">${elemento.nombre}</a>
                </p>
                <p class="producto-precio">${elemento.precio}</p>
                <a href="./producto.html?id=${elemento.id}" class="producto-link" role="link">Ver producto</a>
            `;
            producto.innerHTML = producto_contenido;

            if (elemento.categoria.toLowerCase().includes(mi_producto.categoria.toLowerCase())) {
                productos.insertBefore(producto, productos.children[0]);
            }
        });
    }

} else {
    window.location.href = './../../index.html';
}