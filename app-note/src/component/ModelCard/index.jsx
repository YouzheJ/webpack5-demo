import React, { useEffect, useState } from "react";
import isArray from 'lodash/isArray';
import model from '../../model';
import './index.scss'

const Card = ({ children }) => {
  const [modelInfo, setModelInfo] = useState({});

  useEffect(() => {
    model.subscribe(updateInfo);

    return () => {
      model.unsubscribe(updateInfo);
    }
  }, []);

  const updateInfo = (info) => {
    console.log(info)
    setModelInfo(info);
  };

  console.log(isArray([]));
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
