import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//css
import '../Styles/BreadCrumb_Style.css';

//Shows BreadCrumbs for non-home pages (http://getbootstrap.com/docs/3.3/components/#breadcrumbs)
class BreadCrumb extends Component {
    render(){
        return (
            <ol  className="breadcrumb">
                <li className="breadcrumb-item"><Link to={this.props.LinkRoute}>{this.props.LinkText}</Link></li>
                <li className="breadcrumb-item active">{this.props.CurrentText}</li>
            </ol>
        )
    }
}

export default BreadCrumb;