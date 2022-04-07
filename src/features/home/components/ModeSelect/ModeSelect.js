import React, { useState } from 'react';

import styles from '../Timeline/Timeline.module.scss';

import { Stream } from '../Stream';
import { Timeline } from '../Timeline';

export const ModeSelect = () => {
  const [mode, setMode] = useState(true);
  return (
    <div>
      <button onClick={() => setMode(!mode)}>mode select</button>
      {mode ? <div className={styles.timeline}>{Mode.SCHEDULE}</div>: Mode.PLAYER}
    </div>
  );
};

const Mode = {
  SCHEDULE: <Timeline />,
  PLAYER: <Stream />,
};
