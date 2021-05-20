import React, { useState } from 'react';
import { Modal } from 'antd';
import { CalendarFilled } from '@ant-design/icons';
import './index.scss';

const ToolBar = ({ onSubmit }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentType, setCurrentType] = useState('');
  
  const handleClick = (type) => {
    setCurrentType(type);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    typeof onSubmit === 'function' && onSubmit(currentType, 'test');
    setIsModalVisible(false);
    setCurrentType('');
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return <div className="tool-bar">
    <div className="tool-bar__item" onClick={ () => handleClick('note') }>
      <CalendarFilled style={ { fontSize: '32px', color: '#3eb4d0' } } />
      <div className="tool-bar__item-text">note</div>
    </div>
    <div className="tool-bar__item" onClick={ () => handleClick('task') }>
      <CalendarFilled style={ { fontSize: '32px', color: '#553ed0' } } />
      <div className="tool-bar__item-text">task</div>
    </div>

    <Modal title={currentType} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <div>
          content
        </div>
    </Modal>
  </div>
}

export default ToolBar;