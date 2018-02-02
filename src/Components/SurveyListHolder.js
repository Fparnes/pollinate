import React, {Component} from 'react';
import GenricNavBar from "./GenricNav_Bar";
import SurveyBar from "./Survey_Bar";

//css
import './Styles/Circle_Styles.css';


class SurveyListHolder extends Component {
    constructor(props) {
        super(props);
        this.SurveyClickedTwo = this.SurveyClickedTwo.bind(this);
    }

    SurveyClickedTwo(input) {
        this.props.SelectAppoinment(input);
    }

    SurveyPrinterDisplay() {
        const ListOfSurveys = this.props.SurveyData;
        return ListOfSurveys.map((Survey, Key) => {
            if (Key === 0) {
                return (<SurveyBar
                    SurveyID={Survey._id}
                    SurveyClicked={this.SurveyClickedTwo.bind(this)}
                    Circle={this.props.Circle} key={Key} SurveyTitle={Survey.Title}
                    Questions={Survey.Questions} People={Survey.People} PercentValue={Survey.Percent}
                    Class='First_SurveyBarSpacing'/>);
            } else {
                return (<SurveyBar
                    SurveyID={Survey._id}
                    SurveyClicked={this.SurveyClickedTwo.bind(this)}
                    Circle={this.props.Circle} key={Key}
                    SurveyTitle={Survey.Title}
                    Questions={Survey.Questions} People={Survey.People} PercentValue={Survey.Percent}
                    Class='SurveyBarSpacing'/>);
            }
        });
    }

    render() {
        return (
            <div className='navbar navbar-default'>
                <GenricNavBar ClickFunction={this.props.ClickFunction} ButtonText={this.props.ButtonText}
                              TextTitle={this.props.TextTitle} TextButton={this.props.TextButton}/>
                {this.SurveyPrinterDisplay()}
            </div>
        );
    }
}

export default SurveyListHolder;
