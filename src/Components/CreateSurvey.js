import React, {Component} from 'react';
import axios from 'axios';

//css

class CreateSurvey extends Component {
    SubmitSurvey() {

        const REFS = this.refs;

        let NewSurveyObject = {
            Name: REFS.SurveyName.value,
            Questions: REFS.ListOfQuestions.value.split(','),
            NumPeople: REFS.NumPeople.value
        };

        //sending to sever to create a New Survey, first check if any fields are blank
        if (NewSurveyObject.Name !== '' || NewSurveyObject.Name !== '' || NewSurveyObject.Name !== '') {
            axios.post('/CreateNewSurvey', {
                NewSurveyObject
            })
                .then((response) => {
                    alert('Survey Made.');
                    console.log(response);
                    //Close pop up
                    this.props.ClickFunction();
                })
                .catch((error) => {
                    alert('Sever Error');
                    console.warn(error);
                });
        } else {
            //Name, Questions, or NumPeople was blank
            alert('One or more fields were blank, please resubmit.  See console for details.');
            console.warn(NewSurveyObject);
        }

    }

    render() {
        return (
            <div className='containerPopUp'>
                <div className="form-group">
                    <label>Name Of Survey</label>
                    <input ref="SurveyName" className="form-control"/>
                    <label>Questions</label>
                    <input ref="ListOfQuestions" className="form-control"/>
                    <label>Number of People</label>
                    <input ref="NumPeople" className="form-control"/>
                </div>
                <button onClick={() => {
                    this.SubmitSurvey()
                }} type="submit" className="btn btn-default">Submit
                </button>

            </div>
        );
    }
}

export default CreateSurvey;
