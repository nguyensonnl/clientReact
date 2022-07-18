import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormatterdMessage } from 'react-intl';

class About extends Component {
    render() {
        return (
            <div className='section-share section-about'>
                <div className='section-about-header'>
                    Truyền thông nói về BookingCare
                </div>
                <div className='section-about-content'>
                    <div className='content-left'>
                        <iframe width="100%" height="400px"
                            src="https://www.youtube.com/embed/Jc-lGeDuphg"
                            title="Xây dựng kiến trúc chịu tải lớn ở Tiki"
                            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                        </iframe>
                    </div>
                    <div className='content-right'>
                        <p>" Có lẽ cần phải trải qua tuổi thanh xuân mới có thể hiểu được tuổi xuân là khoảng thời gian ta sống ích kỷ biết chừng nào.
                            Có lúc nghĩ, sở dĩ tình yêu cần phải đi một vòng tròn lớn như vậy,
                            phải trả một cái giá quá đắt như thế, là bởi vì nó đến không đúng thời điểm.
                            Khi có được tình yêu, chúng ta thiếu đi trí tuệ. Đợi đến khi có đủ trí tuệ,
                            chúng ta đã không còn sức lực để yêu một tình yêu thuần khiết nữa."</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
