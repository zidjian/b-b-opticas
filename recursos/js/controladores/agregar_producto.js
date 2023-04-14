import { ProductosServicio } from "./../servicios/producto.servicio.js";

const formulario_producto = document.getElementById('agregarProducto');

const enviarDatos = (evento) => {
    evento.preventDefault();
    const imagen = document.querySelector('[data-imagen]').value;
    const categoria = document.querySelector('[data-categoria]').value;
    const nombre = document.querySelector('[data-nombre]').value;
    const precio = document.querySelector('[data-precio]').value;
    const descripcion = document.querySelector('[data-descripcion]').value;

    try {
        ProductosServicio.agregarProducto(nombre, descripcion, categoria, precio, imagen);
    } catch (error) {
        console.log('error');
    }
};

formulario_producto.addEventListener('submit', enviarDatos);