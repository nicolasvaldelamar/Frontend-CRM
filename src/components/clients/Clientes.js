import React, { useEffect, useState } from 'react'

//importar cliente axios
import clienteAxios from '../../config/axios'

const Clientes = () => {
    // Trabajar con el state
    //clientes = state, guardarClientes = funcion para guardar el state
    const [ clientes, guardarClientes ] = useState({});

    // Query a la API
    const consultarAPI = async() => {
        const clientesConsulta = await clienteAxios.get('/clientes');
        console.log(clientesConsulta.data);
    }

    // use effect
    useEffect(()=>{
        consultarAPI();
    },[]);

    return ( 
        <h2>
            Clientes
        </h2>
     );
}
 
export default Clientes;