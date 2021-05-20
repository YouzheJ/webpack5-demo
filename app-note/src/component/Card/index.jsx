import React from "react";
import isArray from 'lodash/isArray';

const Card = ({ children }) => {
  console.log(isArray([]));
  return <div className="card">
    <div className="card-tool">{children}</div>
    card
  </div>
};

export default Card;