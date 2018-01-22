import React, {Component} from 'react';
import axios from "axios/index";


class InterviewStudent_Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            VideoLink: 'Loading..',
            TestSound: 'Listening',
            TestButtonClicked: false
        };
    }


    componentDidMount() {
        axios.post('/GetVideoLink',
            {
                AppoinmentID: '5a63adb28072ce36be74457e'
            })
            .then((response) => {
                this.setState({
                    VideoLink: response.data
                });
            })
            .catch(function (error) {
                console.warn(error);
            });
    }
    TestSound() {
        const State = this.state;

        if (!State.TestButtonClicked) {
            this.setState({
                TestButtonClicked: true
            })
        }

        const BrowserSpeechRecognition =
            window.SpeechRecognition ||
            window.webkitSpeechRecognition ||
            window.mozSpeechRecognition ||
            window.msSpeechRecognition ||
            window.oSpeechRecognition;
        const recognition = BrowserSpeechRecognition
            ? new BrowserSpeechRecognition()
            : null;

        recognition.start();
    }

    displayTestSound() {
        const State = this.state;
        if (State.TestButtonClicked) {
            return <p>{State.TestSound}</p>
        }
    }

    render() {

        return (
            <div>
                <div className='container'>
                    <div className='col-sm-6'>
                        <h1>Instructions:</h1>
                        <p>In a different tab or window go to {this.state.VideoLink}</p>
                        <p>Then test your microphone, by clicking the button below</p>
                        <button onClick={() => {
                            this.TestSound()
                        }} className='btn btn-default'>Test
                        </button>
                        {this.displayTestSound()}
                    </div>
                    <div className='col-sm-6'>

                    </div>
                </div>
            </div>
        );
    }
}


export default InterviewStudent_Page;