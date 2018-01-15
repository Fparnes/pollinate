import React, {Component} from 'react';
import Circle from './Circle';

//css

class SurveyBar extends Component {
    render() {
        if (this.props.Circle) {
            return (
                <div className={this.props.Class}>
                    <Circle className='PushRight' PercentValue={this.props.PercentValue}/>
                    <h4>{this.props.SurveyTitle}</h4>
                    <p>Number Of Questions: {this.props.Questions} </p>
                    <p>Number of People: {this.props.People}</p>

                </div>
            );

        } else {
            return (
                <div className={this.props.Class}>
                    <h4>{this.props.SurveyTitle}</h4>
                    <p>{this.props.Questions} </p>
                    <p>{this.props.People}</p>
                </div>
            );
        }
    }
}

SurveyBar.defaultProps = {
    SurveyTitle: 'Default Title',
    Circle: false
};


export default SurveyBar;
