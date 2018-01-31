import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import SocialButton from '../LoginButton';

class Login_Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            SignedIn: false
        }
        this.handleSocialLogin = this.handleSocialLogin.bind(this);
        this.handleSocialLoginFailure = this.handleSocialLoginFailure.bind(this);
    }
    handleSocialLoginFailure(err) {
        console.error(err);
    }
    handleSocialLogin(user) {
        const self = this;
        console.log(user);
        axios.post('/AccessTokenCheck', {
            accessToken: user._token.accessToken,
            email: user._profile.email,
        })
            .then(function (res) {
                console.log(res);
                if (res.data) {
                    self.setState({
                        SignedIn: true
                    });
                } else {
                    //failed
                    alert('Login Failed');
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        const SignedInState = this.state.SignedIn;
        if (SignedInState) {
            return (
                <div>
                    <h1><Link to="/Portal">Portal</Link></h1>
                    <h1><Link to="/EmployeePortal">Employee</Link></h1>
                    <h1><Link to="/StudentAccount">Student</Link></h1>
                    <h1><Link to="/InterviewWorker">InterviewWorker</Link></h1>
                    <h1><Link to="/InterviewStudent">InterviewStudent</Link></h1>
                </div>
            );
        } else {
            return (
                <div>
                    <SocialButton
                        provider='facebook'
                        appId='343587426050004'
                        onLoginSuccess={this.handleSocialLogin}
                        onLoginFailure={this.handleSocialLoginFailure}
                    >
                        Login with Facebook
                    </SocialButton>
                </div>
            );
        }

    }
}

export default Login_Page;
