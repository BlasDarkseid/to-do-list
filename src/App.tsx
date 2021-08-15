import React from 'react';
import './App.css';
import { Header } from './components/header';
import { Footer } from "./components/footer";
import {List} from './components/list'


 const App = () => {
   return (
     <>
       <Header />
       <List />
      <Footer />
     </>
   );
}

export { App };
