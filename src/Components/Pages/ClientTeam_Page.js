import React, { Component } from 'react';
import NavigationBar from "../Navigation_Bar";
import SurveyListHolder from '../SurveyListHolder'
import BreadCrumb from '../BreadCrumb';


class ClientTeam_Page extends Component {
    render() {
        let ListOfSurveys = [{Questions: 'wwallis@u.rochester.edu', People: '', Title: 'Wilfred Wallis', Percent: 23},
            {Questions: 'wwallis@u.rochester.edu', People: 20, Title: 'Wilfred Wallis', Percent: 13},
            {Questions: 'wwallis@u.rochester.edu', People: 20, Title: 'Survey Three', Percent: 20}];
        let MakeAppointment = 'Make Appointment';
        return (
            <div>
                <NavigationBar MainLink='EmployeePortal' LinkText='AccountSettings' Text='Your Account'/>
                <div className='container'>
                    <BreadCrumb LinkRoute='/EmployeePortal' LinkText='Portal' CurrentText='Team Page' />
                    <h1>Team Name</h1>
                    <div className='container'>
                        <div className='col-md-6'>
                            <SurveyListHolder ClickFunction={()=>{this.NewSurvey_Toggle(MakeAppointment)}} SurveyData={ListOfSurveys}
                                              TextTitle='View and Download' TextButton={MakeAppointment}
                                              ButtonText='Add Person'/>
                        </div>
                        <div className='col-md-6'>
                            <SurveyListHolder SurveyData={ListOfSurveys} TextTitle='Create, View, and Download'/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ClientTeam_Page;