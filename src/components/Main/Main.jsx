import React from 'react';

const Main = (props) => {
  return (
    <div>
      <div>Welcome in ssr app</div>
      <h1>Super counter</h1>
      <h2>{props.counter}</h2>
      <button onClick={props.addOne}>+</button>
      <button onClick={props.substractOne}>-</button>
    </div>
  )
};

export default Main;
