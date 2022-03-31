import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Reservaciones } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay/>
    <Reservaciones/>
    <div className='app__footer-links'>
      <div className='app__footer-links_logo'>
        <img src={images.logo} alt="footer_logo" />
        <p className='p__opensans'>Las mejores hamburgesas a la parrilla.</p>
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2021 Implementado por Williams Arellano</p>
    </div>
  </div>
);

export default Footer;
