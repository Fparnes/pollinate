import React, {Component} from 'react';
import GenricNavBar from './GenricNav_Bar';

//css
import './Styles/NewSurvey_Popup.css'

//Main Pop up
class NewSurvey_Popup extends Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <GenricNavBar ClickFunction={this.props.ClickFunction} TextTitle={this.props.Title}
                                  ButtonText={this.props.ButtonText}/>
                    {this.props.BodyOfPopup}
                </div>
            </div>
        );
    }
}

NewSurvey_Popup.defaultProps = {
    Title: 'Default Title',
};

export default NewSurvey_Popup;

