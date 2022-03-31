import React, { useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import { video } from '../../constants';
import './Video.css';

const Video = () => {

  const [playVideo, setplayVideo] = React.useState(false);
  const vidRef = React.useRef();
  const handleVideo = () => {
    setplayVideo((prevPlayVideo) => !prevPlayVideo)

    if(playVideo){
      vidRef.current.pause();
    }else {
      vidRef.current.play();
    }
  }
  return (
    <div className='app__video'>
       <video src={video} ref={vidRef} type='video/mp4' loop controls={false} muted></video>
       <div className='app__video-overlay flex__center'>
         <div className='app__video-overlay_circle flex__center' onClick={handleVideo}>
           {playVideo ?
             <BsPauseFill color='#FFF' fontSize={30}></BsPauseFill> : <BsFillPlayFill color='#FFF' fontSize={30}></BsFillPlayFill>}
         </div>
       </div>
    </div>
  )
};

export default Video;
