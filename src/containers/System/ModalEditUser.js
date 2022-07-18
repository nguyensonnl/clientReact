import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { isBreakStatement } from 'typescript';
import { emitter } from '../../utils/emitter';
import _ from 'lodash';
class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: ''
        }
    }

    componentDidMount() {
        let user = this.props.userEdit;
        if (user && !_.isEmpty(user)) {
            this.setState({
                id: user.id,
                email: user.email,
                password: '123456',
                firstName: user.firstName,
                lastName: user.lastName,
                address: user.address
            })
        }

    }

    toggle = () => {
        this.props.toggleFromParent();
    }

    handleOnChangeInput = (event, id) => {
        let copyState = { ...this.state };
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        })
    }
    checkValidateInput = () => {
        let isValue = true;
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address'];
        for (let i = 0; i < arrInput.length; i++) {
            //console.log('Check inside loop:', this.state[arrInput[i], arrInput[i]])
            if (!this.state[arrInput[i]]) {
                isValue = false;
                alert('Missing parameter' + arrInput[i]);
                break;
            }
        }
        return isValue;
    }
    handleSaveUser = () => {
        let isValid = this.checkValidateInput();
        if (isValid === true) {
            //Call api
            this.props.doEditUser(this.state);
        }
    }

    render() {
        const { email, password, firstName, lastName, address } = this.state;
        return (

            <div>
                <Modal
                    isOpen={this.props.isOpen}
                    toggle={() => { this.toggle() }}
                    className={'modal-user-container'}
                    size="lg"
                >
                    <ModalHeader toggle={() => { this.toggle() }}>Edit a new user</ModalHeader>
                    <ModalBody>
                        <div className='modal-user-body'>
                            <div className='input-container'>
                                <label>Email</label>
                                <input type='text' style={{ 'cursor': 'not-allowed' }} disabled placeholder='Email' value={email}
                                    onChange={(event) => this.handleOnChangeInput(event, "email")}
                                />
                            </div>
                            <div className='input-container'>
                                <label>Password</label>
                                <input type='password' style={{ 'cursor': 'not-allowed' }} disabled placeholder='Password' value={password}
                                    onChange={(event) => this.handleOnChangeInput(event, "password")}
                                />
                            </div>
                            <div className='input-container'>
                                <label>First name</label>
                                <input type='text' placeholder='First name' value={firstName}
                                    onChange={(event) => this.handleOnChangeInput(event, "firstName")}
                                />
                            </div>
                            <div className='input-container'>
                                <label>Last name</label>
                                <input type='text' placeholder='Last name' value={lastName}
                                    onChange={(event) => this.handleOnChangeInput(event, "lastName")}
                                />
                            </div>
                            <div className='input-container max-width-input'>
                                <label>Address</label>
                                <input type='text' placeholder='Address' value={address}
                                    onChange={(event) => this.handleOnChangeInput(event, "address")}
                                />
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" className='px-3' onClick={() => { this.handleSaveUser() }}>Save changes</Button>{' '}
                        <Button color="secondary" className='px-3' onClick={() => { this.toggle() }}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
