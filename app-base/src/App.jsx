import React, { useState } from 'react';
import CardList from './component/CardList';
import ToolBar from './component/ToolBar';
import './App.scss';

const App = () => {
  const [cardInfo, setCardInfo] = useState({});
  const onSubmit = (type, data) => {
    setCardInfo(data);
  }

  return (
    <div className="app-wrapper">
      <div className="app-content">
        <CardList info={cardInfo} updateInfo={setCardInfo} />
      </div>
      <div className="app-bar">
        <ToolBar onSubmit={onSubmit} />
      </div>
    </div>
  );
}

export default App;
