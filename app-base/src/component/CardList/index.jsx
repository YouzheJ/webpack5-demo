import React, { Suspense } from 'react';
import { Timeline } from 'antd';
import CardTool from '../CardTool';
import { CardContextProvider } from '../../lib/CardContextProvider';
import './index.scss';

// react组件需要import()引入
const RemoteNotePropsCard = React.lazy(() => import('app-note/PropsCard'));
const RemoteNoteContextCard = React.lazy(() => import('app-note/ContextCard'));
const RemoteNoteReduxCard = React.lazy(() => import('app-note/ReduxCard'));
const RemoteNoteModelCard = React.lazy(() => import('app-note/ModelCard'));

// 直接引入即可
import RemoteNoteModel from 'app-note/model';

console.log(RemoteNoteModel)

const CardList = ({ info, updateInfo }) => {
  const handleToolClick = (cardType, toolType) => {
    switch (cardType) {
      case 'props': handlePropsCard(toolType); break;
      case 'useContext': handleContextCard(toolType); break;
      case 'redux': handleReduxCard(toolType); break;
      case 'customModel': handleModelCard(toolType); break;
    }
  }

  // 重置数据
  const getResetInfo = () => ({
    title: '',
    type: '',
    content: ''
  });

  const handlePropsCard = (toolType) => {
    if (toolType === 'delete') {
      typeof updateInfo === 'function' && updateInfo(getResetInfo());
    }
  }

  const handleContextCard = (toolType) => {
    if (toolType === 'delete') {
      typeof updateInfo === 'function' && updateInfo(getResetInfo());
    }
  }

  const handleReduxCard = () => {}

  const handleModelCard = (toolType) => {
    if (toolType === 'delete') {
      RemoteNoteModel.setInfo(getResetInfo());
    }
  }

  return <Timeline>
    <Timeline.Item>
      <div className="timeline__time">11:00 props</div>
      <div className="timeline__container">
        <Suspense fallback="Loading...">
          <RemoteNotePropsCard info={info}>
            <CardTool onClick={(type) => handleToolClick('props', type)} />
          </RemoteNotePropsCard>
        </Suspense>
      </div>
    </Timeline.Item>
    <Timeline.Item>
      <div className="timeline__time">9:00 useContext</div>
      <div className="timeline__container">
        <CardContextProvider.Provider value={info}>
          <Suspense fallback="Loading...">
            <RemoteNoteContextCard CardContextProvider={CardContextProvider}>
              <CardTool onClick={(type) => handleToolClick('useContext', type)} />
            </RemoteNoteContextCard>
          </Suspense>
        </CardContextProvider.Provider>
      </div>
    </Timeline.Item>
    <Timeline.Item>
      <div className="timeline__time">9:00 redux</div>
      <div className="timeline__container">
        <Suspense fallback="Loading...">
          <RemoteNoteReduxCard>
            <CardTool onClick={(type) => handleToolClick('redux', type)} />
          </RemoteNoteReduxCard>
        </Suspense>
      </div>
    </Timeline.Item>
    <Timeline.Item>
      <div className="timeline__time">9:00 custom model</div>
      <div className="timeline__container">
        <Suspense fallback="Loading...">
          <RemoteNoteModelCard>
            <CardTool onClick={(type) => handleToolClick('customModel', type)} />
          </RemoteNoteModelCard>
        </Suspense>
      </div>
    </Timeline.Item>
  </Timeline>
}

export default CardList;