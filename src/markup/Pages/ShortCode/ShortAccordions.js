import React, { Component } from 'react';
import Header from './../../Layout/Header1';
import Footer from './../../Layout/Footer1';
import PageTitle from './../../Layout/PageTitle';
import AccordionBlog from './../../Element/AccordionBlog';
import VideoPopup from './../../Element/VideoPopup';

import bnr2 from './../../../images/banner/bnr2.jpg';
import pic10 from './../../../images/about/pic10.jpg';

class ShortAccordions extends Component {

    render() {
        return (
            <>
                <Header />

                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr overlay-primary" style={{ backgroundImage: "url(" + bnr2 + ")" }}>
						<PageTitle motherMenu = 'Accordions' activeMenu= 'Accordions' />
                    </div>
                    {/* <!-- inner page banner END --> */}
                    <div className="content-block">
                        <div className="section-full overlay-white-middle content-inner">
                            <div className="sort-title-bx text-left" data-name="Element Style 1">Element Style 1 <i className="fa fa-angle-double-right"></i></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 m-b30">
                                        <div className="faq-video">
											<VideoPopup />
											{ /* <a className="play-btn popup-youtube" href="https://www.youtube.com/embed/6lt2JfJdGSY">
                                                <i className="flaticon-play-button text-white"></i></a> */}
                                            <img src={pic10} alt="" className="img-cover radius-sm" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <AccordionBlog /> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- contact area END --> */}
                </div>

                <Footer />
            </>
        )
    }
}
export default ShortAccordions;