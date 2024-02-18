import React, { useState } from 'react'

function NuevoProducto() {
    // producto = state, guardarProducto = setState
    const [producto, guardarProducto] = useState({
        nombre: '',
        precio: ''
    })
    // archivo = state, guardarArchivo = state
    const [archivo, guardarArchivo] = useState('');

    // leer los datos del formulario
    const leerInformacionProducto = e => {
        guardarProducto({
            //obtener una copia del state y agregar el nuevo
            ...producto,
            [e.target.name]: e.target.value
        })
    }

    // coloca la imagen en el state
    const leerArchivo = e => {
        guardarArchivo(e.target.files[0]);
    }

    return (
        <>
            <h2>Nuevo Producto</h2>

            <form action="/productos" method="POST">
                <legend>Llena todos los campos</legend>

                <div className="campo">
                    <label>Nombre:</label>
                    <input type="text"
                        placeholder="Nombre Producto"
                        name="nombre"
                        onChange={leerInformacionProducto} />
                </div>

                <div className="campo">
                    <label>Precio:</label>
                    <input type="number"
                        name="precio"
                        min="0.00"
                        step="0.01"
                        placeholder="Precio"
                        onChange={leerInformacionProducto} />
                </div>

                <div className="campo">
                    <label>Imagen:</label>
                    <input type="file"
                        name="imagen"
                        onChange={leerArchivo} />
                </div>

                <div className="enviar">
                    <input type="submit"
                        className="btn btn-azul"
                        value="Agregar Producto" />
                </div>
            </form>

        </>
    );
}

export default NuevoProducto;