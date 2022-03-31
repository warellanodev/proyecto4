import React from 'react';

import { data } from '../../constants';
import './Ubicaciones.css';

const UbicationCard = ({ubication: {sucursal, direction}}) => (
  <div className='app__ubications_sucursal-card'>
    <div className='app__ubications_sucursal-card_contents'>
      <p className='p__oswald' style={{color: '#DCCA87'}}>{sucursal}</p>
      <p className='p__oswald'>{direction}</p>
    </div>
  </div>
);

const Ubicaciones = () => (
  <div className='app__bg app__wrapper section__padding' id='awards'>
    <div className='app__wrapper_info'>
      <h1 className='headtext__oswald'>Algunas Ubicaciones</h1>
      <div className='app__ubications_sucursal'>
        {data.ubication.map((ubication) => <UbicationCard ubication={ubication} key={ubication.sucursal}/>)}
      </div>
    </div>
  </div>
);

export default Ubicaciones;
