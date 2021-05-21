import React, { Suspense } from 'react';
import { Timeline } from 'antd';
import CardTool from '../CardTool';
const RemoteNoteCard = React.lazy(() => import('app-note/Card'));
import './index.scss';

const CardList = () => {
  const handleToolClick = (toolType, cardType) => {
    console.log(toolType, cardType);
    if (cardType === 'custom') {
      if (toolType === 'delete') {
        import('app-note/model').then(({ default: RemoteNoteModel }) => {
          console.log(RemoteNoteModel);
          RemoteNoteModel.setInfo({
            title: '',
            type: '',
            content: ''
          });
        });
      }
    }
  }

  return <Timeline>
    <Timeline.Item>
      <div className="timeline__time">11:00 props</div>
      <div className="timeline__container">
        <Suspense fallback="Loading...">
          <RemoteNoteCard>
            <CardTool onClick={(type) => handleToolClick(type, 'props')} />
          </RemoteNoteCard>
        </Suspense>
      </div>
    </Timeline.Item>
    <Timeline.Item>
      <div className="timeline__time">9:00 useContext</div>
      <div className="timeline__container">
        <Suspense fallback="Loading...">
          <RemoteNoteCard>
            <CardTool onClick={(type) => handleToolClick(type, 'useContext')} />
          </RemoteNoteCard>
        </Suspense>
      </div>
    </Timeline.Item>
    <Timeline.Item>
      <div className="timeline__time">9:00 redux</div>
      <div className="timeline__container">
        <Suspense fallback="Loading...">
          <RemoteNoteCard>
            <CardTool onClick={(type) => handleToolClick(type, 'redux')} />
          </RemoteNoteCard>
        </Suspense>
      </div>
    </Timeline.Item>
    <Timeline.Item>
      <div className="timeline__time">9:00 custom model</div>
      <div className="timeline__container">
        <Suspense fallback="Loading...">
          <RemoteNoteCard>
            <CardTool onClick={(type) => handleToolClick(type, 'custom')} />
          </RemoteNoteCard>
        </Suspense>
      </div>
    </Timeline.Item>
  </Timeline>
}

export default CardList;