import React from 'react';
import { ApiOutlined, CloseCircleOutlined, DashOutlined } from '@ant-design/icons';
import './index.scss';

const iconStyle = {
  fontSize: '14px',
  color: '#1e85d0'
}

const ToolBar = ({ onClick }) => {
  const handleClick = (type) => {
    typeof onClick === 'function' && onClick(type);
  };

  return <div className="card-tool">
    <div className="card-tool__item" onClick={ () => handleClick('link') }>
      <ApiOutlined style={iconStyle} />
    </div>
    <div className="card-tool__item" onClick={ () => handleClick('delete') }>
      <CloseCircleOutlined style={iconStyle} />
    </div>
    <div className="card-tool__item" onClick={ () => handleClick('more') }>
      <DashOutlined style={iconStyle} />
    </div>
  </div>
}

export default ToolBar;