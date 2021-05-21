import React, { useEffect, useState } from 'react';
import Card from './component/Card';
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

  return (
    <div className="list">
      note
      <div className="card-wrapper">
        <Card info={cardInfo}>
          <div>tool</div>
        </Card>
      </div>

      <DialogForm />
    </div>
  );
}

export default App;