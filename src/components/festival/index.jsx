import React from "react";
import "./styles.sass";
const Festival = () => {
  return (
    <section className='festival'>
      <div className='container'>
        <div className='festivalImage'>
          {/* <img
            src='/manOnAction.jpeg'
            alt='festivalimage'
            className='img'
          /> */}
          <div className='festivalText'>
            <div className='festivalTextContainer'>
              <h4 className='title'>Сюрприз!</h4>
              <p className='text'>
                В фестивале примет участие известный блогер,
                <br /> имя которого пока держится в секрете.
              </p>
              <p className='text'>Вы сможете задать ему вопросы и обсудить перспективы развития электротранспорта.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Festival;
