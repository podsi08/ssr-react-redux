import React from 'react';
import { Link } from 'react-router-dom';
import styles from './main.scss';

const Main = (props) => {
  return (
    <div>
      <div>Welcome in ssr app</div>
      <h1>Super counter</h1>
      <h2>{props.counter}</h2>
      <button onClick={props.addOne}>+</button>
      <button onClick={props.substractOne}>-</button>
      <Link to="/subpage" className={styles.link}>Go to subpage</Link>
    </div>
  )
};

export default Main;
