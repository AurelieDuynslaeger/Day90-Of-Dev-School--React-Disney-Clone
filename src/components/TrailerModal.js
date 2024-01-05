import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { ImPlay2 } from "react-icons/im";

const TrailerModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {  
    setIsModalOpen(false);
  };
  return (
    <>
      <Button  onClick={showModal}>
        <ImPlay2 />
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/XEWZw_5yIrs?si=-CrvydpmSKV9b7Uh&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </Modal>
    </>
  );
};
export default TrailerModal;