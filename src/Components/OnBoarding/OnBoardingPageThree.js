import React, {Component} from 'react';
import PullDownMenuHelper from './PullDownMenuHelper';

class OnBoardingOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CurrentLevelOfEduc: 'MBA',
            FratSor: 'Yes',
            OftenGym: 'Never',
            IndustryGrad: 'No Idea',
            IndustryGradW: '',
            StayRochesterGrad:'Yes',
            CurrentlyHaveAJob: 'Yes',
            ConsideredStartup: 'Yes',
            OftenInterview: 'Daily',
            PersonVirtuallyPerson: 'Both',
            TypeOfPhone: 'Other'

        };

        this.HandleState_Input = this.HandleState_Input.bind(this);
    }

    HandleState_Input(StateObject) {
        this.setState(StateObject);
    }

    render() {
        return (
            <div className='container'>
                <h1>On Board Someone Page Three:</h1>

                <PullDownMenuHelper ListOfOptions={{
                    StateName: 'CurrentLevelOfEduc',
                    Options: ['Undergraduate',
                        'Masters Program',
                        'MBA',
                        'Medical School',
                        'Graduate School',
                        'Law School']
                }} Change={this.HandleState_Input} Value={this.state.CurrentLevelOfEduc}
                                    Question='What best describes your current level of education?'/>

                <PullDownMenuHelper ListOfOptions={{
                    StateName: 'FratSor',
                    Options: ['Yes',
                        'No']
                }} Change={this.HandleState_Input} Value={this.state.FratSor}
                                    Question='Are you in a Fraternity or Sorority?'/>

                <PullDownMenuHelper ListOfOptions={{
                    StateName: 'OftenGym',
                    Options: [
                        'Never',
                        'Less than once a month',
                        'Once a month',
                        'Once every other week',
                        'One to three times a week',
                        'Three to five times a week',
                        'More than fives times a week'
                    ]
                }} Change={this.HandleState_Input} Value={this.state.OftenGym}
                                    Question='How often do you go to the gym?'/>

                <PullDownMenuHelper ListOfOptions={{
                    StateName: 'StayRochesterGrad',
                    Options: ['Yes',
                        'No',
                        'Maybe']
                }} Change={this.HandleState_Input} Value={this.state.StayRochesterGrad}
                                    Question='Do you want to stay in Rochester after graduation?'/>

                <PullDownMenuHelper ListOfOptions={{
                    StateName: 'CurrentlyHaveAJob',
                    Options: ['Yes',
                        'No']
                }} Change={this.HandleState_Input} Value={this.state.CurrentlyHaveAJob}
                                    Question='Do you currently have a job?'/>

                <PullDownMenuHelper ListOfOptions={{
                    StateName: 'ConsideredStartup',
                    Options: ['Yes',
                        'No']
                }} Change={this.HandleState_Input} Value={this.state.ConsideredStartup}
                                    Question='Have you considered joining a start up or starting your own company'/>

                <PullDownMenuHelper ListOfOptions={{
                    StateName: 'OftenInterview',
                    Options: [
                        'Daily',
                        'A few times a week',
                        'Once a week',
                        'Once every two weeks',
                        'Less that once every two weeks'
                    ]
                }} Change={this.HandleState_Input} Value={this.state.OftenInterview}
                                    Question='How often would you want to take an interview with us?'/>

                <PullDownMenuHelper ListOfOptions={{
                    StateName: 'PersonVirtuallyPerson',
                    Options: [
                        'Just in person',
                        'Just virtual',
                        'Both'
                    ]
                }} Change={this.HandleState_Input} Value={this.state.PersonVirtuallyPerson}
                                    Question='Would you be interested in doing interviews in person, virtually, or both?'/>

                <PullDownMenuHelper ListOfOptions={{
                    StateName: 'TypeOfPhone',
                    Options: [
                        'iPhone',
                        'Android',
                        'Other'
                    ]
                }} Change={this.HandleState_Input} Value={this.state.TypeOfPhone}
                                    Question='What type of phone do you use?'/>

                {/*Going to the next page*/}
                <hr/>
                <button onClick={() => {
                    this.props.ChangePage(4 , this.state)
                }} type="submit" className="btn CustomButton btn-default">Next Page
                </button>

            </div>
        )
    }

}

export default OnBoardingOne;