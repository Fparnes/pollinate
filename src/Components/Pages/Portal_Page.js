import React, {Component} from 'react';
import NavigationBar from "../Navigation_Bar";
import ButtonLink from "../Button_Link";
import SurveyListHolder from "../SurveyListHolder";


class Portal_Page extends Component {
    render() {
        return (
            <div>
                <NavigationBar/>
                <div className='container'>
                    <ButtonLink ButtonClass="btn btn-default navbar-btn" LinkText="/ClientTeam" Text="Team Page"/>
                    <div className='col-md-6'>
                        <SurveyListHolder PercentValue={78} TextTitle='Ongoing'/>
                    </div>
                    <div className='col-md-6'>
                        <SurveyListHolder PercentValue={56}  TextTitle='Complete'/>

                    </div>
                </div>

            </div>
        );
    }
}

export default Portal_Page;
