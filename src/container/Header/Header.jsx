import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className="app_wrapper_info">
      <SubHeading title="Fantasti Combos" />
      <h1 className='app__header-h1'>BIG ANGUS ORIGINAL</h1>
      <p className='p__opensans' style={{margin: '2rem 0'}}>Agranda tu combo y llévate uno de los 4 vasos coleccionables de Batman. Visita tu Carl's Jr.® preferido y arma tu colección. Consulta términos y condiciones.</p>
      <button type='button' className='custom__button' href="#menu">Explorar Menu</button>
    </div>
    <div className='app__header-img'>
      <img src={images.hero} alt='hero-image'/>
    </div>
  </div>
);

export default Header;
