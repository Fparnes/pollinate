import React from 'react';
import ReactDOM from 'react-dom';

//React Router
import {BrowserRouter as Router, Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

//Redux
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import State from './Redux/reducers';

//Pages
import Portal_Page from './Components/Pages/Portal_Page';
import Login_Page from './Components/Pages/Login_Page';
import Account_Settings from './Components/Pages/AccountSettings_Page'
import ClientTeam_Page from "./Components/Pages/ClientTeam_Page";
import WorkerHome_Page from "./Components/Pages/WorkerHome_Page";

//bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
//css
import './index.css';

let store = createStore(State);

console.log('jhello');
console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={Login_Page}/>
                <Route exact path="/Portal" component={Portal_Page}/>
                <Route exact path="/AccountSettings" component={Account_Settings}/>
                <Route exact path="/ClientTeam" component={ClientTeam_Page}/>
                <Route exact path="/EmployeePortal" component={WorkerHome_Page}/>
            </div>
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
