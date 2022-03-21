import React, { Component } from 'react';
import Header from './../../Layout/Header1';
import Footer from './../../Layout/Footer1';
import PageTitle from './../../Layout/PageTitle';
import HomeTab from './../../Element/HomeTab';
import TabStyle1 from './TabStyle1';

import bnr1 from './../../../images/background/bg1.jpg';
import bnr2 from './../../../images/banner/bnr2.jpg';

class ShortTabs extends Component {
    render() {
        return (
            <>
                <Header />

                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr overlay-primary" style={{ backgroundImage: "url(" + bnr2 + ")" }}>
						<PageTitle motherMenu='Tabs' activeMenu='Tabs' />
                    </div>
                    {/* <!-- inner page banner END --> */}
                    <div className="content-block">
                        {/* <!-- Testimonials --> */}
                        <div className="section-full content-inner">
                            <div className="sort-title-bx" data-name="Element Style 1">Element Style 1 <i className="fa fa-angle-double-right"></i></div>
							<div className="container">	
								<TabStyle1 />
							</div>	
                        </div>
                        {/* <!-- Why Chose Us --> */}
                        <div className="section-full content-inner-2 overlay-primary choseus-tabs  bg-img-fix"  style={{ backgroundImage: "url(" + bnr1 + ")" }}>
                            <div className="sort-title-bx text-white" data-name="Element Style 2">Element Style 2 <i className="fa fa-angle-double-right"></i></div>
                            <div className="container">
                                <div className="section-head text-white text-center">
                                    <h2 className="box-title m-tb0">Why Chose Us<span className="bg-primary"></span></h2>
                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over</p>
                                </div>
                            </div>
                            <HomeTab />
                        </div>
                        {/* <!-- Why Chose Us End --> */}
                    </div>
                    {/* <!-- contact area END --> */}
                </div>

                <Footer />
            </>
        )
    }
}
export default ShortTabs;