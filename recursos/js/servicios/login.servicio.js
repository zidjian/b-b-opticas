const url = "http://localhost:3000/usuarios";

const autenticacion = (usuario, contrasenia) => 
    fetch(`${url}?usuario=${usuario}&contrasenia=${contrasenia}`).then((respuesta) => respuesta.json());


export const LoginServicio = {
    autenticacion
};