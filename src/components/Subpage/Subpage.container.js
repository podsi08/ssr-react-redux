import { connect } from 'react-redux';
import {fetchDataAction, showCompletedTasksAction} from '../../common/actions/action';
import Subpage from './Subpage';
import DataService from '../../common/dataService';

const mapStateToProps = (state) => {
  return {
    data: state.fetchData,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => {
      DataService.getData()
        .then((data) => {
          dispatch(fetchDataAction(data))
        })
       ;
    },
    showCompleted: () => { dispatch(showCompletedTasksAction()); }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Subpage);
