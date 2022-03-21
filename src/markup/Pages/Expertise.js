import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './../Layout/Header1';
import Footer from './../Layout/Footer1';
import PageTitle from './../Layout/PageTitle';
import SectionCounter from './../Element/SectionCounter';
import TestimonialCarousel from './../Element/TestimonialCarousel';
import FormStyle from './../Element/FormStyle';

//Images
import  bnr1 from './../../images/banner/bnr5.jpg';
import  php from './../../images/expertise/php.png';
import  joomla from './../../images/expertise/joomla.png';
import  drupal from './../../images/expertise/drupal.png';
import  laravel from './../../images/expertise/laravel.png';
import  magento from './../../images/expertise/magento.png';
import  wordpress from './../../images/expertise/wordpress.png';
import  oscommerce from './../../images/expertise/oscommerce.png';
import  ecommerce from './../../images/expertise/ecommerce.png';
import  zend from './../../images/expertise/zend-framework.png';
import  ruby from './../../images/expertise/ruby-rails.png';
import  zencart from './../../images/expertise/zencart.png';
import  xcart from './../../images/expertise/xcart.png';
import  python from './../../images/expertise/python-framework.png';
import bg1 from './../../images/background/bg1.jpg';
import bgmap from './../../images/background/bg-map.jpg';

const imageBlog = [
	{image: php, title: 'Php', },
	{image: joomla, title: 'Joomla', },
	{image: drupal, title: 'Drupal', },
	{image: laravel, title: 'Laravel', },
	{image: magento, title: 'Magento 1.x', },
	{image: magento, title: 'Magento 2.x', },
	{image: wordpress, title: 'Wordpress', },
	{image: oscommerce, title: 'Oscommerce', },
	{image: ecommerce, title: 'ecommerce', },
	{image: zend, title: 'Zend Framework', },
	{image: ruby, title: 'Ruby Rails', },
	{image: zencart, title: 'Zencart', },
	{image: xcart, title: 'Xcart', },
	{image: python, title: 'Python Framework', },
];

class Expertise extends Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr overlay-primary" style={{ backgroundImage: "url(" + bnr1 + ")" }}>
                        <PageTitle motherMenu='Expertise' activeMenu='Expertise' />
                    </div>
                    {/* <!-- inner page banner END --> */}
                    <div className="content-block">
                        {/* <!-- About Us --> */}
                        <div className="section-full content-inner">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 col-md-7">
                                        <div className="section-head text-black">
                                            <h4 className="text-gray-dark font-weight-300 m-b10">Expertise</h4>
                                            <h2 className="box-title m-tb0">Completely customizable high-quality robust websites<span className="bg-primary"></span></h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        </div>
                                        <div className="row serv">
											{imageBlog.map((data,index)=>(
												<div className="col-lg-6 col-md-12 col-sm-6 m-b30">
													<div className="icon-bx-wraper expertise  bx-style-1 p-a30 center">
														<div className="icon-lg m-b20"> <Link to={"#"} className="icon-cell"><img src={data.image} alt=""/></Link> </div>
														<div className="icon-content">
															<h5 className="dlab-tilte text-uppercase"><Link to={"#"}>{data.title}</Link></h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..</p>
														</div>
													</div>
												</div>
											))}
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-5 sticky-top">
                                        <form className="inquiry-form inner dzForm" action="script/contact.php">
                                            <div className="dzFormMsg"></div>
                                            <h3 className="box-title m-t0 m-b10">Let's Convert Your Idea into Reality <span className="bg-primary"></span></h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <span className="input-group-addon"><i className="ti-user text-primary"></i></span>
                                                            <input name="dzName" type="text" required className="form-control" placeholder="First Name" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <span className="input-group-addon"><i className="ti-mobile text-primary"></i></span>
                                                            <input name="dzOther[Phone]" type="text" required className="form-control" placeholder="Phone" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <span className="input-group-addon"><i className="ti-email text-primary"></i></span>
                                                            <input name="dzEmail" type="email" className="form-control" required placeholder="Your Email Id" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <span className="input-group-addon"><i className="ti-check-box text-primary"></i></span>
                                                            <input name="dzOther[Subject]" type="text" required className="form-control" placeholder="Upload File" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <span className="input-group-addon"><i className="ti-file text-primary"></i></span>
                                                            <input name="dzOther[Subject]" type="text" required className="form-control" placeholder="Upload File" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <span className="input-group-addon"><i className="ti-agenda text-primary"></i></span>
                                                            <textarea name="dzMessage" rows="4" className="form-control" required placeholder="Tell us about your project or idea"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <div className="g-recaptcha" data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
                                                            <input className="form-control d-none" data-recaptcha="true" required data-error="Please complete the Captcha" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <button name="submit" type="submit" value="Submit" className="site-button button-lg"> <span>Get A Free Quote!</span> </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Our Services --> */}
                        {/* <!-- Why Chose Us --> */}
							<SectionCounter />
                        {/* <!-- Why Chose Us End --> */}
                        {/* <!-- Testimonials --> */}
                        <div className="section-full content-inner" style={{ backgroundImage: "url(" + bgmap + ")",  backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                            <div className="container">
                                <div className="section-head text-center">
                                    <h2 className="box-title m-tb0">Our Testimonials<span className="bg-primary"></span></h2>
                                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the </p>
                                </div>
                                <div className="section-content m-b30 	">
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
export default Expertise;