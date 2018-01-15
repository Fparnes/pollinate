import React, { Component } from 'react';



//css
import '../Styles/SurveyBar_Styles.css';

class Circle extends Component {
    render() {
        const Percent = this.props.PercentValue;
        const ClassPercent = 'c100 p' + Percent + ' small PushRightCircle';
        return (
            <div>
                <div className={ClassPercent}>
                    <span>{Percent}<span className='Percent'>%</span></span>
                    <div className="slice">
                        <div className="bar"> </div>
                        <div className="fill"> </div>
                    </div>
                </div>
            </div>
        );
    }
}

Circle.defaultProps = {
    PercentValue: 'Default Prop Passed'
};


export default Circle;
