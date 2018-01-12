import React, {Component} from 'react';


//css
import '../Styles/NewSurvey_Popup.css'

class NewSurvey_Popup extends Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <nav className='navbar navbar-default'>
                        <div className="navbar-header">
                            <p className="navbar-brand">Create a new Survey:</p>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <div className="nav navbar-nav navbar-right">
                                <button onClick={this.props.ClickFunction} className='btn btn-default navbar-btn MarginRight'>Close</button>
                            </div>
                        </div>
                    </nav>

                </div>
            </div>
        );
    }
}

export default NewSurvey_Popup;

