import React from 'react'

const Header = () => {
return (
  <header>
    <h1>Lista de Tareas</h1>
    <div className="caja">
      <input id="nuevaTarea" type="text" placeholder="Ingresa tu tarea aquí" />
      <button id="boton" className="boton efecto">
        Agregar
      </button>
    </div>
  </header>
);
}

export {Header}