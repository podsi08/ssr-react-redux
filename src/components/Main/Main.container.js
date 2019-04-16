import { connect } from 'react-redux';
import { addOneAction, substractOneAction } from '../../common/actions/action';
import Main from './Main';

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addOne: () => { dispatch(addOneAction()); },
    substractOne: () => { dispatch(substractOneAction()); }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
