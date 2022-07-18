import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import MedicalFacilty from './Section/MedicalFacilty';
import Specialty from './Section/Specialty';
import OutstandingDoctor from './Section/OutstandingDoctor';
import Handbook from './Section/Handbook';
import './HomePage.scss';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About from './Section/About';
import HomeFooter from './HomeFooter';


class HomePage extends Component {
    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 2,
        };
        return (
            <div>
                <HomeHeader />
                <Specialty settings={settings} />
                <MedicalFacilty settings={settings} />
                <OutstandingDoctor settings={settings} />
                <Handbook settings={settings} />
                <About />
                <HomeFooter />
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
