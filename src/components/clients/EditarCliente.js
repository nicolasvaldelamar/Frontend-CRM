import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router-dom'
import clienteAxios from '../../config/axios'

const EditarCliente = (props) => {

    // obtener el ID con useParams()
    const { id } = useParams();

    //Navigate para luego poder redireccionar
    const navigate = useNavigate()

    //cliente = state, datosCliente = funcion para guardar el state
    const[cliente, datosClientes] = useState({
        nombre: '',
        apellido: '',
        empresa: '',
        email: '',
        telefono: ''
    })

    // Query a la API
    const consultarAPI = async () => {
        const clienteConsulta = await clienteAxios.get(`/clientes/${id}`);

        //colocar en el state
        datosClientes(clienteConsulta.data);
    }

    // useEffect cuando el componente carga
    useEffect(()=>{
        consultarAPI();
    }, [])

    //leer los datos del formulario
    const actualizarState = e => {
        //almacenar lo que el usuario escribe en el state
        datosClientes({
            //obtener copia del state actual
            ...cliente,
            [e.target.name] : e.target.value
        })
        console.log(cliente)
    }

    // Envia una peticion por axios para actualizar el cliente
    const actualizarCliente = e => {
        e.preventDefault();

        //enviar peticion por axios
        clienteAxios.put(`/clientes/${id}`, cliente)
            .then(res => {
                // validar si hay errores de mongo
                if(res.data.code === 11000) {
                    Swal.fire({
                            icon: 'error',
                            title: 'Hubo un error',
                            text: 'Este cliente ya esta registrado'
                         })
                }else { 
                    Swal.fire(
                        'Correcto',
                        'Se actualizo correctamente',
                        'success'
                    )
                }
                // redireccionar
                navigate('/')
            })
    }

    //validar el formulario
    const validarCliente = () => {
        const {nombre, apellido, email, empresa, telefono } =  cliente;

        // revisar que las propiedades del state tengan contenido
        let valido = !nombre.length || !apellido.length || !email.length || !empresa.length || !telefono.length;

        //return true o false
        return valido;
    }

    return (
        <>
            <h2>Editar Cliente</h2>
            <form
                onSubmit={actualizarCliente}
            >
                <legend>Llena todos los campos</legend>

                <div className="campo">
                    <label>Nombre:</label>
                    <input type="text" 
                            placeholder="Nombre Cliente" 
                            name="nombre"
                            onChange={actualizarState}
                            value={cliente.nombre}
                            />
                </div>

                <div className="campo">
                    <label>Apellido:</label>
                    <input type="text" 
                           placeholder="Apellido Cliente" 
                           name="apellido"
                           onChange={actualizarState}
                           value={cliente.apellido} />
                </div>

                <div className="campo">
                    <label>Empresa:</label>
                    <input type="text" 
                            placeholder="Empresa Cliente" 
                            name="empresa"
                            onChange={actualizarState}
                            value={cliente.empresa} />
                </div>

                <div className="campo">
                    <label>Email:</label>
                    <input type="email" 
                    placeholder="Email Cliente" 
                    name="email"
                    onChange={actualizarState}
                    value={cliente.email} />
                </div>

                <div className="campo">
                    <label>Teléfono:</label>
                    <input type="tel" 
                    placeholder="Teléfono Cliente" 
                    name="telefono"
                    onChange={actualizarState}
                    value={cliente.telefono} />
                </div>

                <div className="enviar">
                    <input type="submit" 
                    className="btn btn-azul" 
                    value="Guardar cambios" 
                    disabled={ validarCliente() }/>
                </div>
            </form>
        </>

    );
}

export default EditarCliente;