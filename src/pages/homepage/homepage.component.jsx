import React from 'react';
import style from './homepage.module.scss';
import Directory from '../../components/directory/directory.component';

const Homepage = () => {
  return (
    <div className={style.homepage}>
      <Directory />
      <button className={style.btn}>Press me</button>
    </div>
  );
};

export default Homepage;
