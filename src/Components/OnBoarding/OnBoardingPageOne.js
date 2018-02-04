import React, {Component} from 'react';
import ButtonLink from '../Button_Link';
import TextQuestion from './TextQuestion';
import PullDownMenuHelper from './PullDownMenuHelper';

class OnBoardingOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FName: '',
            LName: '',
            Email: '',
            Age: '',
            CYear: '',
            UniquePrograms: 'None',
            WIUniquePrograms: '',
            Country: 'U.S.',
            State: 'NY',
            PZip: '',
            LivingOnOffCampus: 'On',
            WhereCampus: 'Quad',
            WhereOffCampus: 'White Coat District',
            CurrentZip: '14627 (River Campus)',
            ZipWrite: '',
            EatYourselfSpend: '',
            OftenEatYourself: 'Never',
            EatGroupSpend: '',
            OftenEatGroup: 'Never',
            QualityOverQuanity: 'I care more about the quality of food than the quantity',
            OftenOrderFood: 'Never',
            FoodOnCamapusFav: 'None',
            EatGroupSpendW: '',
            CoffeeDrinker: 'Yes',
            TeaDrinker: 'Yes'



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
                    <TextQuestion Question='First Name' TextChange={this.HandleState_Input} Text={this.state.FName}
                                  StateID='FName'/>

                    <TextQuestion Question='Last Name' TextChange={this.HandleState_Input} Text={this.state.LName}
                                  StateID='LName'/>

                    <TextQuestion Question='What is your preferred email?' TextChange={this.HandleState_Input}
                                  Text={this.state.Email} StateID='Email'/>

                    <TextQuestion Question='Age' TextChange={this.HandleState_Input} Text={this.state.Age}
                                  StateID='Age'/>

                    <TextQuestion Question='Class Year' TextChange={this.HandleState_Input} Text={this.state.CYear}
                                  StateID='CYear'/>


                    <PullDownMenuHelper ListOfOptions={{
                        StateName: 'UniquePrograms',
                        Options: ['REMS', 'McNair Scholar', 'Renaissance Scholar', 'Take 5', 'No', 'Write In']
                    }} Change={this.HandleState_Input} Value={this.state.UniquePrograms}
                                        Question='Are you part of any unique programs '/>

                    <TextQuestion Question='Write in special program:' TextChange={this.HandleState_Input}
                                  Text={this.state.WIUniquePrograms}
                                  StateID='CYear'/>

                    <PullDownMenuHelper ListOfOptions={{
                        StateName: 'Country',
                        Options: ['Canada', 'China', 'U.S.', 'U.K.', 'Write In']
                    }} Change={this.HandleState_Input} Value={this.state.Country} Question='What State are you from?'/>

                    <PullDownMenuHelper ListOfOptions={{
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
                    }} Change={this.HandleState_Input} Value={this.state.State} Question='What State are you from?'/>

                    <TextQuestion Question='What city are you originally from?' TextChange={this.HandleState_Input}
                                  Text={this.state.CYear}
                                  StateID='CYear'/>

                    <TextQuestion Question='What is the zip of your permanent address?'
                                  TextChange={this.HandleState_Input} Text={this.state.PZip}
                                  StateID='PZip'/>

                    <PullDownMenuHelper ListOfOptions={{
                        StateName: 'LivingOnOffCampus',
                        Options: ['On', 'Off']
                    }} Change={this.HandleState_Input} Value={this.state.LivingOnOffCampus}
                                        Question='Are you living on or off campus?'/>

                    <PullDownMenuHelper ListOfOptions={{
                        StateName: 'WhereCampus',
                        Options: ['9th Ward',
                            'White Coat District',
                            'College Town',
                            'South Wedge',
                            'Park Ave',
                            'Village Gate',
                            'Cobbs Hill',
                            'Cornhill',
                            'Other']
                    }} Change={this.HandleState_Input} Value={this.state.WhereCampus}
                                        Question='If living off campus, where?'/>

                    <PullDownMenuHelper ListOfOptions={{
                        StateName: 'CurrentZip',
                        Options: ['14627 (River Campus)',
                            '14620 (College Town, White Coat District)',
                            '14610 (Cobbs Hill)',
                            '14619 (deep in the 19th ward)',
                            '14611 (barely in the 19th ward)',
                            '14608 (RiverView)',
                            '14607 (Park Ave, Village Gate, East and Alexander)',
                            'Write In']
                    }} Change={this.HandleState_Input} Value={this.state.CurrentZip}
                                        Question='What is your current Zip code'/>

                    <TextQuestion Question='Write In' TextChange={this.HandleState_Input} Text={this.state.ZipWrite}
                                  StateID='ZipWrite'/>

                    <TextQuestion
                        Question='When you go out to eat by yourself, how much are you typically looking to spend?'
                        TextChange={this.HandleState_Input} Text={this.state.EatYourselfSpend}
                        StateID='EatYourselfSpend'/>

                    <PullDownMenuHelper ListOfOptions={{
                        StateName: 'OftenEatYourself',
                        Options: ['Never',
                            'Once a month',
                            'Once every other week',
                            '3 to 5 times a week',
                            'More than 5 times a week']
                    }} Change={this.HandleState_Input} Value={this.state.OftenEatYourself}
                                        Question='How often do you go out to eat by yourself?'/>

                    <TextQuestion
                        Question='When you go out to eat with a group in Rochester, how much are you typically looking to spend? '
                        TextChange={this.HandleState_Input} Text={this.state.EatGroupSpend}
                        StateID='EatGroupSpend'/>


                    <PullDownMenuHelper ListOfOptions={{
                        StateName: 'OftenEatGroup',
                        Options: ['Never',
                            'Once a month',
                            'Once every other week',
                            '3 to 5 times a week',
                            'More than 5 times a week']
                    }} Change={this.HandleState_Input} Value={this.state.OftenEatGroup}
                                        Question='How often do you go out to eat in a group?'/>

                    <PullDownMenuHelper ListOfOptions={{
                        StateName: 'QualityOverQuanity',
                        Options: ['I care more about the quantity of food than the quality',
                            'I care more about the quality of food than the quantity']
                    }} Change={this.HandleState_Input} Value={this.state.QualityOverQuanity}
                                        Question='Which of these two statements do you agree with more?'/>

                    <PullDownMenuHelper ListOfOptions={{
                        StateName: 'OftenOrderFood',
                        Options: ['Never',
                            'Once a month',
                            'Once every other week',
                            '3 to 5 times a week',
                            'More than 5 times a week']
                    }} Change={this.HandleState_Input} Value={this.state.OftenOrderFood}
                                        Question='How often do you typically order food to be delivered?'/>

                    <PullDownMenuHelper ListOfOptions={{
                        StateName: 'FoodOnCamapusFav',
                        Options: ['Douglass',
                            'The Pit',
                            'Danforth',
                            'Grab and Go',
                            'Starbucks',
                            'Peet s Coffee',
                            'Medical Center Cafeteria',
                            'Optikale',
                            'Connections',
                            'Rocky’s',
                            'None',
                            'Write In']
                    }} Change={this.HandleState_Input} Value={this.state.FoodOnCamapusFav}
                                        Question="What's your favorite place to grab a meal on campus?"/>

                    <TextQuestion
                        Question='Write In '
                        TextChange={this.HandleState_Input} Text={this.state.EatGroupSpendW}
                        StateID='EatGroupSpendW'/>

                    <PullDownMenuHelper ListOfOptions={{
                        StateName: 'CoffeeDrinker',
                        Options: ['Yes',
                            'No']
                    }} Change={this.HandleState_Input} Value={this.state.CoffeeDrinker}
                                        Question="Are you a coffee drinker"/>

                    <PullDownMenuHelper ListOfOptions={{
                        StateName: 'TeaDrinker',
                        Options: ['Yes',
                            'No']
                    }} Change={this.HandleState_Input} Value={this.state.TeaDrinker}
                                        Question="Are you a tea drinker"/>

                </div>

                {/*Going to the next page*/}
                <hr/>
                <button onClick={() => {
                this.props.ChangePage(2 , this.state)
                }} type="submit" className="btn CustomButton btn-default">Next Page
                </button>

            </div>
        )
    }

}

export default OnBoardingOne;