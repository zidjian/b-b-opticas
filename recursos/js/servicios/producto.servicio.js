const url = "http://localhost:3000/productos";

const productos = () => 
    fetch(`${url}`).then((respuesta) => respuesta.json());

const crearProducto = (nombre, descripcion, categoria, precio, imagen) => {
    return fetch(`${url}`, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({id: uuid.v4(), nombre, descripcion, categoria, precio, imagen})
    });
};

const elimianrProducto = (id) => {
    return fetch(`${url}/${id}`, {
        method: 'DELETE'
    });
};

const obtenerProducto = (id) =>
    fetch(`${url}/${id}`).then((respuesta) => respuesta.json());

const editarProducto = (id, nombre, descripcion, tipo, precio, imagen) => {
    return fetch(`${url}/${id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({nombre, descripcion, tipo, precio, imagen})
    });
};


export const ProductosServicio = {
    productos,
    crearProducto,
    elimianrProducto,
    obtenerProducto
};