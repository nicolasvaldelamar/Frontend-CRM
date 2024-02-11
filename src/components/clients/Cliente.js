import React from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import clienteAxios from '../../config/axios';

const Cliente = ({ cliente }) => {
    //extraer los valores
    const { _id, nombre, apellido, empresa, email, telefono } = cliente;

    // eliminar cliene
    const eliminarCliente = (idCliente) => {
        Swal.fire({
            title: "Estas seguro?",
            text: "Un cliente eliminado no se puede recuperar",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: 'Cancelar',
            confirmButtonText: "Si, eliminar!"
        }).then((result) => {
            if (result.value){
                //llamado a axios
                clienteAxios.delete(`/cliente/${idCliente}`) 
                    .then(res => {
                            Swal.fire({
                                title: "Eliminado!",
                                text: res.data.mensaje,
                                icon: "success"
                            });
                    })
            }
        });
    }
    return (
        <li className="cliente">
            <div className="info-cliente">
                <p className="nombre">{nombre} {apellido}</p>
                <p className="empresa">{empresa}</p>
                <p>{email}</p>
                <p>Tel: {telefono}</p>
            </div>
            <div className="acciones">
                <Link to={`/cliente/editar/${_id}`} className="btn btn-azul">
                    <i className="fas fa-pen-alt"></i>
                    Editar Cliente
                </Link>
                <button type="button"
                    className="btn btn-rojo btn-eliminar"
                    onClick={() => eliminarCliente(_id)}  >
                    <i className="fas fa-times"></i>
                    Eliminar Cliente
                </button>
            </div>
        </li>
    );
}

export default Cliente;