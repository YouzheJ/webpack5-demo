import React, { useEffect, useState } from "react";
import './index.scss'

const Card = ({ children }) => {
  const [modelInfo, setModelInfo] = useState({});

  const updateInfo = (info) => {
    setModelInfo(info);
  };

  return <div className="card">
    {children && <div className="card__tool">{children}</div>}
    <div className="card__content">
      <div className="card__item">标题：{ modelInfo.title }</div>
      <div className="card__item">类型：{ modelInfo.type }</div>
      <div className="card__item">内容：{ modelInfo.content }</div>
    </div>
  </div>
};

export default Card;
