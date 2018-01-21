import React, {Component} from 'react';
import axios from 'axios';

//css

class MakeAppointment_Popup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            StudentsObject: null,
            StudentSelected: null,
            Surveys: null,
            SurveySelected: null,
            Months: 1,
            Day: 15,
            Hour: 6,
            Mintues: 1,
            DayOrNight:0
        };
        this.handleChangeMonths = this.handleChangeMonths.bind(this);

        this.handleChangeDay = this.handleChangeDay.bind(this);

        this.handleChangeHour = this.handleChangeHour.bind(this);

        this.handleChangeMintues = this.handleChangeMintues.bind(this);

        this.handleChangeDayOrNight = this.handleChangeDayOrNight.bind(this);

        this.SelectStudent = this.SelectStudent.bind(this);

        this.SelectSurvey = this.SelectSurvey.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        axios.get('/GetStudents')
            .then((response) => {
                console.log(response);
                this.setState({
                    StudentsObject: response.data.Users,
                    Surveys: response.data.Survey
                })
            })
            .catch(function (error) {
                console.warn(error);
            });
    }
    handleChangeMonths(event) {
        console.log(event);
        this.setState({Months: event.target.value});
    }
    handleChangeDay(event) {
        this.setState({Day: event.target.value});
    }
    handleChangeHour(event) {
        this.setState({Hour: event.target.value});
    }
    handleChangeMintues(event) {
        this.setState({Mintues: event.target.value});
    }
    handleChangeDayOrNight(event) {
        this.setState({DayOrNight: event.target.value});
    }
    SelectStudent(student){
        this.setState({
            StudentSelected: student
        })
    }
    SelectSurvey(Survey){
        this.setState({
            SurveySelected: Survey
        })
    }
    PrintStudents() {
        const StudentList = this.state.StudentsObject;
        if (StudentList !== null) {

            return StudentList.map((student) => {
                return (
                    <div key={student._id} onClick={() => {
                       this.SelectStudent(student)}}>
                        <p>{student.FirstName + ' ' + student.LastName} </p>
                    </div>
                );
            })
        }
    }
    PrintSurvey() {
        const SurveyList = this.state.Surveys;
        console.log('---');
        console.log(SurveyList);
        if (SurveyList !== null) {
            return SurveyList.map((survey) => {
                return (
                    <div key={survey._id} onClick={() => {
                        this.SelectSurvey(survey)}}>
                        <p>{survey.Name}</p>
                    </div>
                );
            })
        }
    }
    handleSubmit(){
        const State = this.state;

        let Student  = State.StudentSelected;
        let Survey = State.SurveySelected;

        let DateObject = {
            Months: State.Months,
            Day: State.Day,
            Hour: State.Hour,
            Mintues: State.Mintues,
            DayOrNight: State.DayOrNight
        };
        console.log('Submitted');
        axios.post('/PostAppointment', {
            input: [DateObject, Student._id, '5a5d0b2b418dc61804035793', Survey._id]
        })
            .then((response) => {
                console.log(response);
            })
            .catch( (error) => {
                console.log(error);
            });
    }
    RenderStudentSelected() {
        const StudentSelected = this.state.StudentSelected;
        const SurveySelected = this.state.SurveySelected;
        console.log(StudentSelected);
        if (StudentSelected !== null && SurveySelected !== null) {
            return (
                <div>
                    <p>An appointment with {StudentSelected.FirstName + ' ' + StudentSelected.LastName} for Survey "{SurveySelected.Name}" for </p>
                    <select value={this.state.Months} onChange={this.handleChangeMonths}>
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>

                    </select>

                    <select value={this.state.Day} onChange={this.handleChangeDay}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">1</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                    </select>

                    <select value={this.state.Hour} onChange={this.handleChangeHour}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>

                    <select value={this.state.Mintues} onChange={this.handleChangeMintues}>
                        <option value="1">00</option>
                        <option value="2">15</option>
                        <option value="3">30</option>
                        <option value="4">45</option>
                    </select>

                    <select value={this.state.DayOrNight} onChange={this.handleChangeDayOrNight}>
                        <option value="0">AM</option>
                        <option value="1">PM</option>
                    </select>
                   <button onClick={this.handleSubmit.bind(this)}>Submit</button>
                </div>
            )
        }
    }

    render() {
        return (
            <div className='containerPopUp'>
                <div className='row'>
                    <div className='col-sm-6'>
                        <h4>Students:</h4>
                        {this.PrintStudents()}
                        <hr/>
                        <h4>Surveys:</h4>
                        <hr/>
                        {this.PrintSurvey()}
                    </div>
                    <div className='col-sm-6'>
                        {this.RenderStudentSelected()}
                    </div>

                </div>


            </div>
        );
    }
}

export default MakeAppointment_Popup;
