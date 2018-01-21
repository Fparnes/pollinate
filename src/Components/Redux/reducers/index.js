export default (state = null, action) => {
    switch (action.type) {
        case 'CHANGE':
            return action._id;
        default:
            return state
    }
}
