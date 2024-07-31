import React from "react";
import "./styles.sass";
const SectionRobots = () => {
  return (
    <section className='sectionRobots'>
      <div className='container'>
        <div className='robotsImage'>
          <div className='robotsText'>
            <div className='robotsTextContainer'>
              <h4 className='title'>Станьте свидетелем эпической битвы роботов!</h4>
              <p className='text'>
                Команды инженеров соберут своих роботов и сразятся в октагоне, стремясь выбить соперника за пределы
                ринга.
              </p>
              <p className='text textMain'>Не пропустите это увлекательное зрелище!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionRobots;
