import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Button_Link extends Component {
    render() {
        return (
            <div>
                <Link to={this.props.LinkText}><button className={this.props.ButtonClass}>{this.props.Text}</button></Link>
            </div>
        );
    }
}

Button_Link.defaultProps = {
    Text: 'NO PROPS PASSED'
};

export default Button_Link;