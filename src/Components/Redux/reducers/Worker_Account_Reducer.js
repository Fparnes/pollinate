import {
    GETTING_ACCOUNT_INFO,
    GOT_WORKER_INFO,
    Fetch_Worker_Account
} from '../actions/Worker_Account'

const Worker_Account = (state = 'Test!', action) => {
    switch (action.type) {
        case GETTING_ACCOUNT_INFO:
            return alert(GETTING_ACCOUNT_INFO);
        case GOT_WORKER_INFO:
            return alert(GOT_WORKER_INFO);
        case Fetch_Worker_Account:
            return alert(Fetch_Worker_Account);
        default:
            return 'je;;p';

    }
};

export default Worker_Account;