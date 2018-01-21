import React, {Component} from 'react';
import NavigationBar from "../Navigation_Bar";
import SurveyListHolder from '../SurveyListHolder';
import ButtonLink from '../Button_Link';
import axios from "axios/index";

class WorkerHome_Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            UpcomingAppointments: null,
        }
    }
    componentDidMount() {
        axios.post('/GetAllAppointmentsStudent',
            {
                _id: '5a5d0beecde1a918153ee4dc'
            })
            .then((response) => {
                console.log(response);
                this.setState({
                    UpcomingAppointments: response.data
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    DateConverter(Date) {
        console.log(Date);
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
                console.warn(Date[4]);
        }


        return `${Month} ${Date[1]} - ${Date[2]}:${Min} ${AMorPM}`;
    }
    render() {

        const Appoinments = this.state.UpcomingAppointments;

        let ListOfAppoinments = [{Questions: 'January 17th - 2:30', Title: 'Wilfred Wallis', Percent: 85},
            {Questions: 'January 24th - 12:15', Title: 'Max Sims', Percent: 75},
            {Questions: 'January 29th - 6:30', Title: 'Ben Woods', Percent: 40}];

        if (Appoinments !== null) {

            let ArrayBuilder = [];

            Appoinments.forEach((Appoinment) => {

                let FullDate = this.DateConverter(Appoinment.DateObject);
                const Title = Appoinment.PersonObject.Name;
                ArrayBuilder.push({Questions: FullDate, Title: Title});
            });
            ListOfAppoinments = ArrayBuilder;

        }
        return (
            <div>
                <NavigationBar MainLink='EmployeePortal' LinkText='AccountSettingsEmployee' Text='Your Account'/>
                <div className='container'>
                    <ButtonLink ButtonClass="btn btn-default navbar-btn" LinkText="/OnBoard" Text="OnBoard Someone"/>

                    <div className='col-md-6'>
                        <SurveyListHolder SurveyData={ListOfAppoinments}
                                          ButtonText='New Survey' TextTitle='Ongoing'/>
                    </div>
                </div>
            </div>
        );
    }
}

export default WorkerHome_Page