import React from "react";
import './index.scss'

const Card = ({ info: modelInfo, children }) => {
  return <div className="card">
    {children && <div className="card__tool">{children}</div>}
    <div className="card__content">
      <div className="card__item">标题：{ modelInfo && modelInfo.title }</div>
      <div className="card__item">类型：{ modelInfo && modelInfo.type }</div>
      <div className="card__item">内容：{ modelInfo && modelInfo.content }</div>
    </div>
  </div>
};

export default Card;
