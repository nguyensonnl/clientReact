import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormatterdMessage } from 'react-intl';
import Slider from 'react-slick';

class Handbook extends Component {
    render() {
        let settings = this.props.settings;
        settings.slidesToShow = 2;
        settings.slidesToScroll = 2;
        return (
            <div className='section-share'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Cẩm năng</span>
                        <button className='btn-section'>Tất cả bài viết</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...settings}>
                            <div className='section-customize'>
                                <div className='bg-image section-handbook'></div>
                                <span>Bệnh viện hữu nghị Việt Đức1</span>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-handbook'></div>
                                <div>Bệnh viện hữu nghị Việt Đức2</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-handbook'></div>
                                <div>Bệnh viện hữu nghị Việt Đức3</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-handbook'></div>
                                <div>Bệnh viện hữu nghị Việt Đức4</div>
                            </div>
                        </Slider>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Handbook);
