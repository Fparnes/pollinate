import React, { Component } from 'react';

//styles
import '../Styles/CustomApp_Styles.css'


//Component for under NewSurvey_Popup.  It adds a custom question when the worker is running
//an interview.
class AddCustomQuestion extends Component {
    constructor(props){
        super(props);

        this.ClickHanlder = this.ClickHanlder.bind(this);
    }
    ClickHanlder(){
        const CustomQuestion = this.refs.CustomQuestion.value;

        if(CustomQuestion !== ''){
            this.props.ClickFunction(CustomQuestion);
        }
    }
    render(){
        return (
            <div className='NeatDiv'>
                <input type='text' ref='CustomQuestion'/>
                <button onClick={this.ClickHanlder}  className='btn btn-default center-block'>Add</button>
            </div>
        )
    }
}

export default AddCustomQuestion;