import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { isBreakStatement } from 'typescript';
import { emitter } from '../../utils/emitter'

class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: ''
        }
        this.listenToEmitter();
    }

    listenToEmitter() {
        emitter.on('EVENT_CLEAR_MODAL_DATA', () => {
            this.setState({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                address: ''
            })
        })
    }

    componentDidMount() {
    }
    toggle = () => {
        this.props.toggleFromParent();
    }

    handleOnChangeInput = (event, id) => {
        /**
         * this.state = {
         * email : '',
         * password: ''
         * }
         * this.state.email === this.state.['email']
         */
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
    handleAddNewUser = () => {
        let isValid = this.checkValidateInput();
        if (isValid === true) {
            //Call api
            this.props.createNewUser(this.state);
            // this.setState({
            //     email: '',
            //     password: '',
            //     firstName: '',
            //     lastName: '',
            //     address: ''
            // })
        }


    }
    render() {
        // console.log('Check child props:', this.props)
        // console.log('Check child isOpenModal', this.props.isOpen)
        return (
            <div>
                {/* isOpen = true */}
                <Modal
                    isOpen={this.props.isOpen}
                    toggle={() => { this.toggle() }}
                    className={'modal-user-container'}
                    size="lg"
                >
                    <ModalHeader toggle={() => { this.toggle() }}>Create a new user</ModalHeader>
                    <ModalBody>
                        <div className='modal-user-body'>
                            <div className='input-container'>
                                <label>Email</label>
                                <input type='text' placeholder='Email' value={this.state.email}
                                    onChange={(event) => this.handleOnChangeInput(event, "email")}
                                />
                            </div>
                            <div className='input-container'>
                                <label>Password</label>
                                <input type='password' placeholder='Password' value={this.state.password}
                                    onChange={(event) => this.handleOnChangeInput(event, "password")}
                                />
                            </div>
                            <div className='input-container'>
                                <label>First name</label>
                                <input type='text' placeholder='First name' value={this.state.firstName}
                                    onChange={(event) => this.handleOnChangeInput(event, "firstName")}
                                />
                            </div>
                            <div className='input-container'>
                                <label>Last name</label>
                                <input type='text' placeholder='Last name' value={this.state.lastName}
                                    onChange={(event) => this.handleOnChangeInput(event, "lastName")}
                                />
                            </div>
                            <div className='input-container max-width-input'>
                                <label>Address</label>
                                <input type='text' placeholder='Address' value={this.state.address}
                                    onChange={(event) => this.handleOnChangeInput(event, "address")}
                                />
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" className='px-3' onClick={() => { this.handleAddNewUser() }}>Add new</Button>{' '}
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
