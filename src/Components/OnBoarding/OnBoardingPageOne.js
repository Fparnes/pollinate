import React, {Component} from 'react';
import ButtonLink from '../Button_Link';
import TextQuestion from './TextQuestion';

class OnBoardingOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            UniquePrograms: 'None',
            Country: 'U.S.',
            State: 'NY',
            LivingOnOffCampus: 'On',
            WhereCampus: 'Quad',
            WhereOffCampus: 'White Coat District',
            CurrentZip:'14627 (River Campus)',
            Name: 'Wilfred??'
        };

        this.HandleState_Input = this.HandleState_Input.bind(this);
    }

    HandleState_Input(StateObject) {
        this.setState(StateObject);
    }

    render() {
        return (
            <div className='container'>
                <ButtonLink ButtonClass="btn btn-default navbar-btn" LinkText="/EmployeePortal" Text="Back"/>
                <h1>On Board Someone:</h1>
                <div className="form-group">
                    Question, Text, TextChange, StateID
                    <TextQuestion Question='Hey what is your name' TextChange={this.HandleState_Input} Text={this.state.Name} StateID='Name' />



                </div>
                {/*<button onClick={() => {*/}
                {/*this.SubmitSurvey()*/}
                {/*}} type="submit" className="btn btn-default">Submit*/}
                {/*</button>*/}

            </div>
        )
    }

}

export default OnBoardingOne;