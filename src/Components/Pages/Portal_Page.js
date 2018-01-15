import React, {Component} from 'react';
import NavigationBar from "../Navigation_Bar";
import ButtonLink from "../Button_Link";
import SurveyListHolder from "../SurveyListHolder";
import NewSurveyPopup from "../NewSurvey_Popup";


class Portal_Page extends Component {
    constructor(props){
        super(props);
        this.state = {
            PopUpToggle: false
        }
    }
    //Displays
    NewSurvey_Toggle(IDofButtonClicked){

        if(this.state.PopUpToggle){
            this.setState({
                PopUpToggle: false
            });
        } else {
            this.setState({
                PopUpToggle: true,
                IDofButtonClicked: IDofButtonClicked
            });
        }
    }
    NewSurvey_Display(){
         if(this.state.PopUpToggle){
             return <NewSurveyPopup Title={this.state.IDofButtonClicked} ClickFunction={this.NewSurvey_Toggle.bind(this)}
                                    NewSurvey_Toggle={this.NewSurvey_Toggle} ButtonText='Close'/>
         }
    }
    render() {
        let ListOfSurveys = [{Questions: 10, People: 20, Title: 'Survey Two', Percent: 23},
            {Questions: 11, People: 20, Title: 'Suddrvey One', Percent: 13},
            {Questions: 12, People: 20, Title: 'Survey Three', Percent: 20}];

        return (
            <div>

                <NavigationBar MainLink='Portal' LinkText='AccountSettings' Text='Wilfred'/>
                {this.NewSurvey_Display()}
                <div className='container'>

                    <ButtonLink ButtonClass="btn btn-default navbar-btn" LinkText="/ClientTeam" Text="Your Team"/>
                    <div className='col-md-6'>
                        <SurveyListHolder Circle={true} ClickFunction={()=>{this.NewSurvey_Toggle('Submit New Survey')}} SurveyData={ListOfSurveys}
                                          ButtonText='New Survey' TextTitle='Ongoing'/>
                    </div>
                    <div className='col-md-6'>
                        <SurveyListHolder Circle={true} ClickFunction={ undefined}  TextTitle='Complete' SurveyData={ListOfSurveys} ButtonText='New Folder'/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Portal_Page;
