import React, {Component} from 'react';


class GenricNav_Bar extends Component {
    ToggleButtons() {
        const ButtonText = this.props.ButtonText;
        //no text dont show button
        if (ButtonText !== undefined) {
            return(
                <div>
                    <button onClick={this.props.ClickFunction} className='btn btn-default navbar-btn MarginRight'>
                        {ButtonText}</button>
                </div>
            )

        }

    }

    render() {
        return (
            <nav className='navbar navbar-default'>
                <div className="navbar-header">
                    <p className="navbar-brand">{this.props.TextTitle}</p>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <div className="nav navbar-nav navbar-right">
                        {this.ToggleButtons()}
                    </div>
                </div>
            </nav>

        );
    }
}

GenricNav_Bar.defaultProps = {
    TextTitle: 'Default Title',
};

export default GenricNav_Bar;

