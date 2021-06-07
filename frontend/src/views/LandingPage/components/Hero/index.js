import React from 'react';

import {
  HeroContainer,
  HeroContainer2,
  HeroContent,
  HeroItems, 
} from './HeroElements';

 import "./styles.css";



const Hero = () => {
 

  return (
    
     
    <HeroContainer>

      <HeroItems >
          <div  class="animated-title ">
            <div class="text-top">
              <div >
                <span>صنعة الأجداد</span>
              </div>
            </div>
            <div class="text-bottom">
              <div>من إيدين الأحفاد</div>
            </div>
          </div>
      </HeroItems>

  </HeroContainer>


    

  );
};

export default Hero;


