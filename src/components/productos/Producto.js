import React from 'react'
import { Link } from 'react-router-dom';

function Producto({producto}) {

    //elimina un producto
    const eliminarProducto = id => {
        
    }

    return (
        <>
            <li className="producto">
                <div className="info-producto">
                    <p className="nombre">{producto.nombre}</p>
                    <p className="precio">${producto.precio} </p>
                   { producto.imagen ? (
                     <img src={`http://localhost:5000/${producto.imagen}`} />
                   ) : null
                   }

                </div>
                <div className="acciones">
                    <Link to={`/productos/editar/${producto._id}`} className="btn btn-azul">
                        <i className="fas fa-pen-alt"></i>
                        Editar Producto
                    </Link>

                    <button type="button" className="btn btn-rojo btn-eliminar"
                        onClick={()=>eliminarProducto(producto._id)}
                    >
                        <i className="fas fa-times"></i>
                        Eliminar Cliente
                    </button>
                </div>
            </li>
        </>
    );
}

export default Producto;