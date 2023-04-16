import { ProductosServicio } from "./../servicios/producto.servicio.js";

const url = new URL(window.location);
const id = url.searchParams.get("id");
const imagen = document.querySelector("[data-imagen]");
const categoria = document.querySelector("[data-categoria]");
const nombre = document.querySelector("[data-nombre]");
const precio = document.querySelector("[data-precio]");
const descripcion = document.querySelector("[data-descripcion]");

if (id != null) {
    ProductosServicio.obtenerProducto(id)
        .then(respuesta => {
            console.log(respuesta);
            imagen.value = respuesta.imagen;
            categoria.value = respuesta.categoria;
            console.log(respuesta.categoria);
            nombre.value = respuesta.nombre;
            precio.value = respuesta.precio;
            descripcion.value = respuesta.descripcion;
        });
} else {
    window.location.href = './dashboard.html';
}

const formulario_editar = document.querySelector('#editarProducto');

const editar = (evento) => {
    evento.preventDefault();
    ProductosServicio.editarProducto(id, nombre.value, descripcion.value, categoria.value, precio.value, imagen.value)
        .then(() => {
            formulario_editar.reset();
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Se ha modificado correctamente",
                showConfirmButton: false,
                timer: 3000,
            }).then(() => {
                window.location.href = './dashboard.html';
            });
        });
}

formulario_editar.addEventListener('submit', editar);