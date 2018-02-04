import React, {Component} from 'react';
import OnBoardingPageOne from '../OnBoarding/OnBoardingPageOne';


class OnBoard_Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CurrentPage: 0,
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
                    PageTwoInfo: StateInfo
                });
                break;
            case 3:
                this.setState({
                    PageThreeInfo: StateInfo
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
        switch (CurrentPage) {
            case 0:
                return <OnBoardingPageOne ChangePage={this.ChangePage}/>;
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