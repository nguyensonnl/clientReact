import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormatterdMessage } from 'react-intl';
import Slider from 'react-slick';

class OutstandingDoctor extends Component {
    render() {
        return (
            <div className='section-share section-outstanding-doctor'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Bác sĩ nổi bật tuần qua</span>
                        <button className='btn-section'>Tìm kiếm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <div className='section-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-image section-outstanding-doctor'></div>
                                    </div>
                                    <div className='position text-center'>
                                        <div>Bác sĩ Chuyên khoa II Trần Minh Khuyên</div>
                                        <div>Cơ xương khớp 3</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='section-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-image section-outstanding-doctor'></div>
                                    </div>
                                    <div className='position text-center'>
                                        <div>Bác sĩ Chuyên khoa II Trần Minh Khuyên</div>
                                        <div>Cơ xương khớp 3</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='section-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-image section-outstanding-doctor'></div>
                                    </div>
                                    <div className='position text-center'>
                                        <div>Bác sĩ Chuyên khoa II Trần Minh Khuyên</div>
                                        <div>Cơ xương khớp 3</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='section-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-image section-outstanding-doctor'></div>
                                    </div>
                                    <div className='position text-center'>
                                        <div>Bác sĩ Chuyên khoa II Trần Minh Khuyên</div>
                                        <div>Cơ xương khớp 3</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='section-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-image section-outstanding-doctor'></div>
                                    </div>
                                    <div className='position text-center'>
                                        <div>Bác sĩ Chuyên khoa II Trần Minh Khuyên</div>
                                        <div>Cơ xương khớp 3</div>
                                    </div>
                                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(OutstandingDoctor);
