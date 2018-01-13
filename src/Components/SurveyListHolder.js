import React, {Component} from 'react';
import SurveyListTitleBar from "./SurveyListTitle_Bar";


//css
import '../Styles/Circle_Styles.css';
import SurveyBar from "./Survey_Bar";


class SurveyListHolder extends Component {
    constructor(props){
        super(props);
        this.state = { Redirect: false};
    }
    SurveyPrinterDisplay(){

        const ListOfSurveys = this.props.SurveyData;

            return ListOfSurveys.map((Survey)=>{
                return <SurveyBar Circle={this.props.Circle} key={Survey.Title} SurveyTitle={Survey.Title} Questions={Survey.Questions} People={Survey.People} PercentValue={Survey.Percent}/>
            });
    }

    render() {
        return (
            <div className='navbar navbar-default'>
                <SurveyListTitleBar ClickFunction={this.props.ClickFunction} TextTitle={this.props.TextTitle} TextButton={this.props.TextButton}/>
                {this.SurveyPrinterDisplay()}

            </div>
        );
    }
}

export default SurveyListHolder;
