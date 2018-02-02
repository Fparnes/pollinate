import React, {Component} from 'react';

//css
import '../Styles/OnBoardingQuestion_Styles.css';

class TextQuestion extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        const ChangedValue = event.target.value;
        const ObjectID = this.props.ID;

        let StateObject = {};
        StateObject[ObjectID] = ChangedValue;
        this.props.TextChange(StateObject);
    }
    render() {
        return (
            <div className='IndivQuestion'>
                <label>{this.props.Question}</label>
                <input value={this.props.Text} type='text' OnChange={this.handleChange} className="form-control"/>
            </div>
        )
    }
}

export default TextQuestion;