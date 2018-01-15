import React, { Component } from 'react';
import NavigationBar from '../Navigation_Bar';
import BreadCrumb from '../BreadCrumb';

class AccountSettings_Page extends Component {
    render() {
        return (
            <div>
                <NavigationBar MainLink='EmployeePortal' Text='Your Account' LinkText='AccountSettings'/>
                <div className='container'>
                    <BreadCrumb LinkRoute='/Portal' LinkText='Portal' CurrentText='Team Page' />
                    <div className='text-center'>
                        <h1>Wilfred </h1>
                        <h1>Wallis</h1>
                        <h1>wwallis@u.rochester </h1>
                        
                    </div>


                </div>
            </div>
        );
    }
}

export default AccountSettings_Page;