import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './../../Layout/Header1';
import Footer from './../../Layout/Footer1';
import PageTitle from './../../Layout/PageTitle';
import SectionCounter from './../../Element/SectionCounter';
import TestimonialCarousel from './../../Element/TestimonialCarousel';
import FormStyle from './../../Element/FormStyle';

//Images
import bnr1 from './../../../images/banner/bnr4.jpg';
import bgmap from './../../../images/background/bg-map.jpg';
import bg1 from './../../../images/background/bg1.jpg';
import about from './../../../images/about/pic3.jpg';

const iconWraper=[
	{icon: <i className="flaticon-devices" />, title:'Custom Applications'},
	{icon: <i className="flaticon-pen" />, title:'Dynamic Website'},
	{icon: <i className="flaticon-layers" />, title:'CMS Development'},
	{icon: <i className="flaticon-shop" />, title:'PHP based E-commerce'},
	{icon: <i className="flaticon-technology" />, title:'CMS Development'},
	{icon: <i className="flaticon-internet" />, title:'Cloud (SaaS, PaaS)'},
];

const titleBlog=[
	{title1:'PHP Web', title2: 'Portals'}, 
	{title1:'PHP Mobile', title2: 'Web Services'}, 
	{title1:'PHP Backend', title2: 'Solutions'}, 
	{title1:'Social Networking', title2: 'Development'}, 
	{title1:'PHP eCommerce', title2: 'Solution'}, 
	{title1:'PHP', title2: 'Frameworks'}, 
];

class ServicesDetails extends Component {


    render() {
        return (
            <>
                <Header />

                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr overlay-primary" style={{ backgroundImage: "url(" + bnr1 + ")" }}>
                        <PageTitle motherMenu='Services Details' activeMenu='Services Details' />
                    </div>
                    {/* <!-- inner page banner END --> */}
                    <div className="content-block">
                        {/* <!-- About Us --> */}
                        <div className="section-full content-inner exp-services">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="section-head text-black text-center">
                                            <h4 className="text-gray-dark font-weight-500 m-b10">PHP Technologies</h4>
                                            <h2 className="box-title m-tb0">Scalable, interactive & custom PHP solutions on your way<span className="bg-primary"></span></h2>
                                            <p className="font-weight-300 font-18">Within a span of <strong className="text-primary">15</strong> years Team In India has emerged as one of the leading companies teaming the expert and experienced PHP developers. With the undaunted skills and the unmatched assistance our team of <strong className="text-yellow">300+</strong> strong and dedicated PHP developers have developed <strong className="text-red">2500+</strong> portals and websites for <strong className="text-pink">2000+</strong> clients. We support clients from all over the world including USA, UK, Australia, France, and New Zealand.</p>
                                        </div>
                                        <div className="row serv">
											{iconWraper.map((data,index)=>(	
												<div className="col-lg-2 col-md-4 col-sm-6 m-b30" key={index}>
													<div className="icon-bx-wraper expertise  bx-style-1 p-lr10 p-tb20 center">
														<div className="icon-bx-sm bg-primary radius m-b20">
															<Link to={"#"} className="icon-cell">{data.icon}</Link>
														</div>
														<div className="icon-content">
															<h5 className="dlab-tilte"><Link to={"#"}>{data.title}</Link></h5>
														</div>
													</div>
												</div>
											))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Our Services --> */}
                        {/* <!-- About Us --> */}
                        <div className="section-full">
                            <div className="container-fluid">
                                <div className="row dzseth">
                                    <div className="col-lg-6 col-md-12 p-a0 img-fix">
                                        <img src={about} alt="" className="img-cover" />
                                    </div>
                                    <div className="col-lg-6 col-md-12 bg-black-light p-lr0 dis-tbl">
                                        <div className="p-a30 dis-tbl-cell ">
                                            <div className="max-w500 m-auto p-tb30">
                                                <div className="row">
                                                    <div className="col-lg-12 text-white">
                                                        <h3 className="box-title m-b10">How We Work<span className="bg-primary"></span></h3>
                                                        <h5 className="m-b30">Since our foundation in 2005 our goal has been to use digital technology to create experiences.</h5>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12 m-b30 chosesus-content">
                                                        <ul className="list-checked primary text-white">
                                                            <li><span>Contrary to popular belief, Lorem Ipsum is not simply</span></li>
                                                            <li><span>Random text. It has roots in a piece of classical Latin literature</span></li>
                                                            <li><span>Latin professor at Hampden-Sydney College in Virginia</span></li>
                                                        </ul>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                                                        <Link to={"#"} className="site-button radius-xl outline white">Read More <i className="fa fa-long-arrow-right"></i></Link>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- About Us End --> */}
                        {/* <!-- About Us --> */}
                        <div className="section-full content-inner">
                            <div className="container">
                                <div className="section-head text-black text-center">
                                    <h4 className="text-gray-dark m-b10">Services</h4>
                                    <h2 className="box-title m-tb0">PHP Development Services<span className="bg-primary"></span></h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row ">
									{titleBlog.map((data,index)=>(
										<div className="col-lg-4 col-md-6 col-sm-6 m-b30" key={index}>
											<div className="icon-bx-wraper expertise  bx-style-1 p-a30 center">
												<div className="icon-content">
													<h4 className="dlab-tilte text-uppercase"><Link to={"#"}>{data.title1}	<br/>{data.title2}</Link></h4>
													<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
													<Link to={"#"} className="site-button radius-xl outline outline-2">Read Move</Link>
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
                        {/* <!-- Testimonials --> */}
                        <div className="section-full content-inner"   style={{ backgroundImage: "url(" + bgmap + ")", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
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
export default ServicesDetails;