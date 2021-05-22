import React, { useEffect, useState } from 'react';
import PropsCard from './component/PropsCard';
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
      </div>

      <DialogForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;