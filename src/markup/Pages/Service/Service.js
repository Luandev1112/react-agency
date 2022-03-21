import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './../../Layout/Header1';
import Footer from './../../Layout/Footer1';
import PageTitle from './../../Layout/PageTitle';
import SectionCounter from './../../Element/SectionCounter';
import TestimonialCarousel from './../../Element/TestimonialCarousel';
import FormStyle from './../../Element/FormStyle';

//Images
import bnr5 from './../../../images/banner/bnr5.jpg';
import bgmap from './../../../images/background/bg-map.jpg';
import bg1 from './../../../images/background/bg1.jpg';

const iconBox = [
	{icon: <i className="flaticon-devices" />, title:'Web Design Solutions', },
	{icon: <i className="flaticon-pen" />, title:'Web Development  Solutions ', },
	{icon: <i className="flaticon-bar-chart" />, title:'SEO/SMO Solutions', },
	{icon: <i className="flaticon-file" />, title:'Pre Customized Solutions', },
	{icon: <i className="flaticon-notebook" />, title:'Project Maintenance', },
	{icon: <i className="flaticon-team" />, title:'Social Networking Portal', },
];

class Service extends Component {


    render() {
        return (
            <>
                <Header />

                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr overlay-primary" style={{ backgroundImage: "url(" + bnr5 + ")" }}>
						<PageTitle motherMenu='Our Services'  activeMenu='Our Services' />
                    </div>
                    {/* <!-- inner page banner END --> */}
                    <div className="content-block">
                        {/* <!-- About Us --> */}
                        <div className="section-full content-inner">
                            <div className="container">
                                <div className="section-head text-black text-center">
                                    <h4 className="text-gray-dark m-b10">Our Services</h4>
                                    <h2 className="box-title m-tb0">Web Design & Development Services<span className="bg-primary"></span></h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row ">
									{iconBox.map((data, index)=>(
										<div className="col-md-4 col-sm-6 m-b30 "  key={index}>
											<div className="icon-bx-wraper expertise  bx-style-1 p-a30 center">
												<div className="icon-lg m-b20"> <Link to={"#"} className="icon-cell">{data.icon}</Link> </div>
												<div className="icon-content">
													<h5 className="dlab-tilte text-uppercase"><Link to={"#"}>{data.title}</Link></h5>
													<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..</p>
												</div>
											</div>
										</div>
									))}	
                                </div>
                            </div>
                        </div>
                        {/* <!-- Our Services --> */}
                        {/* <!-- Why Chose Us --> */}
							<SectionCounter />
                        {/* <!-- Why Chose Us End --> */}
                        <div className="section-full content-inner-1">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="section-head text-center">
                                            <h2 className="box-title m-tb0">Our Pricing<span className="bg-primary"></span></h2>
                                            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the </p>
                                        </div>
                                        {/* <!-- Pricing table-1 Columns 3 with gap --> */}
                                        <div className="section-content box-sort-in button-example">
                                            <div className="pricingtable-row">
                                                <div className="row max-w1000 m-auto">
                                                    <div className="col-sm-12 col-md-4 col-lg-4 p-lr0">
                                                        <div className="pricingtable-wrapper style1">
                                                            <div className="pricingtable-inner">
                                                                <div className="pricingtable-price">
                                                                    <div className="pricingtable-icon"><i className="flaticon-rocket-ship"></i></div>
                                                                    <h4 className="font-weight-300 m-t10 m-b0">Starter</h4>
                                                                    <span className="pricingtable-bx text-primary">$25</span> <span className="pricingtable-type">Par Month</span>
                                                                </div>
                                                                <ul className="pricingtable-features">
                                                                    <li><i className="fa fa-check text-primary"></i> Full Responsive </li>
                                                                    <li><i className="fa fa-check text-primary"></i> Multi color theme</li>
                                                                    <li><i className="fa fa-check text-primary"></i> With Bootstrap</li>
                                                                    <li><i className="fa fa-check text-primary"></i> Easy to customize</li>
                                                                    <li><i className="fa fa-check text-primary"></i> Many Sortcodes</li>
                                                                </ul>
                                                                <div className="m-t20">
                                                                    <Link to={"#"} className="site-button outline outline-2 button-md">Sign Up</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12 col-md-4 col-lg-4 p-lr0">
                                                        <div className="pricingtable-wrapper style1 active">
                                                            <div className="pricingtable-inner">
                                                                <div className="pricingtable-price">
                                                                    <div className="pricingtable-icon"><i className="flaticon-users"></i></div>
                                                                    <h4 className="font-weight-300 m-t10 m-b0">Professional</h4>
                                                                    <span className="pricingtable-bx text-primary">$50</span> <span className="pricingtable-type">Par Month</span>
                                                                </div>
                                                                <ul className="pricingtable-features">
                                                                    <li><i className="fa fa-check text-primary"></i> Full Responsive </li>
                                                                    <li><i className="fa fa-check text-primary"></i> Multi color theme</li>
                                                                    <li><i className="fa fa-check text-primary"></i> With Bootstrap</li>
                                                                    <li><i className="fa fa-check text-primary"></i> Easy to customize</li>
                                                                    <li><i className="fa fa-check text-primary"></i> Many Sortcodes</li>
                                                                </ul>
                                                                <div className="m-t20 m-b5">
                                                                    <Link to={"#"} className="site-button button-md">Sign Up</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12 col-md-4 col-lg-4 p-lr0">
                                                        <div className="pricingtable-wrapper style1">
                                                            <div className="pricingtable-inner">
                                                                <div className="pricingtable-price">
                                                                    <div className="pricingtable-icon"><i className="flaticon-bar-chart"></i></div>
                                                                    <h4 className="font-weight-300 m-t10 m-b0">Enterprise</h4>
                                                                    <span className="pricingtable-bx text-primary">$75</span> <span className="pricingtable-type">Par Month</span>
                                                                </div>
                                                                <ul className="pricingtable-features">
                                                                    <li><i className="fa fa-check text-primary"></i> Full Responsive </li>
                                                                    <li><i className="fa fa-check text-primary"></i> Multi color theme</li>
                                                                    <li><i className="fa fa-check text-primary"></i> With Bootstrap</li>
                                                                    <li><i className="fa fa-check text-primary"></i> Easy to customize</li>
                                                                    <li><i className="fa fa-check text-primary"></i> Many Sortcodes</li>
                                                                </ul>
                                                                <div className="m-t20">
                                                                    <Link to={"#"} className="site-button outline outline-2 button-md">Sign Up</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Testimonials --> */}
                        <div className="section-full content-inner "   style={{ backgroundImage: "url(" + bgmap + ")", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
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
                        {/* <!-- Get in touch --> */}
                        <div className="section-full overlay-primary-dark bg-img-fix" style={{ backgroundImage: "url(" + bg1 + ")" }}>
                            <FormStyle />
                        </div>
                        {/* <!-- Get in touch --> */}
                    </div>
                    {/* <!-- contact area END --> */}
                </div>

                <Footer />
            </>
        )
    }
}
export default Service;