import React, {Component } from 'react';
import NavigationBar from "../Navigation_Bar";
import SurveyListHolder from '../SurveyListHolder';
import NewSurveyPopup from '../NewSurvey_Popup';

class WorkerHome_Page extends Component {
    constructor(props){
        super(props);
        this.state = {
            PopUpToggle: false,
            TypeClicked: ''
        }
    }
    NewSurvey_Toggle(IDofButtonClicked){

        if(this.state.PopUpToggle){
            this.setState({
                PopUpToggle: false,
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
    render(){
        let ListOfSurveys = [{Questions: 10, People: 20, Title: 'Survey Two', Percent: 23},
            {Questions: 11, People: 20, Title: 'Survey One', Percent: 13},
            {Questions: 12, People: 20, Title: 'Survey Three', Percent: 20}];
        let CreateSurvey = 'Create Survey';
        let MakeAppointment = 'Make Appointment';

        return(

            <div>
                <NavigationBar MainLink='EmployeePortal' LinkText='AccountSettings' Text='Account'/>
                {this.NewSurvey_Display()}
                <div className='container'>
                    <div className='col-md-6'>
                        <SurveyListHolder ClickFunction={()=>{this.NewSurvey_Toggle(MakeAppointment)}} SurveyData={ListOfSurveys}
                                          TextTitle='List of Upcoming Appointments:' TextButton={MakeAppointment}
                                          ButtonText='Schedule a Appointment'/>
                    </div>
                    <div className='col-md-6'>
                        <SurveyListHolder ClickFunction={()=>{this.NewSurvey_Toggle(CreateSurvey)}} SurveyData={ListOfSurveys}
                                          TextTitle='List of Active Surveys' ButtonText='Add Survey'/>
                    </div>
                </div>

            </div>
        );
    }
}

export default WorkerHome_Page