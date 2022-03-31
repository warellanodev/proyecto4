import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
const Contacto = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
      <SubHeading title='Contacto' />
      <h1 className='headtext__oswald' style={{marginBottom: '3rem'}}>Contactanos</h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>Si bien nuestras raíces están en California, CKE tiene su sede en Franklin, Tennessee. Explore las oportunidades profesionales, las consultas de la prensa y los activos de nuestra marca para obtener más información sobre quién es Carl's Jr.</p>
        <p className='p__oswald' style={{color: '#DCCA87', margin: '2rem 0'}}>Horario</p>
        <p className='p__opensans'>Lunes - Viernes: 10:00AM - 10:00PM</p>
        <p className='p__opensans'>Sabado - Domingo: 10:00AM - 12:00AM</p>
      </div>
      <div className='custom__button' style={{marginTop: '2rem'}}>Visitanos</div>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.contacto} alt="contacto" />
    </div>
  </div>
);

export default Contacto;
