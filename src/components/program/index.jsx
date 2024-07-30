import React from "react";
import Button from "../UI/button";
import "./styles.sass";

const ProgramBLock = () => {
  return (
    <div
      className='programBlock'
      id='openTalk'
    >
      <div className='programBlockCard'>
        <div className='cardItem'>
          <div className='imgeContainer'>
            <img
              src='/open.jpg'
              alt='welcomeFirstImage'
              className='img'
            />
          </div>
        </div>
        <div className='cardItem'>
          <div className='itemContent'>
            <div className='itemTitle'>
              <h3 className='title'>Open talk</h3>
            </div>
            <div className='itemSubtitle'>
              <p className='subtitle'>
                {/* Интересуетесь электромобилями и хотели бы провести тест-драйв моделей 2024 года */}
                Мы обсудим важные вопросы, связанные с современным электротранспортом.
              </p>
              <p className='subtitle'>
                Вы сможете задать свой вопрос и получить ответы от лидеров индустрии и неравнодушных к экологии людей.
              </p>
            </div>
            <a href='#contacts'>
              <Button>Стать гостем</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramBLock;
