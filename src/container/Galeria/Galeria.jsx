import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Galeria.css';

const galleryImages = [images.carls1, images.carls2, images.carls3, images.carls4]

const Galeria = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if(direction === 'left'){
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }
  return (
  <div className='app__gallery flex__center'>
    <div className='app__gallery-content'>
      <SubHeading title='Siguenos en'></SubHeading>
      <h1 className='headtext__oswald'>Instagram</h1>
    </div>
    <div className='app__gallery-images'>
      <div className='app__gallery-images_container' ref={scrollRef}>
        {galleryImages.map((image, index) => (
          <div className='app__gallery-images_card flex__center' key={`gallery_image${index + 1}`}>
            <img src={image} alt="gallery" />
            <BsInstagram className='gallery__image-icon'/>
          </div>
        ))};
      </div>
      <div className='app__gallery-images_arrows'>
        <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')} />
        <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')} />
      </div>
    </div>
  </div>
  );
  }
export default Galeria;
