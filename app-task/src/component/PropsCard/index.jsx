import React from "react";
import './index.scss'

const Card = ({ info: modelInfo, children }) => {
  return <div className="card">
    {children && <div className="card__tool">{children}</div>}
    <div className="card__content">
      <div className="card__item">任务：{ modelInfo && modelInfo.name }</div>
      <div className="card__item">时间：{ modelInfo && modelInfo.time }</div>
      <div className="card__item">详情：{ modelInfo && modelInfo.detail }</div>
    </div>
  </div>
};

export default Card;
