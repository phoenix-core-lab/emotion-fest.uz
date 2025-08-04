import React from "react";
import Image from "next/image";
import "./styles.sass";

const GoldSponsors = () => {
  return (
    <div className='goldSponsors'>
      <div className='container'>
        <div className='goldSponsorsContainer'>
          <div className='items'>
            <div className='gold'>
              <div className='goldTitle'>
                <h3 className='title'>Генеральный партнер</h3>
              </div>
              <div className='goldItem'>
                <Image
                  className='img'
                  src='/car2.jpg'
                  alt=''
                />
              </div>
            </div>
            <div className='gold'>
              <div className='goldTitle'>
                <h3 className='title'>Официальный партнер</h3>
              </div>
              <div className='goldItem'>
                <Image
                  className='img'
                  src='/car2.jpg'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoldSponsors;
