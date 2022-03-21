import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header3 from './../Layout/header3';
import Footer4 from './../Layout/footer4';
import GoogleMaps from "simple-react-google-maps";
import ExploreCarousel from './../Element/ExploreCarousel';
import Index5Carousel from './../Element/Index5Carousel';
import Index5Slider from './../Element/Index5Slider';

import bg17 from './../../images/background/bg17.jpg'; 
import bg3 from './../../images/background/bg3.png'; 
import bnr3 from './../../images/background/bg3.jpg'; 
import bg19 from './../../images/background/bg19.jpg'; 
import bg18 from './../../images/background/bg18.jpg'; 
import about11 from './../../images/about/pic11.jpg'; 

class Index5 extends Component {

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
                <Header3 />

                <div className="page-content bg-white rubik-font">
					<div className="owl-slider-banner main-slider">
						<Index5Slider />
					</div>
                    <div className="content-block">
                        {/* <!-- About Us --> */}
                        <div className="section-full industry-service" style={{ backgroundImage: "url(" + bg17 + ")" }}>
                            <div className="container">
                                <div className="row m-b80">
                                    <div className="col-lg-4 col-md-4">
                                        <div className="icon-bx-wraper ind-ser-bx">
                                            <div className="icon-lg m-b10">
                                                <Link to={"#"} className="icon-cell text-primary"><i className="flaticon-operation"></i></Link>
                                            </div>
                                            <div className="icon-content">
                                                <h3 className="dlab-tilte">Dedicated Teams</h3>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry..</p>
                                            </div>
                                            <Link to={"#"} className="site-button btn-block d-flex justify-content-between"><span>Read More</span> <i className="ti-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="icon-bx-wraper ind-ser-bx active">
                                            <div className="icon-lg m-b10">
                                                <Link to={"#"} className="icon-cell text-primary"><i className="flaticon-network"></i></Link>
                                            </div>
                                            <div className="icon-content">
                                                <h3 className="dlab-tilte">True Partners</h3>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry..</p>
                                            </div>
                                            <Link to={"#"} className="site-button btn-block d-flex justify-content-between"><span>Read More</span> <i className="ti-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="icon-bx-wraper ind-ser-bx">
                                            <div className="icon-lg m-b10">
                                                <Link to={"#"} className="icon-cell text-primary"><i className="flaticon-mind"></i></Link>
                                            </div>
                                            <div className="icon-content">
                                                <h3 className="dlab-tilte">Focus On Innovation</h3>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry..</p>
                                            </div>
                                            <Link to={"#"} className="site-button btn-block d-flex justify-content-between"><span>Read More</span> <i className="ti-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="row d-flex align-items-center">
                                    <div className="col-lg-5 col-md-12 m-b30">
                                        <h2 className="box-title m-t0 m-b20 font-40"><span className="font-weight-400">About </span><br />Our Company</h2>
                                        <p className="m-b20">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        <Link to={"./about-1"} className="site-button button-md">Read More</Link>
                                    </div>
                                    <div className="col-lg-7 col-md-12">
                                        <img src={about11} className="radius-sm" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- About Us End --> */}
                        {/* <!-- Why Chose Us --> */}
                        <div className="section-full bg-blue-light content-inner explore-projects" style={{ backgroundImage: "url(" + bg3 + ")" }}>
							<div className="container">
                                <div className="section-content">
                                    <div className="row">
                                        <div className="col-md-12 col-lg-12 section-head text-center">
                                            <h2 className="m-b0 font-40"><span className="font-weight-400">Explore</span> Projects</h2>
                                            <p className="m-b0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                                        </div>
                                    </div>
                                    {/* <!-- blog post Carousel with no margin --> */}
                                    <div className="">
										<ExploreCarousel /> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Why Chose Us End --> */}
                        <div className="section-full overlay-black-dark our-projects" style={{ backgroundImage: "url(" + bnr3 + ")" }}>
                            <div className="container text-white">
                                <div className="row m-lr0 d-flex align-items-stretch">
                                    <div className="col-lg-4 col-md-4 p-lr0 d-flex ind-ser-info-bx">
                                        <div className="ind-service-info align-self-stretch">
                                            <span>01</span>
                                            <div className="ind-service-info-in">
                                                <h2><span>World Class</span>Technology</h2>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of.</p>
                                            </div>
                                            <Link to={"#"} className="site-button btn-block d-flex justify-content-between white outline outline-2"><span>Read More</span> <i className="ti-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 p-lr0 d-flex ind-ser-info-bx">
                                        <div className="ind-service-info align-self-stretch">
                                            <span>02</span>
                                            <div className="ind-service-info-in">
                                                <h2><span>Quality </span>Standart</h2>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of.</p>
                                            </div>
                                            <Link to={"#"} className="site-button btn-block d-flex justify-content-between white outline outline-2"><span>Read More</span> <i className="ti-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 p-lr0 d-flex ind-ser-info-bx">
                                        <div className="ind-service-info align-self-stretch">
                                            <span>03</span>
                                            <div className="ind-service-info-in">
                                                <h2><span>Productive</span>Capacity</h2>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of.</p>
                                            </div>
                                            <Link to={"#"} className="site-button btn-block d-flex justify-content-between white outline outline-2"><span>Read More</span> <i className="ti-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Our Portfolio --> */}
                        <div className="section-full p-tb15 our-support content-inner-2" style={{ backgroundImage: "url(" + bg19 + ")", backgroundRepeat: "no-repeat", backgroundSize:"100%", backgroundPosition: "bottom"}}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 col-lg-12 section-head text-center">
                                        <h2 className="m-b0 font-40"><span className="font-weight-400">Contact</span> Us</h2>
                                        <p className="m-b0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                                    </div>
                                </div>
                                <div className="support-box-form bg-primary">
                                    <div className="row m-lr0">
                                        <div className="col-lg-6 p-lr0 d-flex">
											{ /* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d57803.76927259502!2d75.78311389999999!3d25.110810700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1540556893926" style={{width: "100%", border: "0"}} className="d-flex align-items-stretch" allowfullscreen></iframe> */}
											<GoogleMaps
												apiKey={"AIzaSyDrAU41UTBlcEDNJgEtdlFLZeUBNBuHhzM"}
												style={{ minHeight:"100%", width: "100%" }}
												zoom={6}
												center={{ lat: 37.4224764, lng: -122.0842499 }}
												markers={{ lat: 37.4224764, lng: -122.0842499 }} //optional
											/>
											
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="support-form">
                                                <div className="support-title text-white m-b30">
                                                    <h6 className="text-uppercase font-weight-500 m-b10">Support</h6>
                                                    <h2 className="font-40 font-weight-400 m-tb0">Need Help?</h2>
                                                    <p className="font-14">Contact our customer support team if you have any questions.</p>
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
                                                                        <input name="dzName" type="text" required className="form-control" placeholder="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                                                <div className="form-group">
                                                                    <div className="input-group">
                                                                        <label>Phone</label>
                                                                        <input name="dzOther[Phone]" type="text" required className="form-control" placeholder="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <div className="form-group">
                                                                    <div className="input-group">
                                                                        <label>Your Email Address</label>
                                                                        <input name="dzEmail" type="email" className="form-control" required placeholder="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <div className="form-group">
                                                                    <div className="input-group">
                                                                        <label>Your Message...</label>
                                                                        <textarea name="dzMessage" rows="4" className="form-control" required placeholder=""></textarea>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                                <button name="submit" type="submit" value="Submit" className="site-button white button-md m-t10">Submit Now</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Our Portfolio END --> */}
                        {/* <!-- Testimonials --> */}
                        <div className="section-full content-inner ind-client" style={{ backgroundImage: "url(" + bg18 + ")", backgroundPosition:"bottom"}}>
                            <div className="container">
                                <div className="row d-flex align-items-center">
                                    <div className="col-md-4 section-head">
                                        <h2 className="box-title m-t0 m-b10 font-40"><span className="font-weight-400">Our</span><br /> Testimonials</h2>
                                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                                        <Link to={"#"} className="site-button button-md">View Client</Link>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="">
											<Index5Carousel />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Testimonials END --> */}
                        <div className="section-full add-to-call bg-primary p-tb30">
                            <div className="container">
                                <div className="d-lg-flex d-sm-block justify-content-between align-items-center">
                                    <h2 className="m-b10 m-t10 text-white">Reliable Engineering Takes Many Forms</h2>
                                    <div><Link to={"#"} className="site-button button-md white">Learn More</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- contact area END --> */}
                </div>

                <Footer4 />
            </>
        )
    }
}
export default Index5;