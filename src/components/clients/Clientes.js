import React, { useEffect, useState } from 'react'

//importar cliente axios
import clienteAxios from '../../config/axios'
import Cliente from './Cliente';

const Clientes = () => {
    // Trabajar con el state
    // clientes = state, guardarClientes = funcion para guardar el state
    const [ clientes, guardarClientes ] = useState([]);

    // Query a la API
    const consultarAPI = async() => {
        const clientesConsulta = await clienteAxios.get('/clientes');
    
        // colocar el resultado en el state
        guardarClientes(clientesConsulta.data);

    }

    // use effect
    useEffect(()=>{
        consultarAPI();
    },[]);

    return ( 
        <>
            <h2>Clientes</h2>

            <ul className='listado-clientes'>
                {clientes.map(cliente => (
                    <Cliente 
                        key={cliente._id}
                        cliente={cliente}
                    />
                ))}
            </ul>
        </>
     );
}
 
export default Clientes;