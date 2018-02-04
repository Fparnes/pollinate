import React, {Component} from 'react';

//css
import '../Styles/OnBoardingQuestion_Styles.css';

//props = ListOfOptions, Change, Value, Question
class PullDownMenuHelper extends Component {
    constructor(props) {
        super(props);
        this.PrintOptions = this.PrintOptions.bind(this);
        this.HandleChange = this.HandleChange.bind(this);
    }

    PrintOptions() {
        const ListOfOptions = this.props.ListOfOptions.Options;
        return ListOfOptions.map((Option) => {
            return <option key={Option} value={Option}>{Option}</option>
        })
    }

    HandleChange(event) {

        const ChangedValue = event.target.value;
        const ObjectID = this.props.ListOfOptions.StateName;

        let StateObject = {};
        StateObject[ObjectID] = ChangedValue;
        this.props.Change(StateObject);
    }

    render() {
        return (
            <div className='IndivQuestion'>
                <label className='QuestionTitle'>{this.props.Question}</label>
                <select value={this.props.Value} onChange={this.HandleChange}>
                    {this.PrintOptions()}
                </select>
            </div>
        )
    }
}

export default PullDownMenuHelper;