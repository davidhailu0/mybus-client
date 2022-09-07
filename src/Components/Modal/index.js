import { Button, Modal } from 'antd';
import {Box,Typography} from '@mui/material'
import { useState } from 'react';

const Modal = ({ticketId}) => {
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
      <Button type="success" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Ticket has been purchased" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
       <Box>Your Ticket ID is <Typography>{ticketId}</Typography></Box>
      </Modal>
    </>
  );
};

export default App;