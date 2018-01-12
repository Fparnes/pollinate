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
        let ListOfSurveys = [{Questions: 10, People: 20, Title: 'Survey Two', Percent: 23},
            {Questions: 11, People: 20, Title: 'Survey One', Percent: 13},
            {Questions: 12, People: 20, Title: 'Survey Three', Percent: 20}];

            return ListOfSurveys.map((Survey)=>{
                return <SurveyBar key={Survey.Title} SurveyTitle={Survey.Title} Questions={Survey.Questions} People={Survey.People} PercentValue={Survey.Percent}/>
            });
    }

    render() {
        return (
            <div className='navbar navbar-default'>
                <SurveyListTitleBar ClickFunction={null} TextTitle={this.props.TextTitle}/>
                {this.SurveyPrinterDisplay()}

            </div>
        );
    }
}

export default SurveyListHolder;
