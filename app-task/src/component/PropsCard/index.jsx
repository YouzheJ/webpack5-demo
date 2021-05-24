import React from "react";
import { useDispatch, useSelector } from "react-redux";
import './index.scss'

const Card = ({ children }) => {
  const dispatch = useDispatch();
  const taskInfo = useSelector(state => state.task?.taskInfo);
  // const taskInfo = useSelector(state => state);

  return <div className="card">
    {children && <div className="card__tool">{children}</div>}
    <div className="card__content">
      <div className="card__item">任务：{ taskInfo && taskInfo.name }</div>
      <div className="card__item">时间：{ taskInfo && taskInfo.time }</div>
      <div className="card__item">详情：{ taskInfo && taskInfo.detail }</div>
    </div>
  </div>
};

export default Card;
