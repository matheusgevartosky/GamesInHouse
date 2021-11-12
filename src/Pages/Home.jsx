import { Box } from '@material-ui/system';
import react from 'react';

import { bg } from '../Assets/images/bg.mp4'

export const Home = () => {
  return (
    <video style={{width:"100%", height:"100"}} class="video_about obj_move2 ani_on" data-delay="200" loop muted controls={false} playsinline autoPlay>
                    <source src="https://akamai-webcdn.kgstatic.net/resources/elyon_web/images/video/elyon_about.webm" type="video/webm"/>
                    <source src="https://akamai-webcdn.kgstatic.net/resources/elyon_web/images/video/elyon_about.mp4" type="video/mp4"/>
    </video>
  );
};