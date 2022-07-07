import React from 'react';
import style from './NewTracker.module.css';

const NewTracker = () => {
  return (
    <div className={style.wrapper}>
      <input className={style.input} placeholder="Enter tracker name" />
    </div>
  );
};
export default NewTracker;
