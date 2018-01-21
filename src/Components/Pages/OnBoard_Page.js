import React, {Component} from 'react';
import axios from "axios/index";
import ButtonLink from '../Button_Link';

class OnBoard_Page extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    SubmitSurvey() {
        const REFS = this.refs;

        let NewPersonObject = {
            FirstName: REFS.FirstName.value,
            LastName: REFS.LastName.value,
            Email: REFS.Email.value
        };

        //sending to sever to OnBoard Someone, first check if any fields are blank
        axios.post('/OnBoardPerson', {
            NewPersonObject
        })
            .then((response) => {
                alert('Person Submitted');
                console.log(response);

            })
            .catch((error) => {
                alert('Sever Error');
                console.warn(error);
            });

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
                </div>
                <button onClick={() => {
                    this.SubmitSurvey()
                }} type="submit" className="btn btn-default">Submit
                </button>

            </div>
        )
    }
}

export default OnBoard_Page;