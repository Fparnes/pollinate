import React, {Component} from 'react';
import NavigationBar from "../Navigation_Bar";
import SurveyListHolder from '../SurveyListHolder';
import NewSurveyPopup from '../NewSurvey_Popup';
import CreateSurvey from '../CreateSurvey';
import ButtonLink from '../Button_Link';
import AppoinmentBody from '../MakeAppointment_Popup';
import axios from "axios/index";
import LoginButton from '../LoginButton';
class WorkerHome_Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            PopUpToggle: false,
            TypeClicked: '',
            UpcomingAppointments: null
        };
        this.NewSurvey_Toggle = this.NewSurvey_Toggle.bind(this);
    }

    NewSurvey_Toggle(IDofButtonClicked) {

        if (this.state.PopUpToggle) {
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

    componentDidMount() {
        axios.post('/GetAllAppointments',
            {
                _id: '5a5d0b2b418dc61804035793'
            })
            .then((response) => {
                this.setState({
                    UpcomingAppointments: response.data
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    DateConverter(Date) {
        let Month;
        switch (Date[0]) {
            case 1:
                Month = 'January';
                break;
            case 2:
                Month = 'February';
                break;
            case 3:
                Month = 'March';
                break;
            case 4:
                Month = 'April';
                break;
            case 5:
                Month = 'May';
                break;
            case 6:
                Month = 'June';
                break;
            case 7:
                Month = 'July';
                break;
            case 8:
                Month = 'August';
                break;
            case 9:
                Month = 'September';
                break;
            case 10:
                Month = 'October';
                break;
            case 11:
                Month = 'November';
                break;
            case 12:
                Month = 'December';
                break;
            default:
                console.warn(Date[0]);
        }
        let Min;
        switch (Date[3]) {
            case 1:
                Min = '00';
                break;
            case 2:
                Min = '15';
                break;
            case 3:
                Min = '30';
                break;
            case 4:
                Min = '45';
                break;
            default:
                console.warn(Date[3]);
        }
        let AMorPM;
        switch (Date[4]) {
            case 0:
                AMorPM = 'AM';
                break;
            case 1:
                AMorPM = 'PM';
                break;
            default:
                console.warn('DEFAULT: ' + Date[4]);
        }


        return `${Month} ${Date[1]} - ${Date[2]}:${Min} ${AMorPM}`;
    }

    NewSurvey_Display() {
        if (this.state.PopUpToggle) {
            const PopUp = this.state.IDofButtonClicked;
            switch (PopUp) {
                case 'Make Appointment':
                    console.log('Make Appointment');
                    return <NewSurveyPopup
                        BodyOfPopup={<AppoinmentBody ClickFunction={this.NewSurvey_Toggle}/>}
                        Title={this.state.IDofButtonClicked}
                        ClickFunction={this.NewSurvey_Toggle} ButtonText='Close'/>;
                case 'Create Survey':
                    console.log('Create Survey');
                    return <NewSurveyPopup
                        BodyOfPopup={<CreateSurvey ClickFunction={this.NewSurvey_Toggle}/>}
                        Title={this.state.IDofButtonClicked}
                        ClickFunction={this.NewSurvey_Toggle} ButtonText='Close'/>;

                default:
                    //show pop up for doing the invertview, Id is pass down
                    alert(PopUp);
                    return
            }

        }
    }

    render() {
        let ListOfSurveys = [{Questions: 10, People: 20, Title: 'Rochester Running', Percent: 85},
            {Questions: 11, People: 20, Title: 'Soup Spoon', Percent: 75},
            {Questions: 12, People: 20, Title: 'Rochester Flowers', Percent: 40}];

        const Appoinments = this.state.UpcomingAppointments;

        let ListOfAppoinments = [{Questions: 'January 17th - 2:30', Title: 'Wilfred Wallis', Percent: 85},
            {Questions: 'January 24th - 12:15', Title: 'Max Sims', Percent: 75},
            {Questions: 'January 29th - 6:30', Title: 'Ben Woods', Percent: 40}];

        if (Appoinments !== null) {

            let ArrayBuilder = [];

            Appoinments.forEach((Appoinment) => {
                let FullDate = this.DateConverter(Appoinment.DateObject);
                const Title = Appoinment.PersonObject.Name;
                ArrayBuilder.push({Questions: FullDate, Title: Title, _id: Appoinment._id});
            });
            ListOfAppoinments = ArrayBuilder;

        }
        let CreateSurvey = 'Create Survey';
        let MakeAppointment = 'Make Appointment';

        return (
            <div>
                <NavigationBar MainLink='EmployeePortal' LinkText='AccountSettingsEmployee' Text='Your Account'/>
                {this.NewSurvey_Display()}
                <div className='container'>

                    <ButtonLink ButtonClass="btn btn-default navbar-btn" LinkText="/OnBoard" Text="OnBoard Someone"/>

                    <div className='col-md-6'>
                        <SurveyListHolder SurveyData={ListOfAppoinments} SelectAppoinment={
                            this.NewSurvey_Toggle
                        }
                                          ClickFunction={() => {
                                              this.NewSurvey_Toggle(MakeAppointment)
                                          }}
                                          TextTitle='List of Upcoming Appointments:' TextButton={MakeAppointment}
                                          ButtonText='Schedule a Appointment'/>
                    </div>
                    <div className='col-md-6'>
                        <SurveyListHolder Circle={true} ClickFunction={() => {
                            this.NewSurvey_Toggle(CreateSurvey)
                        }} SurveyData={ListOfSurveys}
                                          TextTitle='List of Active Surveys' ButtonText='Add Survey'/>
                    </div>
                    <LoginButton/>
                </div>
            </div>
        );
    }
}

export default WorkerHome_Page