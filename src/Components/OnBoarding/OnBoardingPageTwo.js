import React, {Component} from 'react';
import TextQuestion from './TextQuestion';
import PullDownMenuHelper from './PullDownMenuHelper';

class OnBoardingOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            DrinkAlcohol: 'Yes',
            BarDrink: 'Never',
            DrinkSpend: '',
            OftenConcerts: 'Never',
            SpendShirts: '',
            SpendNonWorkPants: '',
            SpendShorts: '',
            SpendShoesEveryday: '',
            SpendWorkOutShirts: '',
            SpendWorkOutShorts: '',
            SpendDressShirt: '',
            SpendDressPants: '',
            SpendDresses: '',
            ShoppingOnlinePerson: 'Online',
            PlayVideoGames: 'Yes',
            PetsRochester: 'Yes',



        };

        this.HandleState_Input = this.HandleState_Input.bind(this);
    }

    HandleState_Input(StateObject) {
        this.setState(StateObject);
    }

    Alcohol_Questions() {
        return (
            <div>
                <PullDownMenuHelper ListOfOptions={{
                    StateName: 'DrinkAlcohol',
                    Options: ['Yes', 'No', 'N/A']
                }} Change={this.HandleState_Input} Value={this.state.DrinkAlcohol}
                                    Question='Do you drink alcohol?'/>

                <PullDownMenuHelper ListOfOptions={{
                    StateName: 'BarDrink',
                    Options: ['Yes', 'No', 'N/A']
                }} Change={this.HandleState_Input} Value={this.state.BarDrink}
                                    Question='How often do you go out to a restaurant or bar to drink?'/>

                <TextQuestion Question='What you buy a drink, how much are you looking to spend?'
                              TextChange={this.HandleState_Input} Text={this.state.DrinkSpend}
                              StateID='DrinkSpend'/>

                <TextQuestion Question='Do you play any sports?'
                              TextChange={this.HandleState_Input} Text={this.state.DrinkSpend}
                              StateID='DrinkSpend'/>




            </div>
        )
    }

    render() {
        return (
            <div className='container'>
                <h1>On Board Someone, Page Two:</h1>
                <div className="form-group">

                    {this.Alcohol_Questions()}

                    <PullDownMenuHelper ListOfOptions={{
                        StateName: 'OftenConcerts',
                        Options: ['Never',
                            'Once every 12 months',
                            'once every 6 months',
                            'once every month',
                            'more than once a month']
                    }} Change={this.HandleState_Input} Value={this.state.OftenConcerts}
                                        Question='How often do you go to concerts?'/>

                    <TextQuestion
                        Question='How much do you typically spend on shirts? (Ex: non-work shirt) (Interviewer: for example, just type: 50 or 50-60)'
                        TextChange={this.HandleState_Input} Text={this.state.SpendShirts}
                        StateID='SpendShirts'/>

                    <TextQuestion
                        Question='How much do you typically spend on pants (Ex: non-work pants)?'
                        TextChange={this.HandleState_Input} Text={this.state.SpendNonWorkPants}
                        StateID='SpendNonWorkPants'/>

                    <TextQuestion
                        Question='How much do you typically spend on shorts (Ex: non-work shorts)?'
                        TextChange={this.HandleState_Input} Text={this.state.SpendShorts}
                        StateID='SpendNonWorkShirts'/>

                    <TextQuestion
                        Question='How much do you typically spend on shoes? (Ex: everyday shoes) (Interviewer: for example, just type: 50 or 50-60)'
                        TextChange={this.HandleState_Input} Text={this.state.SpendShoesEveryday}
                        StateID='SpendShoesEveryday'/>

                    <TextQuestion
                        Question=' How much do you typically spend on workout shirts? (Ex: athletic clothes) (Interviewer: for example, just type: 50 or 50-60)'
                        TextChange={this.HandleState_Input} Text={this.state.SpendWorkOutShirts}
                        StateID='SpendWorkOutShirts'/>

                    <TextQuestion
                        Question='How much do you typically spend on workout shorts? (Ex: athletic clothes) (Interviewer: for example, just type: 50 or 50-60)'
                        TextChange={this.HandleState_Input} Text={this.state.SpendWorkOutShorts}
                        StateID='SpendWorkOutShorts'/>

                    <TextQuestion
                        Question='How much do you typically spend dress shirts? (Interviewer: for example, just type: 50 or 50-60)'
                        TextChange={this.HandleState_Input} Text={this.state.SpendDressShirt}
                        StateID='SpendDressShirt'/>

                    <TextQuestion
                        Question=' How much do you typically spend dress pants? (Interviewer: for example, just type: 50 or 50-60)'
                        TextChange={this.HandleState_Input} Text={this.state.SpendDressPants}
                        StateID='SpendDressPants'/>

                    <TextQuestion
                        Question='How much do you typically spend on dresses? (Interviewer: for example, just type: 50 or 50-60)'
                        TextChange={this.HandleState_Input} Text={this.state.SpendDresses}
                        StateID='SpendDresses'/>

                    <PullDownMenuHelper ListOfOptions={{
                        StateName: 'ShoppingOnlinePerson',
                        Options: ['Online',
                            'In-person',
                            'No preference']
                    }} Change={this.HandleState_Input} Value={this.state.ShoppingOnlinePerson}
                                        Question=' Do you prefer to do the majority of your shopping online or in-person'/>


                    <PullDownMenuHelper ListOfOptions={{
                        StateName: 'PlayVideoGames',
                        Options: ['Yes',
                            'No']
                    }} Change={this.HandleState_Input} Value={this.state.PlayVideoGames}
                                        Question='Do you play any video games?'/>


                    <PullDownMenuHelper ListOfOptions={{
                        StateName: 'PetsRochester',
                        Options: ['Yes',
                            'No']
                    }} Change={this.HandleState_Input} Value={this.state.PetsRochester}
                                        Question='Do you have any pets in Rochester?'/>

                    <PullDownMenuHelper ListOfOptions={{
                        StateName: 'PetsRochester',
                        Options: ['No Idea',
                            'Write In']
                    }} Change={this.HandleState_Input} Value={this.state.IndustryGrad}
                                        Question='What industry are you planning to go into after graduation? (Ex: healthcare, marketing, accounting)'/>


                    <PullDownMenuHelper ListOfOptions={{
                        StateName: 'IndustryGrad',
                        Options: ['No Idea',
                            'Write In']
                    }} Change={this.HandleState_Input} Value={this.state.IndustryGrad}
                                        Question='Write In'/>

                    <TextQuestion
                        Question='Write In'
                        TextChange={this.HandleState_Input} Text={this.state.IndustryGradW}
                        StateID='IndustryGradW'/>



                </div>

                {/*Going to the next page*/}
                <hr/>
                <button onClick={() => {
                    this.props.ChangePage(3, this.state)
                }} type="submit" className="btn CustomButton btn-default">Next Page
                </button>

            </div>
        )
    }

}

export default OnBoardingOne;