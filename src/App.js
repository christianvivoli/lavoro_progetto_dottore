import './App.css';
import { useState } from 'react';
import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import Prenotazioni from './components/Prenotazioni'
import Login from './components/Login';

function App () {
  //non riceve i dati dalla pagina Login
    const getData = (data) =>{console.log("dati inviati da login",data)};
    const [colore,setNumero] = useState(0);
    return (
      <>
      {/*<Login onSubmit={getData}/>*/}
      <Prenotazioni 
          colore
      />
      </>
    );
}



export default App;