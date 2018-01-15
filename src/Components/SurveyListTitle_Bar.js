import React, { Component } from 'react';

//css


class SurveyListTitle_Bar extends Component {
    render() {
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

SurveyListTitle_Bar.defaultProps = {
    TextButton: '+',
    TextTitle: 'Default Prop Passed'
};
