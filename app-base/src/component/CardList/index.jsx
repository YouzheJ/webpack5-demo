import React, { Suspense } from 'react';
import { Timeline } from 'antd';
const RemoteNoteCard = React.lazy(() => import('app-note/Card'));
import './index.scss';

const CardList = () => {
  return <Timeline>
    <Timeline.Item>
      <div className="timeline__time">11:00 props</div>
      <div className="timeline__container">
        <Suspense fallback="Loading...">
          <RemoteNoteCard />
        </Suspense>
      </div>
    </Timeline.Item>
    <Timeline.Item>
      <div className="timeline__time">9:00 useContext</div>
      <div className="timeline__container">
        <Suspense fallback="Loading...">
          <RemoteNoteCard />
        </Suspense>
      </div>
    </Timeline.Item>
    <Timeline.Item>
      <div className="timeline__time">9:00 redux</div>
      <div className="timeline__container">
        <Suspense fallback="Loading...">
          <RemoteNoteCard />
        </Suspense>
      </div>
    </Timeline.Item>
    <Timeline.Item>
      <div className="timeline__time">9:00 custom model</div>
      <div className="timeline__container">
        <Suspense fallback="Loading...">
          <RemoteNoteCard />
        </Suspense>
      </div>
    </Timeline.Item>
  </Timeline>
}

export default CardList;