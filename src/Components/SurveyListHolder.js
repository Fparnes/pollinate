import React, {Component} from 'react';
import GenricNavBar from "./GenricNav_Bar";


//css
import '../Styles/Circle_Styles.css';
import SurveyBar from "./Survey_Bar";



class SurveyListHolder extends Component {
    SurveyPrinterDisplay(){
        const ListOfSurveys = this.props.SurveyData;
            return ListOfSurveys.map((Survey, Key)=>{
                if(Key === 0){
                return (<SurveyBar Circle={this.props.Circle} key={Key} SurveyTitle={Survey.Title}
                                  Questions={Survey.Questions} People={Survey.People} PercentValue={Survey.Percent}
                                    Class='First_SurveyBarSpacing'/>);
                } else {
                    return (<SurveyBar Circle={this.props.Circle} key={Key} SurveyTitle={Survey.Title}
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
