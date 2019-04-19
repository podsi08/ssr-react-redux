import React from 'react';
import styles from './main.scss';
import withStyles from 'isomorphic-style-loader/withStyles';
import { Link } from 'react-router-dom';

const Main = (props) => {
  return (
    <div>
      <div>Welcome in ssr app</div>
      <h1 className={styles.bigFont}>Super counter</h1>
      <h2>{props.counter}</h2>
      <button onClick={props.addOne}>+</button>
      <button onClick={props.substractOne}>-</button>
      <Link to="/subpage">Go to subpage</Link>
    </div>
  )
};

export default withStyles(styles)(Main);
