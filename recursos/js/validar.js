import { ProductosServicio } from "./servicios/producto.servicio.js";

const miform = document.getElementById("agregarProducto");

miform.addEventListener("submit", manejadorEnvios);

async function manejadorEnvios(evento) {
    evento.preventDefault();

    if (validarCampos()) {
        return;
    }

    const imagen = document.querySelector("[data-imagen]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;

    console.log(nombre, descripcion, categoria, precio, imagen);

    try {
        await ProductosServicio.crearProducto(
            nombre,
            descripcion,
            categoria,
            precio,
            imagen
        ).then(() => {
            miform.reset();
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

const campos = document.querySelectorAll("#agregarProducto .form-campo");
campos.forEach((campo) => {
    campo.addEventListener("blur", (campo) => {
        validarCampo(campo.target);
    });
});

function validarCampos() {
    let con_error;
    campos.forEach((campo) => {
        if (!validarCampo(campo)) {
            con_error = true;
        }
    });
    if (con_error == true) {
        return true;
    } else {
        return false;
    }
}

const tipoDeErrores = [
    "patternMismatch",
    "valueMissing",
    "typeMismatch",
    "customError",
];

const mensajesDeError = {
    todo: {
        valueMissing: "El campo es obligatorio",
    },
    numeros: {
        valueMissing: "El campo es obligatorio",
        patternMismatch: "Solo se aceptan números",
    },
    url: {
        valueMissing: "El campo es obligatorio",
        patternMismatch: "Solo se aceptan links validos",
    },
};

function validarCampo(campo) {
    const tipo_campo = campo.dataset.tipo;
    let con_error;
    tipoDeErrores.forEach((error) => {
        if (campo.validity[error]) {
            campo.classList.add("requerido");
            campo.nextElementSibling.nextElementSibling.classList.add(
                "requerido"
            );
            campo.nextElementSibling.nextElementSibling.innerHTML =
                mensajesDeError[tipo_campo][error];
            con_error = true;
        }
    });
    if (con_error == true) {
        return false;
    } else {
        campo.classList.remove("requerido");
        campo.nextElementSibling.nextElementSibling.classList.remove(
            "requerido"
        );
        campo.nextElementSibling.nextElementSibling.innerHTML = "";
        return true;
    }
}
