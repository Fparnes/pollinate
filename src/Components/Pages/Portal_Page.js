import React, {Component} from 'react';
import NavigationBar from "../Navigation_Bar";
import ButtonLink from "../Button_Link";
import SurveyListHolder from "../SurveyListHolder";
import NewSurveyPopup from "../NewSurvey_Popup";


class Portal_Page extends Component {
    constructor(props){
        super(props);
        this.state = {
            PopUpToggle: false
        }
    }
    NewSurvey_Toggle(){
       
        if(this.state.PopUpToggle){
            this.setState({
                PopUpToggle: false
            });
        } else {
            this.setState({
                PopUpToggle: true
            });
        }
    }
    NewSurvey_Display(){
         if(this.state.PopUpToggle){
             return <NewSurveyPopup ClickFunction={this.NewSurvey_Toggle.bind(this)} NewSurvey_Toggle={this.NewSurvey_Toggle}/>
         }
    }
    render() {
        return (
            <div>
                <NavigationBar/>
                {this.NewSurvey_Display()}
                <div className='container'>
                    <ButtonLink ButtonClass="btn btn-default navbar-btn" LinkText="/ClientTeam" Text="Team Page"/>
                    <div className='col-md-6'>
                        <SurveyListHolder ClickFunction={this.NewSurvey_Toggle.bind(this)} TextTitle='Ongoing'/>
                    </div>
                    <div className='col-md-6'>
                        <SurveyListHolder ClickFunction={null}  TextTitle='Complete' TextButton='New Folder'/>
                    </div>
                </div>

            </div>
        );
    }
}

export default Portal_Page;
