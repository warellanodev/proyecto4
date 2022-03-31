import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding'>
    <div className='app__specialMenu-title'>
      <SubHeading title='Las mejores hamburgesas estan aqui'/>
      <h1 className='headtext__oswald'>Menu</h1>
    </div>
    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu_wine flex__center'>
        <p className='app__specialMenu-menu_heading'>CHARBROILED BURGERS</p>
        <div className='app__specialMenu_menu_items'>
          {data.burgers.map((burger, index) => (
            <MenuItem key={burger.title + index} title={burger.title} price={burger.price} tags={burger.ingredients} />
          ))}
        </div>
      </div>
      <div className='app__specialMenu-menu_chicken flex__center'>
        <p className='app__specialMenu-menu_heading'>CHICKEN BURGERS</p>
        <div className='app__specialMenu_menu_items'>
          {data.chickens.map((chicken, index) => (
            <MenuItem key={chicken.title + index} title={chicken.title} price={chicken.price} tags={chicken.ingredients} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default SpecialMenu;
