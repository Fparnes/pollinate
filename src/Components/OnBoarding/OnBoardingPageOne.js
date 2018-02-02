import React, {Component} from 'react';
import PullDownMenuHelper from './PullDownMenuHelper';
import ButtonLink from '../Button_Link';

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
            CurrentZip:'14627 (River Campus)'
        };

        this.ChangeSelectBoxes = this.ChangeSelectBoxes.bind(this);
    }

    ChangeSelectBoxes(StateID, event) {
        let StateObject = {};
        StateObject[StateID] = event;

        this.setState(StateObject);
    }

    render() {
        return (
            <div className='container'>
                <ButtonLink ButtonClass="btn btn-default navbar-btn" LinkText="/EmployeePortal" Text="Back"/>
                <h1>On Board Someone:</h1>
                <div className="form-group">
                    <label>First Name</label>
                    <input ref="FirstName" className="form-control"/>

                    <label>Last Name</label>
                    <input ref="LastName" className="form-control"/>

                    <label>Email</label>
                    <input ref="Email" className="form-control"/>

                    <label>Age</label>
                    <input ref="Age" className="form-control"/>

                    <label>Class Year</label>
                    <input ref="Age" className="form-control"/>

                    <label>Are you part of any unique programs</label>
                    <br/>
                    <PullDownMenuHelper Value={this.state.UniquePrograms} Change={this.ChangeSelectBoxes}
                                        ListOfOptions={{
                                            StateName: 'UniquePrograms',
                                            Options: ['REMS', 'McNair Scholar', 'Renaissance Scholar', 'Take 5', 'No', 'Write In']
                                        }}/>
                    <br/>
                    <br/>

                    <label>What country are you originally from </label>
                    <br/>
                    <PullDownMenuHelper Value={this.state.Country} Change={this.ChangeSelectBoxes}
                                        ListOfOptions={{
                                            StateName: 'Country',
                                            Options: ['Canada', 'China', 'U.S.', 'U.K.', 'Write In']
                                        }}/>

                    <br/>
                    <br/>

                    <label>What State are you from? Press Command F to search the webpage.</label>
                    <br/>
                    <PullDownMenuHelper Value={this.state.State} Change={this.ChangeSelectBoxes}
                                        ListOfOptions={{
                                            StateName: 'State',
                                            Options: [
                                                'AL',
                                                'AK',
                                                'AZ',
                                                'AR',
                                                'CA',
                                                'CO',
                                                'CT',
                                                'DE',
                                                'FL',
                                                'GA',
                                                'HI',
                                                'ID',
                                                'IL',
                                                'IN',
                                                'IA',
                                                'KS',
                                                'KY',
                                                'LA',
                                                'ME',
                                                'MD',
                                                'MA',
                                                'MI',
                                                'MN',
                                                'MS',
                                                'MO',
                                                'MT',
                                                'NE',
                                                'NV',
                                                'NH',
                                                'NJ',
                                                'NM',
                                                'NY',
                                                'NC',
                                                'ND',
                                                'OH',
                                                'OK',
                                                'OR',
                                                'PA',
                                                'RI',
                                                'SC',
                                                'SD',
                                                'TN',
                                                'TX',
                                                'UT',
                                                'VT',
                                                'VA',
                                                'WA',
                                                'WI',
                                                'WY']
                                        }}/>

                    <br/>
                    <br/>
                    <label>What city are you originally from?</label>
                    <input ref="City" className="form-control"/>

                    <label>What is the zip of your permanent address? </label>
                    <input ref="Zip" className="form-control"/>

                    <label>Are you Living on campus or off campus?</label>
                    <br/>
                    <PullDownMenuHelper Value={this.state.LivingOnOffCampus} Change={this.ChangeSelectBoxes}
                                        ListOfOptions={{
                                            StateName: 'LivingOnOffCampus',
                                            Options: ['On', 'Off']
                                        }}/>

                    <br/>
                    <br/>

                    <label>If living on campus, where?</label>
                    <br/>
                    <PullDownMenuHelper Value={this.state.WhereCampus} Change={this.ChangeSelectBoxes}
                                        ListOfOptions={{
                                            StateName: 'WhereCampus',
                                            Options: ["Quad", "SueB", "Genesee Hall", "Southside", "Phase", "Tower", "Brooks", "Riverview", 'Other']
                                        }}/>

                    <br/>
                    <br/>

                    <label>If living off campus, where?</label>
                    <br/>
                    <PullDownMenuHelper Value={this.state.WhereOffCampus} Change={this.ChangeSelectBoxes}
                                        ListOfOptions={{
                                            StateName: 'WhereOffCampus',
                                            Options: ["19th Ward - 14611", "19th Ward - 14619", "White Coat District", "College Town", "South Wedge", "Park Ave", "Village Gate", "Cobbs Hill", "CornHill", "Other"]
                                        }}/>

                    <br/>
                    <br/>

                    <label>What is your current Zip code?</label>
                    <br/>
                    <PullDownMenuHelper Value={this.state.CurrentZip} Change={this.ChangeSelectBoxes}
                                        ListOfOptions={{
                                            StateName: 'CurrentZip',
                                            Options: ['14627 (River Campus)',
                                            '14620 (College Town, White Coat District)',
                                            '14610 (Cobbs Hill)',
                                            '14619 (deep in the 19th ward)',
                                            '14611 (barely in the 19th ward)',
                                            '14608 (RiverView)',
                                            '14607 (Park Ave, Village Gate, East and Alexander)',
                                            'Write In']
                                        }}/>

                    <br/>
                    <br/>
                    <label>Write In</label>
                    <input ref="CurrentZip" className="form-control"/>



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