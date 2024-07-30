import React from "react";
import "./styles.sass";

const GoldSponsors = () => {
  return (
    <div className='goldSponsors'>
      <div className='container'>
        <div className='goldSponsorsContainer'>
          <div className='goldTitle'>
            <h3 className='title'>Золотые партнеры</h3>
          </div>
          <div className='items'>
            <div className='goldItem'>
              <img
                className='img'
                src='/car2.jpg'
                alt=''
              />
            </div>
            <div className='goldItem'>
              <img
                className='img'
                src='/car2.jpg'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoldSponsors;
