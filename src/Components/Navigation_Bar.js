import React, {Component} from 'react';
import ButtonLink from "./Button_Link";
import {Link} from 'react-router-dom';
import SurveyBar from "./Survey_Bar";


//main nav bar, difference between this and genric nav bar is this nav bar has a link tied to the left side
class Navigation_Bar extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="navbar-header">
                    <Link to={this.props.MainLink} className="navbar-brand"> Pollinate</Link>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <div className="nav navbar-nav navbar-right">
                        <ButtonLink ButtonClass="btn btn-default navbar-btn" LinkText={this.props.LinkText}
                                    Text={this.props.Text}/>
                    </div>
                </div>
            </nav>
        );
    }
}

SurveyBar.defaultProps = {
    SideLinkValue: 'Error',
    SideLinkText: 'No Prop Passed',
    MainLink: '/AccountSettings'
};


export default Navigation_Bar;


//AccountSettings