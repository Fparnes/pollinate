import React, {Component} from 'react';
import OnBoardingPageOne from '../OnBoarding/OnBoardingPageOne';


class OnBoard_Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CurrentPage: 0
        }
    }

    render() {
        const CurrentPage = this.state.CurrentPage;
        switch (CurrentPage) {
            case 0:
                return <OnBoardingPageOne/>;
            case 1:

                break;
            case 2:

                break;
            case 3:

                break;
            default:
                console.warn(CurrentPage);
                alert('Default in switch OnBoarding Page');
        }
        return (
            <div>
                <h1>Hello!</h1>
            </div>
        )
    }
}

export default OnBoard_Page;