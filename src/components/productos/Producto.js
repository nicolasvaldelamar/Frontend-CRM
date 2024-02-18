import React from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import clienteAxios from '../../config/axios';

function Producto({producto}) {

    //elimina un producto
    const eliminarProducto = id => {
        Swal.fire({
            title: "Estas seguro?",
            text: "Un producto eliminado no se puede recuperar",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: 'Cancelar',
            confirmButtonText: "Si, eliminar!"
        }).then((result) => {
            if (result.value){
                //eliminar en la rest api con axios
                clienteAxios.delete(`/productos/${id}`) 
                    .then(res => {
                        if(res.status === 200){
                            Swal.fire({
                                title: "Eliminado!",
                                text: res.data.mensaje,
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <>
            <li className="producto">
                <div className="info-producto">
                    <p className="nombre">{producto.nombre}</p>
                    <p className="precio">${producto.precio} </p>
                   { producto.imagen ? (
                     <img src={`http://localhost:5000/${producto.imagen}`} alt='imagen'/>
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
                        Eliminar Producto
                    </button>
                </div>
            </li>
        </>
    );
}

export default Producto;