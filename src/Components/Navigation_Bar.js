import React, {Component} from 'react';
import ButtonLink from "./Button_Link";
import { Link } from 'react-router-dom';


class Navigation_Bar extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="navbar-header">
                    <Link to='/Panel' className="navbar-brand"> Pollinate</Link>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <div className="nav navbar-nav navbar-right">
                        <ButtonLink ButtonClass="btn btn-default navbar-btn" LinkText="/AccountSettings" Text="Wilfred"/>
                    </div>
                </div>
            </nav>
        );
    }
}




export default Navigation_Bar;




