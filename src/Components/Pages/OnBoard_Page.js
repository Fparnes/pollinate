import React, {Component} from 'react';

//Onboarding Pages
import OnBoardingPageOne from '../OnBoarding/OnBoardingPageOne';
import OnBoardingPageTwo from '../OnBoarding/OnBoardingPageTwo';
import OnBoardingPageThree from '../OnBoarding/OnBoardingPageThree';


class OnBoard_Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CurrentPage: 1,
            PageOneInfo: null,
            PageTwoInfo: null,
            PageThreeInfo: null,
            PageFourInfo: null
        };

        this.ChangePage = this.ChangePage.bind(this);
    }

    ChangePage(PageNumber, StateInfo) {
        switch (PageNumber) {
            case 1:
                this.setState({
                    PageOneInfo: StateInfo
                });
                break;
            case 2:
                this.setState({
                    PageTwoInfo: StateInfo,
                    CurrentPage: 2
                });
                break;
            case 3:
                this.setState({
                    PageThreeInfo: StateInfo,
                    CurrentPage: 3
                });
                break;
            case 4:
                this.setState({
                    PageFourInfo: StateInfo
                });
                break;
            default:
                console.warn(PageNumber);
                alert('Default in switch OnBoarding Page');
        }

    }

    render() {
        const CurrentPage = this.state.CurrentPage;
        console.log('CurrentPage:' +CurrentPage );
        switch (CurrentPage) {
            case 1:
                return <OnBoardingPageOne ChangePage={this.ChangePage}/>;
            case 2:
                return <OnBoardingPageTwo ChangePage={this.ChangePage}/>;
            case 3:
                return <OnBoardingPageThree ChangePage={this.ChangePage}/>;
            case 4:

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