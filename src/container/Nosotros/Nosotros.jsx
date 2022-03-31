import React from 'react';

import './Nosotros.css';

const Nosotros = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-content flex__center'>
      <div className="app__aboutus-content_about">
        <h1 className='headtext__oswald'>Nosotros</h1>
        <p className='p__opensans'>Fundado en 1941, Carl's Jr. ha sido un favorito de la costa oeste durante casi 80 años, conocido por nuestras icónicas hamburguesas a la parrilla. Hoy, tenemos más de 1,000 ubicaciones en los EE. UU. y atendemos a 28 países en todo el mundo.</p>
        <button type='button' className='custom__button'>Leer Más</button>
      </div>
    </div>
  </div>
);

export default Nosotros;
