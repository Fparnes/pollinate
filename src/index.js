import React from 'react';
import ReactDOM from 'react-dom';

//React Router
import {BrowserRouter as Router, Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

//Redux
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import State from './Components/Redux/reducers/Worker_Account_Reducer';

//Pages
import Portal_Page from './Components/Pages/Portal_Page';
import Login_Page from './Components/Pages/Login_Page';
import Account_Settings from './Components/Pages/AccountSettings_Page'
import ClientTeam_Page from "./Components/Pages/ClientTeam_Page";
import Account_Settings_Employee from './Components/Pages/AccountSettings_Page_Worker';
import OnBoard_Page from './Components/Pages/OnBoard_Page';
import StudentAccount_Page from './Components/Pages/StudentAccount_Page';
import InterviewWorker_Page from './Components/Pages/InterviewWorker_Page';
import InterviewStudent from './Components/Pages/InterviewStudent_Page';

//Containers
import WorkerHome_Page from "./Components/Containers/Woker_HomePage";

//bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
//css
import './index.css';

let store = createStore(State);


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={Login_Page}/>
                <Route exact path="/Portal" component={Portal_Page}/>
                <Route exact path="/AccountSettings" component={Account_Settings}/>
                <Route exact path="/AccountSettingsEmployee" component={Account_Settings_Employee}/>
                <Route exact path="/ClientTeam" component={ClientTeam_Page}/>
                <Route exact path="/OnBoard" component={OnBoard_Page}/>
                <Route exact path="/StudentAccount" component={StudentAccount_Page}/>
                <Route exact path="/EmployeePortal" component={WorkerHome_Page}/>
                <Route exact path="/InterviewWorker" component={InterviewWorker_Page}/>
                <Route exact path="/InterviewStudent" component={InterviewStudent}/>
            </div>
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
