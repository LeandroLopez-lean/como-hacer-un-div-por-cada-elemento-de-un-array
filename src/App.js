import React from 'react';
import Cards from './Cards/index.js';
import './Cards/index.js';

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
  const descarga = console.log("descarga");
  

  return (
    <div className='App'>
      <Cards data={data} info={info} onDownload={descarga}/>
    </div>
  );
}

export default App;

