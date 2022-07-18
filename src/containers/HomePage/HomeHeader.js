import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../utils/constant';
import { changeLanguageApp } from '../../store/actions';

class HomeHeader extends Component {
    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language);
        //fire redux event: actions
    }
    render() {
        // console.log('check props:', this.props)
        let language = this.props.language;
        //console.log(language)
        return (
            <React.Fragment>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            <i className="fas fa-bars"></i>
                            <div className='header-logo'></div>
                        </div>
                        <div className='center-content'>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="homeheader.speciality" /></b></div>
                                <div className='subs-title'><FormattedMessage id="homeheader.searchdoctor" /></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="homeheader.health-facility" /></b></div>
                                <div className='subs-title'><FormattedMessage id="homeheader.select-room" /></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="homeheader.doctor" /></b></div>
                                <div className='subs-title'><FormattedMessage id="homeheader.select-doctor" /></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="homeheader.fee" /></b></div>
                                <div className='subs-title'><FormattedMessage id="homeheader.check-health" /></div>
                            </div>
                        </div>
                        <div className='right-content'>
                            <div className='support'>
                                <i className='fas fa-question-circle'></i>
                                <FormattedMessage id="homeheader.support" />
                            </div>
                            <div className={language === LANGUAGES.VI ? 'language-vi active' : 'language-vi'}><span onClick={() => this.changeLanguage(LANGUAGES.VI)}>VN</span></div>
                            <div className={language === LANGUAGES.EN ? 'language-en active' : 'language-en'}><span onClick={() => this.changeLanguage(LANGUAGES.EN)}>EN</span></div>
                        </div>
                    </div>
                </div>
                <div className='home-header-banner'>
                    <div className='content-up'>
                        <div className='title1'><FormattedMessage id="banner.title1" /></div>
                        <div className='title2'><FormattedMessage id="banner.title2" /></div>
                        <div className='search'>
                            <i className='fas fa-search'></i>
                            <input type='text' placeholder='Tìm kiếm...' />
                        </div>
                    </div>
                    <div className='content-down'>
                        <div className='options'>
                            <div className='option-child'>
                                <div className='icon1'></div>
                                <div className='text-child'>
                                    <FormattedMessage id="banner.child1" />
                                </div>
                            </div>
                            <div className='option-child'>
                                <div className='icon1'></div>
                                <div className='text-child'>
                                    <FormattedMessage id="banner.child2" />
                                </div>
                            </div>
                            <div className='option-child'>
                                <div className='icon1'></div>
                                <div className='text-child'>
                                    <FormattedMessage id="banner.child3" />
                                </div>
                            </div>
                            <div className='option-child'>
                                <div className='icon1'></div>
                                <div className='text-child'>
                                    <FormattedMessage id="banner.child4" />
                                </div>
                            </div>
                            <div className='option-child'>
                                <div className='icon1'></div>
                                <div className='text-child'>
                                    <FormattedMessage id="banner.child5" />
                                </div>
                            </div>
                            <div className='option-child'>
                                <div className='icon1'></div>
                                <div className='text-child'>
                                    <FormattedMessage id="banner.child6" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )

    }

}

//map cái state của redux vào biến props của function này
const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language
        //inject
    };
};

//Truy cập được cái hàm trong redux thông qua dispatch
const mapDispatchToProps = dispatch => {
    return {
        //Fire action từ redux
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
