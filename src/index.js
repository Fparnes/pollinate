import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

//Pages
import Portal_Page from './Components/Pages/Portal_Page';
import Login_Page from './Components/Pages/Login_Page';
import Account_Settings from './Components/Pages/AccountSettings_Page'
import ClientTeam_Page from "./Components/Pages/ClientTeam_Page";
import SubmitNewSurvey_Page from './Components/Pages/SubmitNewSurvey_Page';

//bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={Login_Page}/>
            <Route exact path="/Portal" component={Portal_Page}/>
            <Route exact path="/AccountSettings" component={Account_Settings}/>
            <Route exact path="/ClientTeam" component={ClientTeam_Page}/>
            <Route exact path="/SubmitNewSurvey" component={SubmitNewSurvey_Page}/>

        </div>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
