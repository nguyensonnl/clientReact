import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormatterdMessage } from 'react-intl';
import './HomeFooter.scss';

class HomeFooter extends Component {
    render() {
        return (
            <div className='home-footer'>
                <p>&copy; 2022 Sonnl. More information, please visit my fanpage
                    <a href='#' target="_blank"> Click here</a>
                </p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
