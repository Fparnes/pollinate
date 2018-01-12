import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router'

//css


class SurveyListTitle_Bar extends Component {
    constructor(props){
        super(props)
        this.state = {Redirect: false}
    }
    render() {
        if(this.state.Redirect){
            console.log('hello');
            return <Redirect to="/" />;
        } else {
            return (
                <div className='UnderLine'>
                    <div className="navbar-header">
                        <h4 className="navbar-brand">{this.props.TextTitle}</h4>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <div className="nav navbar-nav navbar-right PaddingRight">
                            <button onClick={this.props.ClickFunction} className='btn btn-default navbar-btn'>{this.props.TextButton}</button>
                        </div>
                    </div>
                </div>
            );
        }

    }
}

SurveyListTitle_Bar.defaultProps = {
    TextButton: '+',
    TextTitle: 'Default Prop Passed'
};

export default withRouter(SurveyListTitle_Bar);