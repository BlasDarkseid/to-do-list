import React from 'react';
import './App.css';
import { Header } from './components/header';
import { Footer } from "./components/footer";


 const App = () => {
   return (
     <>
       <Header />
       <div className="lista">
         <h2>Mis Tareas Pendientes</h2>
         <ol id="miOL"></ol>
       </div>
      <Footer />
     </>
   );
}

export { App };
