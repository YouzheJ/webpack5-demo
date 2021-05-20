import React from 'react';
import CardList from './component/CardList';
import ToolBar from './component/ToolBar';
// const RemoteCard = React.lazy(() => import("app-note/Card"));
import './App.scss';

const App = () => {
  const onSubmit = (type, data) => {
    console.log(type, data)
  }

  return (
    <div className="app-wrapper">
      <div className="app-content">
        <CardList />
      </div>
      <div className="app-bar">
        <ToolBar onSubmit={onSubmit} />
      </div>
    </div>
  );
}

export default App;
