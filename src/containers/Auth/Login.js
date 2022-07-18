import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

// import * as actions from "../store/actions";
import * as actions from "../../store/actions";

import './Login.scss';
import { FormattedMessage } from 'react-intl';
import { handleLogin } from '../../services/userService';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: false,
            errMessage: ''
        }
    }
    haneleOnChangeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleFormLogin = async () => {
        this.setState({
            errMessage: ''
        })
        try {
            let data = await handleLogin(this.state.username, this.state.password);
            if (data && data.errCode !== 0) {
                this.setState({
                    errMessage: data.message
                })
            }
            if (data && data.errCode === 0) {
                this.props.userLoginSuccess(data.user);
                console.log('Login success')
            }
        } catch (error) {
            if (error.response) {
                if (error.response.data) {
                    this.setState({
                        errMessage: error.response.data.message
                    })
                }
            }
            console.log('hoidanit', error.response)

        }

    }

    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }

    render() {
        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='cl-12 text-login'>Login</div>
                        <div className='cl-12 form-group login-input'>
                            <label className='text-input'>Username:</label>
                            <input type='text' className='form-control' placeholder='Enter your name'
                                value={this.state.username} name='username'
                                onChange={(e) => this.haneleOnChangeInput(e)}
                            />
                        </div>
                        <div className='cl-12 form-group login-input'>
                            <label className='text-input'>Password:</label>
                            <div className='custom-input-password'>
                                {/* isShowPassword = fasle */}
                                <input type={this.state.isShowPassword ? 'text' : 'password'} className='form-control' placeholder='Enter your password'
                                    value={this.state.password} name='password'
                                    onChange={(e) => this.haneleOnChangeInput(e)}
                                />
                                <span onClick={() => { this.handleShowHidePassword() }}>
                                    <i className={this.state.isShowPassword ? "fas fa-eye" : "fas fa-eye-slash"}></i>
                                </span>
                            </div>

                        </div>
                        <div className='col-12' style={{ color: 'red' }}>
                            {this.state.errMessage}
                        </div>
                        <div className='col-12'>
                            <button className='btn-login' type='button'
                                onClick={() => this.handleFormLogin()}
                            >Login</button>
                        </div>
                        <div className='col-12'>
                            <span className='forgot-password'>Forgot your password?</span>
                        </div>
                        <div className='col-12 text-center mt-3'>
                            <span className='text-other-login'>Or Login with:</span>
                        </div>
                        <div className='col-12 social-login'>
                            <i className="fab fa-google-plus-g google"></i>
                            <i className="fab fa-facebook-f facebook"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        // userLoginFail: () => dispatch(actions.adminLoginFail()),
        userLoginSuccess: (userInfor) => dispatch(actions.userLoginSuccess(userInfor))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);