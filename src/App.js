import React from "react";

//Routing
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Layout
import Header from "./components/layout/Header";
import Navegacion from "./components/layout/Navegacion";

//Componentes
import Clientes from "./components/clients/Clientes";
import Productos from "./components/productos/Productos";
import Pedidos from "./components/pedidos/Pedidos";
import NuevoCliente from "./components/clients/NuevoCliente";

function App() {
  return (
    <Router>
      <>
      <Header />
      <div className="grid contenedor contenido-principal">
        <Navegacion />
        <main className="caja-contenido col-9">
          <Routes>
              <Route path="/" Component={Clientes} />
              <Route path="/clientes/nuevo" Component={NuevoCliente}/>

              <Route path="/productos" Component={Productos} />

              <Route path="/pedidos" Component={Pedidos} />
          </Routes>
        </main>
      </div>
    </>
    </Router>
  )
}

export default App;
