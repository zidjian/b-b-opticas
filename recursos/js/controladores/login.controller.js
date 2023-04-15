import { LoginServicio } from "./../servicios/login.servicio.js";

const formulario_login = document.getElementById("formLogin");

async function login(evento) {
    evento.preventDefault();

    const campos_producto = document.querySelectorAll("#formLogin .form-campo");
    if (validarCampos(campos_producto)) {
        return;
    }

    const usuario = document.querySelector("[data-usuario]").value;
    const contrasenia = document.querySelector("[data-contrasenia]").value;

    try {
        await LoginServicio.autenticacion(usuario, contrasenia).then(
            (respuesta) => {
                console.log(respuesta);
                if (respuesta != "") {
                    window.location.href = "./productos.html";
                } else {
                    Swal.fire({
                        position: "center",
                        icon: "warning",
                        title: "El usuario o contraseña es incorrecto",
                        showConfirmButton: false,
                        timer: 3000,
                    });
                }
            }
        );
    } catch (error) {
        Swal.fire({
            position: "center",
            icon: "warning",
            title: "Ocurrio un problema! vuelve a intentarlo mas tarde",
            showConfirmButton: false,
            timer: 3000,
        });
    }
}

formulario_login.addEventListener("submit", login);
