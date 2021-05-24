import React from 'react';
import PropsCard from './component/PropsCard';
import DialogForm from './component/DialogForm';
import './app.scss';

const App = () => {

  return (
    <div className="list">
      task
      <div>
        <div className="card-wrapper">
          props:
          <PropsCard>
            <div>tool</div>
          </PropsCard>
        </div>
      </div>

      <DialogForm />
    </div>
  );
}

export default App;