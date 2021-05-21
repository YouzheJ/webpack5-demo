import React, { useEffect, useState } from 'react';
import PropsCard from './component/PropsCard';
import ContextCard from './component/ContextCard';
import ReduxCard from './component/ReduxCard';
import ModelCard from './component/ModelCard';
import DialogForm from './component/DialogForm';
import './app.scss';

const App = () => {
  const [cardInfo, setCardInfo] = useState({});
  useEffect(() => {
    setCardInfo({
      title: '',
      type: '',
      content: ''
    });
  }, []);

  const handleSubmit = (data) => {
    setCardInfo(data);
  }

  return (
    <div className="list">
      note
      <div>
        <div className="card-wrapper">
          props:
          <PropsCard info={cardInfo}>
            <div>tool</div>
          </PropsCard>
        </div>

        <div className="card-wrapper">
          context:
          <ContextCard>
            <div>tool</div>
          </ContextCard>
        </div>

        <div className="card-wrapper">
          redux:
          <ReduxCard>
            <div>tool</div>
          </ReduxCard>
        </div>

        <div className="card-wrapper">
          model:
          <ModelCard>
            <div>tool</div>
          </ModelCard>
        </div>
      </div>

      <DialogForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;