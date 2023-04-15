import { ProductosServicio } from "./../servicios/producto.servicio.js";

const form_producto = document.getElementById("agregarProducto");

if(form_producto != null) {
    form_producto.addEventListener("submit", guardarProducto);
}

async function guardarProducto(evento) {
    evento.preventDefault();
    const campos_producto = document.querySelectorAll("#agregarProducto .form-campo");
    if (validarCampos(campos_producto)) {
        return;
    }

    const imagen = document.querySelector("[data-imagen]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;

    try {
        await ProductosServicio.crearProducto(
            nombre,
            descripcion,
            categoria,
            precio,
            imagen
        ).then(() => {
            form_producto.reset();
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Se ha guardado correctamente",
                showConfirmButton: false,
                timer: 3000,
            }).then(() => {
                window.location.href = './productos.html';
            });
        });
    } catch (error) {
        console.log("error");
    }
}