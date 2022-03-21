import React, { Component } from 'react';
import Header from './../../Layout/Header1';
import Footer from './../../Layout/Footer1';
import PageTitle from './../../Layout/PageTitle';
import PortfolioCarousel from './../../Element/PortfolioCarousel';
import ProtfolioStyle3 from './ProtfolioStyle3';
import {GalleryGrid} from './../Protfolio/PortfolioGrid4';

import bnr1 from './../../../images/banner/bnr2.jpg';

class ShortPortfolio extends Component {


    render() {
        return (
            <>
                <Header />

                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr overlay-primary"  style={{ backgroundImage: "url(" + bnr1 + ")" }}>
						<PageTitle motherMenu='Our Portfolio'  activeMenu='Our Portfolio' />
                    </div>
                    {/* <!-- inner page banner END --> */}
                    <div className="content-block">
						{/* <!-- Our Portfolio --> */}
                        <div className="section-full content-inner-2 mfp-gallery" >
                            <div className="container-fluid">
								<div className="sort-title-bx" data-name="Element Style 1">Element Style 1 <i className="fa fa-angle-double-right"></i></div>
                                <div className="section-head text-center">
                                    <h4 className="text-gray-dark m-b10">Our Portfolio</h4>
                                    <h2 className="box-title m-tb0">We work to innovate & are proud<br /> of what we've created<span className="bg-primary"></span></h2>
                                    <h5>YOU’LL LOVE TO SEE SOME OF OUR BEST PROJECTS. TAKE A LOOK!</h5>
                                </div>
                                    <PortfolioCarousel />
                            </div>
                        </div>
                        {/* <!-- Our Portfolio END --> */}
                        {/* <!-- Portfolio  --> */}
                        <div className="section-full content-inner-2 portfolio text-uppercase bg-gray" id="portfolio">
                            <div className="container">
                                <div className="sort-title-bx" data-name="Element Style 2">Element Style 2 <i className="fa fa-angle-double-right"></i></div>
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="sticky-top">
                                            <h3>Our Mission</h3>
                                            <ul className="list-check primary">
                                                <li>Amet Sollicitudin Quam Dolor Mollis</li>
                                                <li>Diipiscing Vestibulum Nullam Venenatis</li>
                                                <li>Diipiscing Vestibulum</li>
                                                <li>Vehicula Vulputate Ligula Mollis</li>
                                            </ul>
                                            <h3>Core Values</h3>
                                            <ul className="list-check primary">
                                                <li>Amet Sollicitudin Quam Dolor Mollis</li>
                                                <li>Diipiscing Vestibulum Nullam</li>
                                                <li>Diipiscing Vestibulum Nullam Venenatis</li>
                                                <li>Vehicula Vulputate</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-9 ">
                                        <GalleryGrid />
                                    </div>
                                </div>
                            </div>
                        </div>
						<ProtfolioStyle3 />
                        
                    </div>
                    {/* <!-- contact area END --> */}
                </div>

                <Footer />
            </>
        )
    }
}
export default ShortPortfolio;