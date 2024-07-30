import React from "react";
import Button from "../UI/button";
import "./styles.sass";
import Link from "next/link";

const Activities = () => {
  return (
    <section
      className='astivities'
      id='activities'
    >
      <div className='container'>
        <div className='activitiesContainer'>
          <div className='activeBlockTop'>
            <div className='topTitle'>
              <h3 className='title'>Активности</h3>
            </div>
            <div className='topBody'>
              <div className='bodyText'>
                <p className='text'>
                  Приходите на наш фест и вас ждут активности, где вы сможете хорошо провести время и получить яркие
                  впечатления.
                </p>
              </div>
              <Link href='#contacts'>
                <Button>Зарегистрироваться</Button>
              </Link>
            </div>
          </div>
          <div className='activitiesItems'>
            <div className='item'>
              <span className='dot'></span>
              <div className='itemTitle'>
                <h4 className='title'>Шоу “Битва роботов”</h4>
              </div>
              <div className='itemText'>
                <p className='text'>
                  Станьте свидетелем эпической битвы роботов. Смотрите, как команды инженеров собирают своих роботов и
                  сражаются в октагоне, стремясь выбить соперника за пределы ринга.
                </p>
              </div>
            </div>

            <div className='item'>
              <span className='dot'></span>
              <div className='itemTitle'>
                <h4 className='title'>Выставка эко проектов</h4>
              </div>
              <div className='itemText'>
                <p className='text'>Поддержите локальные бренды и найдите особенные подарки для себя и своих близких</p>
              </div>
            </div>

            <div className='item'>
              <span className='dot'></span>
              <div className='itemTitle'>
                <h4 className='title'>Серия лекций от экспертов</h4>
              </div>
              <div className='itemText'>
                <p className='text'>Эксперты поделятся с вами современными знаниями и развеют мифы об экологии.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
