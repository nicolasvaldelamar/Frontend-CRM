import React from 'react'
import { Link } from 'react-router-dom';

const Cliente = ({cliente}) => {
    //extraer los valores
    const { _id, nombre, apellido, empresa, email, telefono } = cliente;

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
                <button type="button" className="btn btn-rojo btn-eliminar">
                    <i className="fas fa-times"></i>
                    Eliminar Cliente
                </button>
            </div>
        </li>
    );
}

export default Cliente;