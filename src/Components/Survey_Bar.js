import React, {Component} from 'react';
import Circle from './Circle';

//css

class SurveyBar extends Component {
    render() {
        return (
            <div className='SurveyBarSpacing'>
                <Circle className='PushRight' PercentValue={this.props.PercentValue}/>
                <h4>{this.props.SurveyTitle}</h4>
                <p>Number Of Questions: {this.props.Questions} </p>
                <p>Number of People: {this.props.People}</p>
            </div>
        );
    }
}

SurveyBar.defaultProps = {
    SurveyTitle: 'Default Title',
    Questions: 'NA',
    People: 'NA'
};


export default SurveyBar;
