import React, { useState } from "react";
import Button from "../UI/button";
import "./styles.sass";
import ModalBecomeAMember from "../modalBecomeAMember";
import { Modal } from "antd";

const ShowPage = () => {
  const [modal2Open, setModal2Open] = useState(false);
  return (
    <div
      className='showBlock'
      id='showPage'
    >
      <div className='container programBlockCard'>
        <div className='cardItem'>
          <div className='itemContent'>
            <div className='itemTitle'>
              <h3 className='title'>Выставка новейших технологий и экобрендов</h3>
            </div>
            <div className='itemSubtitle'>
              <p className='subtitle'>
                Мы представим более 60-ти местных брендов, где каждый сможет найти для себя что-то интересное и
                поддержать производителей передовых технологий.{" "}
              </p>
              <p className='subtitle'>
                Если вы хотите повысить узнаваемость вашего бренда и привлечь новых клиентов, становитесь участником
                выставки!
              </p>
            </div>
            <Button onClick={() => setModal2Open(true)}>Стать участником выставки</Button>
            <Modal
              // title='Vertically centered modal dialog'
              centered
              open={modal2Open}
              onOk={() => setModal2Open(false)}
              onCancel={() => setModal2Open(false)}
              className='modalBecomeAMember'
            >
              <ModalBecomeAMember />
            </Modal>
          </div>
        </div>
        <div className='cardItem'>
          <div className='imgeContainer'>
            <img
              src='/open.jpg'
              alt='welcomeFirstImage'
              className='img'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowPage;
