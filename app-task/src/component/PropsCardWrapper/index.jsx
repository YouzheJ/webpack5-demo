import React, { useEffect } from "react";
import { Provider } from "react-redux";
import Card from '../PropsCard';
import reducer from '../../store/reducer';

export const PropsCardWrapper = (props) => {
  const { store, children } = props;
  useEffect(() => {
    store.injectReducer('task', reducer);
  }, []);

  return (
    <Provider store={store || {}}>
      <Card>
        { children }
      </Card>
    </Provider>
  );
};

export default PropsCardWrapper;