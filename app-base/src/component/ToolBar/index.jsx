import React, { useState, Suspense } from 'react';
import { Modal } from 'antd';
import { useDispatch } from 'react-redux';
import { addTaskInfoAction } from '../../store/reducer';
import { CalendarFilled } from '@ant-design/icons';
import './index.scss';

const RemoteNoteForm = React.lazy(() => import('app-note/Form'));
const RemoteTaskForm = React.lazy(() => import('app-task/Form'));

const ToolBar = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentType, setCurrentType] = useState('');
  
  const handleClick = (type) => {
    setCurrentType(type);
    setIsModalVisible(true);
  };

  const handleOk = (data) => {
    typeof onSubmit === 'function' && onSubmit(currentType, data);
    // 创建任务时生成一个日志卡片
      dispatch(addTaskInfoAction({
        _id: Math.random(),
        _time: new Date().toLocaleString(),
        title: data.name || data.title,
        type: currentType,
        content: `${data.detail || data.content || ''} -- ${data.time || data.type || ''}`,
      }));
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
          {
            currentType === 'note' ? 
            <RemoteNoteForm onSubmit={handleOk} /> :
            <RemoteTaskForm onSubmit={handleOk} />
          }
        </Suspense>
    </Modal>
  </div>
}

export default ToolBar;