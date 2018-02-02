import React, {Component } from 'react';

class PullDownMenuHelper extends Component {
    constructor(props){
        super(props);
        this.PrintOptions = this.PrintOptions.bind(this);
        this.HandleChange = this.HandleChange.bind(this);
    }
    PrintOptions(){
        const ListOfOptions = this.props.ListOfOptions.Options;
        return ListOfOptions.map((Option)=>{
            return <option key={Option} value={Option}>{Option}</option>
        })
    }
    HandleChange(event){
        const StateID = this.props.ListOfOptions.StateName;
        this.props.Change(StateID, event.target.value);
    }
    render(){
        return (
            <select value={this.props.Value} onChange={this.HandleChange}>
                {this.PrintOptions()}
            </select>
        )
    }
}

export default PullDownMenuHelper;