import React, { useState, Suspense } from 'react';
import { Modal } from 'antd';
import { CalendarFilled } from '@ant-design/icons';
const RemoteNoteForm = React.lazy(() => import('app-note/Form'));
import './index.scss';

const ToolBar = ({ onSubmit }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentType, setCurrentType] = useState('');
  
  const handleClick = (type) => {
    setCurrentType(type);
    setIsModalVisible(true);
  };

  const handleOk = (data) => {
    typeof onSubmit === 'function' && onSubmit(currentType, data);
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

    <Modal title={currentType} visible={isModalVisible} footer={null} onCancel={handleCancel}>
        <Suspense fallback="Loading...">
          <RemoteNoteForm onSubmit={handleOk} />
        </Suspense>
    </Modal>
  </div>
}

export default ToolBar;