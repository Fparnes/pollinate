import {connect} from 'react-redux';
import Dumb from './Dumb'

function mapDispatchToProps(dispatch) {
    return({
        action: () => {alert('yo')}
    })
}

function mapStateToProps(state) {
    return({fancy: "Fancy this:" + state})
}

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dumb);

export default FilterLink