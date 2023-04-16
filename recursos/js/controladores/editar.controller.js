import { ProductosServicio } from "./../servicios/producto.servicio.js";

const url = new URL(window.location);
const id = url.searchParams.get("id");

if (id != null) {
    ProductosServicio.obtenerProducto(id)
        .then(respuesta => {
            console.log(respuesta);
            const imagen = document.querySelector("[data-imagen]");
            const categoria = document.querySelector("[data-categoria]");
            const nombre = document.querySelector("[data-nombre]");
            const precio = document.querySelector("[data-precio]");
            const descripcion = document.querySelector("[data-descripcion]");
            imagen.value = respuesta.imagen;
            categoria.value = respuesta.tipo;
            nombre.value = respuesta.nombre;
            precio.value = respuesta.precio;
            descripcion.value = respuesta.descripcion;
        });
}