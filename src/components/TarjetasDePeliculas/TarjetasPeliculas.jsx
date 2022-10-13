import React from 'react';
import './TarjetasPeliculas.css'

const TarjetasPeliculas = (props) => {
  return (

    <div className='tarjeta' key={props}>
       <img className="portada" src={props.url} alt={props.name} />
       <h2 className='tituloPeliculas'>{props.name}</h2>
    </div>
  )
}

export default TarjetasPeliculas