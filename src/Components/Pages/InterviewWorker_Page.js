import React, {Component} from 'react';
import SurveyListHolder from '../SurveyListHolder';
import NewSurveyPopup from '../NewSurvey_Popup';
import CustomQuestion from '../AddCustomQuestion';
import axios from "axios/index";


class InterviewWorker_Page extends Component {
    constructor(props) {
        super(props);

        this.MoveQuestionOver = this.MoveQuestionOver.bind(this);
        this.NewSurvey_Toggle = this.NewSurvey_Toggle.bind(this);
        this.NewSurvey_Display = this.NewSurvey_Display.bind(this);
        this.EndInterview = this.EndInterview.bind(this);


        this.state = {
            Questions: null,
            QuestionsAsked: [],
            PopUpToggle: false,
            OrderOfQuestionsAsked: [],
            HashTableOfQuestions: {}
        }
    }

    componentDidMount() {
        axios.post('/GetQuestions',
            {
                SurveyID: '5a6285e312e84233b6737d63'
            })
            .then((response) => {

                let ListOfQuestionsArray = [];

                let HashTableOfQuestions = {};

                response.data.Questions.forEach((Question, key) => {
                    ListOfQuestionsArray.push({Title: Question, _id: Question});
                    HashTableOfQuestions[Question] = key;
                });

                this.setState({
                    Questions: ListOfQuestionsArray,
                    HashTableOfQuestions: HashTableOfQuestions
                })
            })
            .catch(function (error) {
                console.warn(error);
            });
    }

    NewSurvey_Toggle(IDofButtonClicked) {

        if (this.state.PopUpToggle) {
            //if it is an object, it is an event which if passed throws an error throws an error
            if (typeof(IDofButtonClicked) === 'object') {
                this.setState({
                    PopUpToggle: false,
                });
            } else {

                this.setState({
                    PopUpToggle: false,
                    Questions: this.state.Questions.concat({Title: IDofButtonClicked, _id: IDofButtonClicked})
                });
            }


        } else {
            this.setState({
                PopUpToggle: true,
            });
        }

    }

    NewSurvey_Display() {
        if (this.state.PopUpToggle) {
            return <NewSurveyPopup
                BodyOfPopup={<CustomQuestion ClickFunction={this.NewSurvey_Toggle}/>}
                Title='Custom Question'
                ClickFunction={this.NewSurvey_Toggle} ButtonText='Close'/>;
        }
    }

    MoveQuestionOver(input) {

        const ArrayOfQuestions = this.state.Questions;
        const ArrayOfAskedQuestions = this.state.QuestionsAsked;

        //This is for getting the order of question with using the index of the array
        //they are in, rather than the entire question again
        const HashTableOfQuestions = this.state.HashTableOfQuestions;

        let ListOfQuestionsArray = [];
        let ListOfQuestionsAsked = [];

        //Removing questions from question array to asked
        let ArrayOfQuestionsCurrent = ArrayOfQuestions.filter((obj) => {
            return obj._id !== input;
        });

        ArrayOfQuestionsCurrent.forEach((Question) => {
            ListOfQuestionsArray.push({Title: Question.Title, _id: Question.Title});
        });

        ArrayOfAskedQuestions.forEach((Question) => {
            ListOfQuestionsAsked.push({Title: Question.Title, _id: Question.Title});
        });

        let hashValue = HashTableOfQuestions[input];

        if (hashValue === undefined) {
            hashValue = input;
        }
        this.setState({
            Questions: ListOfQuestionsArray,
            QuestionsAsked: this.state.QuestionsAsked.concat({Title: input, _id: input}),
            OrderOfQuestionsAsked: this.state.OrderOfQuestionsAsked.concat(hashValue)
        })

    }

    EndInterview() {
        const InterviewOrder = this.state.OrderOfQuestionsAsked;
        console.log(InterviewOrder);
        axios.post('/PostInterviewWorker',
            {
                SurveyID: '5a63adb28072ce36be74457e',
                QuestionOrder: InterviewOrder

            })
            .then((response) => {
                console.log(response);
                alert('Submitted!');
            })
            .catch(function (error) {
                console.warn(error);
            });
    }

    render() {
        let ListOfSurveys = [{Questions: 10, People: 20, Title: 'Rochester Running', Percent: 85},
            {Questions: 11, People: 20, Title: 'Soup Spoon', Percent: 75},
            {Questions: 12, People: 20, Title: 'Rochester Flowers', Percent: 40}];


        let ListOfAppoinments = [{Title: 'Wilfred Wallis'},
            {Title: 'Max Sims'},
            {Title: 'Ben Woods'}];

        const QuestionsValue = this.state.Questions;
        if (QuestionsValue !== null) {
            ListOfAppoinments = QuestionsValue;
        }

        const AskedQuestions = this.state.QuestionsAsked;

        if (AskedQuestions !== []) {
            ListOfSurveys = AskedQuestions;
        }

        let MakeAppointment = 'Make Appointment';

        return (
            <div>
                {this.NewSurvey_Display()}
                <div className='container'>
                    <div className='col-md-6'>
                        <SurveyListHolder SurveyData={ListOfAppoinments} SelectAppoinment={this.MoveQuestionOver}
                                          TextTitle='List of Possible Questions:' ButtonText='Add A Custom Question'
                                          TextButton={MakeAppointment} ClickFunction={() => {
                            this.NewSurvey_Toggle()
                        }}
                        />
                    </div>
                    <div className='col-md-6'>
                        <SurveyListHolder SurveyData={ListOfSurveys} ClickFunction={() => {
                            this.EndInterview()
                        }}
                                          TextTitle='List of Asked Questions' ButtonText='End Interview'/>
                    </div>
                </div>
            </div>)
    }
}

export default InterviewWorker_Page;