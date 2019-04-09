import { connect } from 'react-redux';
import { addOneAction, substractOneAction } from '../../actions/action';
import Main from './Main';

const mapStateToProps = (state) => {
  return {
    counter: state,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addOne: () => { dispatch(addOneAction()); },
    substractOne: () => { dispatch(substractOneAction()); }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
