import './App.css';
import React,{Component, useState} from 'react';
import ReactDOM from 'react-dom/client';


class App extends Component{
/*
  if(typeof colore !=='undefined'){
  setColore(0);
  }
  */
 state = {
  numero:[
    {id:1}
  ]
 }
 render () {
  console.log(this.state.numero.id);
  return (
  <center>
      <form className='App-header'>
      <h1>orari in cui puoi prenotare una visita</h1>
      <table border={2} cellPadding={25} id='tabella'>
        <tr id='giorni'>giorni</tr> 
        <tr><td>orario</td> <td>22/09/2023</td> <td>23/09/2023</td> <td>24/09/2023</td> <td>25/09/2023</td></tr>

    <tr><td>8 AM</td> <td ><button type="" onClick={this.state.numero.id=0}>colore</button></td>    <td>Dato 8</td>     <td>Dato 8</td>     <td>Dato 8</td></tr>

    <tr><td>9 AM</td> <td>Dato 9</td>     <td>Dato 9</td>     <td>Dato 9</td>     <td>Dato 9</td></tr>

    <tr><td>10 AM</td><td>Dato 10</td>    <td>Dato 10</td>    <td>Dato 10</td>    <td>Dato 10</td></tr>

    <tr><td>11 AM</td><td>Dato 11</td>    <td>Dato 11</td>    <td>Dato 11</td>    <td>Dato 11</td></tr>

    <tr><td>12 AM</td><td>Dato 12</td>    <td>Dato 12</td>    <td>Dato 12</td>    <td>Dato 12</td></tr>
      </table>
      </form>

    </center>
  );
 }
}



export default App;