import axios from 'axios';

//in the process of api
export const GETTING_ACCOUNT_INFO = 'GETTING_ACCOUNT_INFO';
function Getting_Account(){
    return {
        type: GETTING_ACCOUNT_INFO
    }
}

//api request done
export const GOT_WORKER_INFO = 'GOT_WORKER_INFO';
function Got_Worker_Info(response){
    return {
        type:GOT_WORKER_INFO,
        response

    }
}

//main function to fetch worker account info
export function Fetch_Worker_Account(Worker_ID) {
    return function(dispatch){
        dispatch(Getting_Account());

        return axios.post('/WorkerAccount', {
            Worker_ID: Worker_ID
        })
            .then((response)=>{
                dispatch((response))
            })
    }
}

Got_Worker_Info();