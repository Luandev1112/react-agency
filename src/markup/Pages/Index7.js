import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header1 from './../Layout/Header1';
import Footer6 from './../Layout/footer6';
import Index7Slider from './../Element/Index7Slider';
import Index7ClientCarousel from './../Element/Index7ClientCarousel';

import icon4 from './../../images/icon/icon4.png';
import icon5 from './../../images/icon/icon5.png';
import icon6 from './../../images/icon/icon6.png';

import test1 from './../../images/testimonials/pic1.jpg';
import test2 from './../../images/testimonials/pic2.jpg';
import test3 from './../../images/testimonials/pic3.jpg';

import thum5 from './../../images/blog/default/thum5.jpg';
import recent5 from './../../images/blog/recent-blog/pic5.jpg';
import recent6 from './../../images/blog/recent-blog/pic6.jpg';
import recent7 from './../../images/blog/recent-blog/pic7.jpg';
import recent8 from './../../images/blog/recent-blog/pic8.jpg';

import bg22 from './../../images/background/bg22.png';
import bg23 from './../../images/background/bg23.png';


const wrpaerBlog = [
	{image: icon4, title:'Experience',},
	{image: icon5, title:'Future',},
	{image: icon6, title:'Passion',},
];

const expertBox = [
	{image: test1}, {image: test2}, {image: test3},
	{image: test2}, {image: test3}, {image: test1},
];

const hoverBlog = [
	{title: 'Shop', icon: <i className="flaticon-shop" />,},
	{title: 'Star', icon: <i className="flaticon-star" />,},
	{title: 'Play', icon: <i className="flaticon-play-button" />,},
	{title: 'Heart', icon: <i className="flaticon-like" />,},
];

class Index7 extends Component {
    componentDidMount() {
		var i = 0;
		
		// Placeholder Animation Start
		var inputSelector = document.querySelectorAll('input, textarea');
		
		for (i = 0; i < inputSelector.length; i++) {
			inputSelector[i].addEventListener('focus', function(event) {
				return this.parentElement.parentElement.classList.add("focused");
			});
		}
		
		
		for (i = 0; i < inputSelector.length; i++) {
			inputSelector[i].addEventListener('blur', function(event) {
				var inputValue = this.value;	
				if ( inputValue === '' ) {
					this.parentElement.parentElement.classList.remove('filled');
					this.parentElement.parentElement.classList.remove('focused');  
				} else {
					this.parentElement.parentElement.classList.add('filled');
				}
			});
		}	
    }
    render() {
        return (
            <>
                <Header1 />

                <div className="page-content">
					<div className="owl-slider-banner main-slider dz-style-1">
						<Index7Slider />
					</div>
					
                    {/* <!-- About Us --> */}
                    <div className="section-full bg-white p-b30">
                        <div className="container">
                            <div className="row about-1">
                                <div className="icon-bx-wraper col-md-4 bg-white col-lg-4 p-tb30 p-l30 p-r50">
                                    <div className="icon-md m-b20">
                                        <span className="icon-cell">
                                            <img src="images/icon/icon3.png" alt="" />
                                        </span>
                                    </div>
                                    <div className="icon-content">
                                        <h3 className="dez-tilte"><span className="font-weight-300">Design & </span> Build Project</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod...</p>
                                    </div>
                                </div>
                                <div className="icon-bx-wraper bg-primary p-lr30 about-scale text-white col-md-4 col-lg-4 p-tb30">
                                    <div className="icon-md m-b20">
                                        <span className="icon-cell">
                                            <img src="images/icon/icon1.png" alt="" />
                                        </span>
                                    </div>
                                    <div className="icon-content">
                                        <h3 className="dez-tilte"><span className="font-weight-300">Building & </span>Renovation</h3>
                                        <ul className="list-arrow-right m-b0">
                                            <li><i className="fa fa-arrow-right"></i>Prouct Developoment</li>
                                            <li><i className="fa fa-arrow-right"></i>Resources Hiring</li>
                                            <li><i className="fa fa-arrow-right"></i>Business Development</li>
                                            <li><i className="fa fa-arrow-right"></i>Product Analysis</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="icon-bx-wraper p-l50 p-r30 col-md-4 bg-white col-lg-4 p-tb30">
                                    <div className="icon-md m-b20">
                                        <span className="icon-cell">
                                            <img src="images/icon/icon2.png" alt="" />
                                        </span>
                                    </div>
                                    <div className="icon-content">
                                        <h3 className="dez-tilte"><span className="font-weight-300">Handling & </span>Management</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- About Us END --> */}
                    {/* <!-- Our Services --> */}
                    <div className="section-full content-inner-2 bg-white">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 section-head text-center">
                                    <h5 className="title-small">Benefits</h5>
                                    <h2 className="title-head m-b0">Your Objective Choices</h2>
                                </div>
                            </div>
                            <div className="row">
								{wrpaerBlog.map((data,index)=>(
									<div className="col-lg-4 col-md-4 col-sm-6 m-b30" key={index}>
										<div className="icon-bx-wraper our-service center">
											<div className="icon-lg text-primary m-b20">
												<Link to={"#"} className="icon-cell"><img src={data.image} alt="" /></Link>
											</div>
											<div className="icon-content p-lr50">
												<h5 className="dez-tilte text-uppercase">{data.title}</h5>
												<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
											</div>
										</div>
									</div>
								))}
                                <div className="col-lg-12 m-t20 text-center">
                                    <Link to={"#"} className="site-button long-btn radius-xl shadow">ORDER NOW</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Our Services END --> */}
                    {/* <!-- Experts --> */}
                    <div className="section-full content-inner-2 our-team-bx bg-primary">
                        <div className="container">
                            <div className="row">
                                <div className="section-head text-white col-lg-12 text-center">
                                    <h5 className="title-small">Our Team</h5>
                                    <h2 className="title-head m-b0">top experts mates</h2>
                                </div>
                            </div>
                            <div className="row">
								{expertBox.map((data,index)=>(
									<div className="col-lg-4 col-md-6 col-sm-6" key={index}>
										<div className="experts-box text-white p-a20" > 
											<div className="clearfix experts-info-bx">
												<div className="experts-img">
													<img src={data.image} alt="" />
												</div>
												<div className="experts-info">
													<h5 className="experts-name">Johny Cornor</h5>
													<h6 className="experts-service">Content expert</h6>
												</div>
											</div>
											<p className="m-b10">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
											<ul className="dez-social-icon">
												<li><Link to={"#"} className="fa text-white fa-facebook"></Link></li>
												<li><Link to={"#"} className="fa text-white fa-google-plus"></Link></li>
												<li><Link to={"#"} className="fa text-white fa-linkedin"></Link></li>
												<li><Link to={"#"} className="fa text-white fa-twitter"></Link></li>
											</ul>
										</div>
									</div>
								))}
                            </div>
                        </div>
                    </div>
                    {/* <!-- Experts END -->	 */}
                    {/* <!-- Pricing Table --> */}
                    <div className="section-full content-inner-2 bg-white">
                        <div className="container">
                            <div className="row">
                                <div className="section-head col-lg-12 text-center">
                                    <h5 className="title-head">Pricing Tables</h5>
                                </div>
                            </div>
                            <div className="row p-lr15">
                                <div className="col-lg-4 col-md-4 p-a0">
                                    <div className="pricingtable-wrapper style3">
                                        <div className="pricingtable-inner">
                                            <div className="pricingtable-head bg-gray">
                                                <div className="pricingtable-title">
                                                    <h2>Basic</h2>
                                                    <p>Lorem ipsum dolor sit.</p>
                                                </div>
                                                <div className="pricingtable-price text-primary">
                                                    <span className="pricingtable-bx"><span>$</span>06</span>
                                                    <span className="pricingtable-type text-gray-dark">Per Month</span>
                                                </div>
                                                <p className="pricingtable-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut feugiat lacus. Duis condimentum nulla.</p>
                                            </div>
                                            <ul className="pricingtable-features">
                                                <li>Users<span>100</span></li>
                                                <li>Capacity<span>500 Gb</span></li>
                                                <li>Backup<span>Not Availible</span></li>
                                                <li>Support<span>Not Availible</span></li>
                                            </ul>
                                            <div className="pricingtable-footer">
                                                <Link to={"#"} className="site-button radius-xl button-md outline outline-1 btn-block">Sign Up</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 p-a0">
                                    <div className="pricingtable-wrapper style3">
                                        <div className="pricingtable-inner">
                                            <div className="pricingtable-head bg-primary text-white">
                                                <div className="pricingtable-title">
                                                    <h2>Advanced</h2>
                                                    <p>Lorem ipsum dolor sit.</p>
                                                </div>
                                                <div className="pricingtable-price">
                                                    <span className="pricingtable-bx"><span>$</span>11</span>
                                                    <span className="pricingtable-type">Per Month</span>
                                                </div>
                                                <p className="pricingtable-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut feugiat lacus. Duis condimentum nulla.</p>
                                            </div>
                                            <ul className="pricingtable-features">
                                                <li>Users<span>100</span></li>
                                                <li>Capacity<span>500 Gb</span></li>
                                                <li>Backup<span>Not Availible</span></li>
                                                <li>Support<span>Not Availible</span></li>
                                            </ul>
                                            <div className="pricingtable-footer">
                                                <Link to={"#"} className="site-button radius-xl button-md btn-block">Sign Up</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 p-a0">
                                    <div className="pricingtable-wrapper style3" >
                                        <div className="pricingtable-inner">
                                            <div className="pricingtable-head bg-gray">
                                                <div className="pricingtable-title">
                                                    <h2>Professional</h2>
                                                    <p>Lorem ipsum dolor sit.</p>
                                                </div>
                                                <div className="pricingtable-price text-primary">
                                                    <span className="pricingtable-bx"><span>$</span>19</span>
                                                    <span className="pricingtable-type text-gray-dark">Per Month</span>
                                                </div>
                                                <p className="pricingtable-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut feugiat lacus. Duis condimentum nulla.</p>
                                            </div>
                                            <ul className="pricingtable-features">
                                                <li>Users<span>100</span></li>
                                                <li>Capacity<span>500 Gb</span></li>
                                                <li>Backup<span>Not Availible</span></li>
                                                <li>Support<span>Not Availible</span></li>
                                            </ul>
                                            <div className="pricingtable-footer">
                                                <Link to={"#"} className="site-button radius-xl button-md outline outline-1 btn-block">Sign Up</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Pricing Table END --> */}
                    {/* <!-- Ticket KIt Section --> */}
                    <div className="section-full content-inner bg-primary" style={{ backgroundImage: "url(" + bg22 + ")", backgroundPosition: "center" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-5 m-b30">
                                    <div className="tickit-box bg-white text-center">
                                        <span className="title">Complete Kit</span>
                                        <h2 className="price text-primary"><span>$</span>58</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                                        <Link to={"#"} className="site-button btn-block radius-xl">Get started</Link>
                                    </div>
                                </div>
                                <div className="col-lg-7 offset-lg-1 col-md-7 text-white m-b30">
                                    <div className="tickit-info">
                                        <h2 className="font-50">Lorem Ipsum Dolor<br /> Sit Amet</h2>
                                        <p>“Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”</p>
                                        <div className="thumb-img m-b20"><img src={test2} alt="" /></div>
                                        <span>-Name Here, Position at Company</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Ticket KIt Section End --> */}
                    {/* <!-- Our Services --> */}
                    <div className="section-full content-inner bg-white">
                        <div className="container">
                            <div className="section-head text-black text-center">
                                <h2 className="title-head m-b0">Our Stories</h2>
                            </div>
                            <div className="row">
								{hoverBlog.map((data,index)=>(
									<div className="col-lg-3 col-md-6 col-sm-6">
										<div className="text-center  icon-hover-bx">
											<div className="icon-bx-xl text-primary bg-white radius border-2">
												<Link to={"#"} className="icon-cell icon-md">{data.icon}</Link>
											</div>
											<div className="icon-content m-t30">
												<h5 className="dez-tilte text-uppercase">{data.title}</h5>
												<p>Lorem ipsum dolor sit amet, consectetuer adipiscing  sed diam nibh euismod.</p>
											</div>
										</div>
									</div>
								))}
                            </div>
                        </div>
                    </div>
                    {/* <!-- Contact Form --> */}
                    <div className="section-full content-inner bg-primary contact-2" style={{ backgroundImage: "url(" + bg23 + ")" }}>
                        <div className="container">
                            <div className="row d-flex align-items-center">
                                <div className="col-lg-7">
                                    <div className="" >
                                        <div className="support-form support-box-form bg-white">
                                            <div className="support-title m-b30">
                                                <h6 className="text-uppercase font-weight-500 m-b10">Support</h6>
                                                <h2 className="font-40 font-weight-400 m-tb0">Need Help?</h2>
                                            </div>
                                            <div className="dezPlaceAni">
                                                <div className="dzFormMsg"></div>
                                                <form method="post" className="" action="">
                                                    <input type="hidden" value="Contact" name="dzToDo" />
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                                            <div className="form-group">
                                                                <div className="input-group">
                                                                    <label>Your Name</label>
                                                                    <input name="dzName" type="text" required="" className="form-control" placeholder="" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                                            <div className="form-group">
                                                                <div className="input-group">
                                                                    <label>Phone</label>
                                                                    <input name="dzOther[Phone]" type="text" required="" className="form-control" placeholder="" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                            <div className="form-group">
                                                                <div className="input-group">
                                                                    <label>Your Email Address</label>
                                                                    <input name="dzEmail" type="email" className="form-control" required="" placeholder="" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                            <div className="form-group">
                                                                <div className="input-group">
                                                                    <label>Your Message...</label>
                                                                    <textarea name="dzMessage" rows="4" className="form-control" required="" placeholder=""></textarea>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                                            <button name="submit" type="submit" value="Submit" className="site-button radius-xl button-md m-t10">Submit Now</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="contact-info-bx p-a30 text-white" >
                                        <div className="m-b10">
                                            <span>Address</span>
                                            <h3>123 Street Name<br />City, State 00000</h3>
                                        </div>
                                        <div className="m-b10">
                                            <span>E-mail</span>
                                            <h3>Info@example.com</h3>
                                        </div>
                                        <div className="m-b10">
                                            <span>Telephone</span>
                                            <h3>(+01) 123-4020</h3>
                                        </div>
                                        <div className="m-b10">
                                            <span>Fins us on</span>
                                            <ul className="list-inline socail-icon m-t15 m-a0">
                                                <li><Link to={"#"} className="site-button white facebook"><i className="fa fa-facebook"></i></Link></li>
                                                <li><Link to={"#"} className="site-button white google-plus"><i className="fa fa-google-plus"></i></Link></li>
                                                <li><Link to={"#"} className="site-button white linkedin"><i className="fa fa-linkedin"></i></Link></li>
                                                <li><Link to={"#"} className="site-button white instagram"><i className="fa fa-instagram"></i></Link></li>
                                                <li><Link to={"#"} className="site-button white twitter"><i className="fa fa-twitter"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Our Services End --> */}
                    <div className="section-full content-inner our-stories bg-white">
                        <div className="container">
                            <div className="section-head text-black text-center">
                                <h2 className="title-head m-b0">Our Stories</h2>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="blog-post blog-lg" >
                                        <div className="dez-post-media dez-img-effect radius-sm">
                                            <Link to={"#"}><img src={thum5} alt="" /></Link>
                                        </div>
                                        <div className="dez-info">
                                            <div className="dez-post-tags">
                                                <span>MARKETING</span>
                                            </div>
                                            <div className="dez-post-title">
                                                <h4 className="post-title"><Link to={"#"}>In defense of being on the phone all the damn time 24 hours</Link></h4>
                                            </div>
                                            <div className="dez-post-text">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend euismod nibh ut sollicitudin. Morbi eget ullamcorper quam. Pellentesque dui elit, rhoncus gravida ex et, lobortis tempor tortor. Fusce vel imperdiet nulla. Donec quis urna tellus. Sed aliquet, turpis nec vulputate aliquam, ex mi sodales sem mauris.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="blog-post blog-lg" >
                                                <div className="dez-post-media dez-img-effect radius-sm">
                                                    <Link to={"#"}><img src={recent5} alt="" /></Link>
                                                </div>
                                                <div className="dez-info">
                                                    <div className="dez-post-tags">
                                                        <span>TRENDS</span>
                                                    </div>
                                                    <div className="dez-post-title">
                                                        <h4 className="post-title"><Link to={"#"}>The biggest and most awesome...</Link></h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="blog-post blog-lg" >
                                                <div className="dez-post-media dez-img-effect radius-sm">
                                                    <Link to={"#"}><img src={recent6} alt="" /></Link>
                                                </div>
                                                <div className="dez-info">
                                                    <div className="dez-post-tags">
                                                        <span>GADGETS</span>
                                                    </div>
                                                    <div className="dez-post-title">
                                                        <h4 className="post-title"><Link to={"#"}>Tupac tribute murals and graffi...</Link></h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="blog-post blog-lg" >
                                                <div className="dez-post-media dez-img-effect radius-sm">
                                                    <Link to={"#"}><img src={recent7} alt="" /></Link>
                                                </div>
                                                <div className="dez-info">
                                                    <div className="dez-post-tags">
                                                        <span>BUSINESS</span>
                                                    </div>
                                                    <div className="dez-post-title">
                                                        <h4 className="post-title"><Link to={"#"}>How to travel the world and get big...</Link></h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="blog-post blog-lg" >
                                                <div className="dez-post-media dez-img-effect radius-sm">
                                                    <Link to={"#"}><img src={recent8} alt="" /></Link>
                                                </div>
                                                <div className="dez-info">
                                                    <div className="dez-post-tags">
                                                        <span>CATEGORY</span>
                                                    </div>
                                                    <div className="dez-post-title">
                                                        <h4 className="post-title"><Link to={"#"}>What happens when algorithms...</Link></h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Our Stories Blog End --> */}
                    {/* <!-- Contact Form END --> */}
                    <div className="section-full bg-primary-dark p-tb15">
                        <div className="container">
							<Index7ClientCarousel /> 
                        </div>
                    </div>
                    {/* <!-- Partners Logo --> */}
                </div>

                <Footer6 />
            </>
        )
    }
}
export default Index7;