import { ProductosServicio } from "./../servicios/producto.servicio.js";

const producto = document.querySelector(".productoEliminar");

function eliminarProducto() {
    const id = producto.parentElement.dataset.id;
    
    console.log(id);
    // ProductosServicio.eliminarProducto(id)
}

producto.addEventListener('click', eliminarProducto);

