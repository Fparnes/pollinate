import { connect } from 'react-redux';
import WorkerAccountPage from '../Pages/WorkerHome_Page';
import WorkerAccountReducer from '../Redux/reducers/Worker_Account_Reducer';

const mapStateToProps = state => {
    return {
        hello: WorkerAccountReducer(state, 'na')
    }
};


const mapDispatchToProps = dispatch => {
    return {
        Action: id => {
            dispatch(WorkerAccountReducer(id));
        }

    }
};

const WorkerAccount_Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(WorkerAccountPage);

export default WorkerAccount_Container;