import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Login_Page extends Component {
    render() {
        return (
            <div>
                <h1><Link to="/Portal">Portal</Link></h1>
                <h1><Link to="/EmployeePortal">Employee</Link></h1>
            </div>
        );
    }
}

export default Login_Page;
