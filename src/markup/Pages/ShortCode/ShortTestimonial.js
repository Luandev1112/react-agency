import React, { Component } from 'react';
import Header from './../../Layout/Header1';
import Footer from './../../Layout/Footer1';
import PageTitle from './../../Layout/PageTitle';
import TestimonialCarousel from './../../Element/TestimonialCarousel';
import TestimonialStyle2 from './TestimonialStyle2';


import bnr2 from './../../../images/banner/bnr2.jpg';
import bgmap from './../../../images/background/bg-map.jpg';
import bg1 from './../../../images/background/bg2.jpg';


class ShortTestimonial extends Component {


    render() {
        return (
            <>
                <Header />

                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr overlay-primary" style={{ backgroundImage: "url(" + bnr2 + ")" }}>
						<PageTitle motherMenu='Testimonial' activeMenu='Testimonial' />
                    </div>
                    {/* <!-- inner page banner END --> */}
                    <div className="content-block">
                        {/* <!-- Testimonials --> */}
                        <div className="section-full content-inner" style={{ backgroundImage: "url(" + bgmap + ")",backgroundPosition:'center', backgroundRepeat:'no-repeat' }}>
                            <div className="sort-title-bx" data-name="Element Style 1">Element Style 1 <i className="fa fa-angle-double-right"></i></div>
                            <div className="container">
                                <div className="section-head text-center">
                                    <h2 className="box-title m-tb0">Our Testimonials<span className="bg-primary"></span></h2>
                                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the </p>
                                </div>
                                <div className="section-content m-b30 ">
                                    <TestimonialCarousel />
                                </div>
                            </div>
                        </div>
                        {/* <!-- Testimonials END --> */}
                        {/* <!-- Clients Words --> */}
                        <div className="section-full overlay-primary-middle content-inner bg-img-fix" style={{ backgroundImage: "url(" + bg1 + ")" }}>
                            <div className="sort-title-bx text-white" data-name="Element Style 2">Element Style 2 <i className="fa fa-angle-double-right"></i></div>
                            <div className="container">
                                <div className="max-w600 m-auto text-center m-b30 text-white">
                                    <h6 className="m-t0">What people say</h6>
                                    <h2 className="m-t0">Clients Words</h2>
                                </div>
                                <div className="section-content m-b30">
                                    <TestimonialStyle2 />
                                </div>
                            </div>
                        </div>
                        {/* <!-- Clients Words END --> */}
                    </div>
                    {/* <!-- contact area END --> */}
                </div>

                <Footer />
            </>
        )
    }
}
export default ShortTestimonial;