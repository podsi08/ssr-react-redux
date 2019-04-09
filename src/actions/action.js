export const INCREMENT = 'INCREMENT';
export const DECREMENT ='DECREMENT';

export const addOneAction = () => {
  return {
    type: INCREMENT,
  }
};

export const substractOneAction = () => {
  return {
    type: DECREMENT,
  }
};
