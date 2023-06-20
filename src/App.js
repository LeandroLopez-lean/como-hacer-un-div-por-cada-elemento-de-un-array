import React from 'react';
import Cards from './Cards';
import './App.css';

function App() {
  const data = [
    { texto: 'Nombre de la capa'},
    { texto: 'Nombre de la capa'},
    { texto: 'Nombre de la capa'},
    { texto: 'Nombre de la capa'},
    { texto: 'Nombre de la capa'}

  ];
  const info =[
    {item: 'categoria'},
    {item: 'categoria'},
    {item: 'categoria'},
    {item: 'categoria'},
    {item: 'categoria'}
  ];

  return (
    <div className='App'>
      <Cards data={data} info={info}/>
    </div>
  );
}

export default App;

