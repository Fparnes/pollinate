import React, {Component} from 'react';
import ButtonLink from "./Button_Link";
import { Link } from 'react-router-dom';
import SurveyBar from "./Survey_Bar";


class Navigation_Bar extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="navbar-header">
                    <Link to={this.props.MainLink} className="navbar-brand"> Pollinate</Link>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <div className="nav navbar-nav navbar-right">
                        <ButtonLink ButtonClass="btn btn-default navbar-btn" LinkText={this.props.SideLinkValue} Text={this.props.SideLinkText}/>
                    </div>
                </div>
            </nav>
        );
    }
}

SurveyBar.defaultProps = {
    SideLinkValue: 'Error',
    SideLinkText: 'No Prop Passed',
    MainLink: 'No Prop Passed'
};



export default Navigation_Bar;




//AccountSettings