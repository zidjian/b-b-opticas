const form_contacto = document.getElementById("formContacto");

form_contacto.addEventListener('submit', enviarMensaje);

function enviarMensaje(evento) {
    evento.preventDefault();
    const campos_producto = document.querySelectorAll("#formContacto .form-campo");
    if (validarCampos(campos_producto)) {
        return;
    }
    form_contacto.reset();
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Se ha enviado correctamente tu mensaje",
        showConfirmButton: false,
        timer: 5000,
    });
}

const campos = document.querySelectorAll(".form-campo");
campos.forEach((campo) => {
    campo.addEventListener("blur", (campo) => {
        validarCampo(campo.target);
    });
});

function validarCampos(campos_producto) {
    let con_error;
    campos_producto.forEach((campo) => {
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
    email: {
        valueMissing: "El campo es obligatorio",
        typeMismatch: "Formato incorrecto de email",
    }
};

function validarCampo(campo) {
    const tipo_campo = campo.dataset.tipo;
    let con_error;
    tipoDeErrores.forEach((error) => {
        if (campo.validity[error]) {
            console.log(error);
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
