import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SimpleReactLightbox from 'simple-react-lightbox';
import {SRLWrapper, useLightbox} from 'simple-react-lightbox'; 
import Header6 from './../Layout/Header6';
import Footer3 from './../Layout/footer3';
import Index4Tab from './../Element/Index4Tab';
import ReviewsCarousel from './../Element/ReviewsCarousel';
import {VideoPopup2} from './../Element/VideoPopup';

//Images..
import bgimg from './../../images/main-slider/slide6.jpg';
import bg16 from './../../images/background/bg16.jpg';
import about1 from './../../images/about/pic9.jpg';
import bg1 from './../../images/background/bg1.jpg';
import gallery10 from './../../images/gallery/pic10.jpg';
import gallery11 from './../../images/gallery/pic11.jpg';
import gallery12 from './../../images/gallery/pic12.jpg';
import gallery13 from './../../images/gallery/pic13.jpg';
import gallery14 from './../../images/gallery/pic14.jpg';
import gallery15 from './../../images/gallery/pic15.jpg';
import gallery16 from './../../images/gallery/pic16.jpg';

//Light Gallery on icon click 
const Iconimage = props => {
	const { openLightbox } = useLightbox()
	return (
    <Link  to={"#"} onClick={() => openLightbox(props.imageToOpen)} className="mfp-link" >
      <i className="ti-fullscreen icon-bx-xs"></i>
    </Link>
  )
}

class Index4 extends Component {
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
                <Header6 />
                <div className="page-content bg-white rubik">

					<div className="home-banner" style={{backgroundImage:"url("+ bgimg +")" }}>
						<div className="home-bnr-inner">
							<div className="home-bnr-content">
								<h4 className="sub-title">THE</h4>
								<h2 className="dz-title">AGENCY</h2>
								<div className="home-bnr-btns">
									<Link to={"#"} className="site-button white btn-icon">Read more <i className="fa fa-angle-double-right"></i></Link>
									<VideoPopup2 />
								</div>
							</div>	
						</div>
					</div>

                    {/* <!-- contact area --> */}
                    <div className="content-block">
                        {/* <!-- About Us --> */}
                        <div className="section-full content-inner about-progress">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 col-lg-6">
                                        <h2 className="text-uppercase"><span className="font-weight-300">Give the </span><br />green light</h2>
                                        <div className="progress-section">
                                            <div className="progress-bx">
                                                <h4>Hard Work</h4>
                                                <div className="count-box">70%</div>
                                                <div className="progress">
                                                    <div className="progress-bar bg-success" style={{width:'70%'}} role="progressbar"></div>
                                                </div>
                                            </div>
                                            <div className="progress-bx">
                                                <h4>Projects Delivery</h4>
                                                <div className="count-box">80%</div>
                                                <div className="progress">
                                                    <div className="progress-bar bg-success" style={{width:'80%'}} role="progressbar"></div>
                                                </div>
                                            </div>
                                            <div className="progress-bx">
                                                <h4>Customers Love</h4>
                                                <div className="count-box">90%</div>
                                                <div className="progress">
                                                    <div className="progress-bar bg-success" style={{width:'90%'}} role="progressbar" ></div>
                                                </div>
                                            </div>
                                        </div>
                                        <h3 className="m-b10">The Project</h3>
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                                    </div>
                                    <div className="col-md-12 col-lg-6 d-flex ">
                                        <div className="img-half-bx align-items-stretch">
                                            <img src={about1}  alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- About Us End --> */}
                        {/* <!-- Tabs End --> */}
                        <div className="section-full content-inner-2 tab-bx br-top">
                            <div className="container">
                                <div className="">
                                    <Index4Tab />
                                </div>
                            </div>
                        </div>
                        {/* <!-- Testimonial End --> */}
                        {/* <!-- Testimonial --> */}
                        <div className="section-full content-inner-2 bg-img-fix overlay-primary gradient testimonial-curv-bx" style={{ backgroundImage: "url(" + bg1 + ")" }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-2"></div>
                                    <div className="col-lg-8">
                                        <div className="section-head text-center">
                                            <h2 className="text-uppercase"><span className="font-weight-300">Happy customers</span> <br /> Our Reviews</h2>
                                            <h5 className="font-weight-300 text-gray-dark">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</h5>
                                        </div>
                                        <ReviewsCarousel />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Testimonial End --> */}
                        {/* <!-- Pricing Table --> */}
                        <div className="section-full content-inner bg-gray pricing-bx">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="section-head text-center">
                                            <h2 className="text-uppercase "><span className="font-weight-300">Check our opportunities</span> <br /> Start Pre-ICO & Get a Reward</h2>
                                            <h5 className="font-weight-400 text-gray-dark max-w800 m-auto">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</h5>
                                        </div>
                                        {/* <!-- Pricing table-1 Columns 3 with gap --> */}
                                        <div className="section-content box-sort-in button-example m-t80">
                                            <div className="pricingtable-row">
                                                <div className="row max-w1000 m-auto">
                                                    <div className="col-sm-12 col-md-4 col-lg-4 p-lr0">
                                                        <div className="pricingtable-wrapper style1 left">
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
                                                                    <Link to={"#"} className="site-button outline outline-2 radius-xl button-md">Sign Up</Link>
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
                                                                    <Link to={"#"} className="site-button white outline outline-2 radius-xl button-md">Sign Up</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12 col-md-4 col-lg-4 p-lr0">
                                                        <div className="pricingtable-wrapper style1 right">
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
                                                                    <Link to={"#"} className="site-button outline outline-2 radius-xl button-md">Sign Up</Link>
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
                        {/* <!-- Pricing Table End --> */}
                        {/* <!-- Pricing Table --> */}
                        <div className="section-full content-inner bg-white workspace-bx mfp-gallery">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="section-head text-center">
                                            <h2 className="text-uppercase "><span className="font-weight-300">Check our space</span> <br />Our Workspace</h2>
                                        </div>
                                    </div>
                                </div>
								<SimpleReactLightbox>
									<SRLWrapper >
										<div className="row">
											<div className="col-lg-6 col-md-12 col-sm-12">
												<div className="dlab-box portfolio-box m-b30">
													<div className="dlab-media dlab-img-effect dlab-img-overlay1" data-tilt=""> <img src={gallery10} alt="" />
														<div className="overlay-bx">
															<div className="overlay-icon text-white">
																<h5>Website Name</h5>
																<p className="m-b10">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots</p>
																<Iconimage />
																<a href="https://www.google.com/" target="bank"><i className="ti-arrow-top-right icon-bx-xs"></i></a>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="col-lg-6 col-md-12 col-sm-12">
												<div className="row">
													<div className="col-lg-6 col-md-6 col-sm-6">
														<div className="dlab-box portfolio-box m-b30">
															<div className="dlab-media dlab-img-effect dlab-img-overlay1" data-tilt=""> <img src={gallery11} alt="" />
																<div className="overlay-bx">
																	<div className="overlay-icon text-white">
																		<h5>Website Name</h5>
																		<p className="m-b10">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots</p>
																		<Iconimage />
																		<a href="https://www.google.com/" target="bank"><i className="ti-arrow-top-right icon-bx-xs"></i></a>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-lg-6 col-md-6 col-sm-6">
														<div className="dlab-box portfolio-box m-b30">
															<div className="dlab-media dlab-img-effect dlab-img-overlay1" data-tilt=""> <img src={gallery12} alt="" />
																<div className="overlay-bx">
																	<div className="overlay-icon text-white">
																		<h5>Website Name</h5>
																		<p className="m-b10">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots</p>
																		<Iconimage />
																		<a href="https://www.google.com/" target="bank"><i className="ti-arrow-top-right icon-bx-xs"></i></a>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-lg-12 col-md-12 col-sm-12">
														<div className="dlab-box portfolio-box m-b30">
															<div className="dlab-media dlab-img-effect dlab-img-overlay1" data-tilt=""> <img src={gallery13} alt="" />
																<div className="overlay-bx">
																	<div className="overlay-icon text-white">
																		<h5>Website Name</h5>
																		<p className="m-b10">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots</p>
																		<Iconimage />
																		<a href="https://www.google.com/" target="bank"><i className="ti-arrow-top-right icon-bx-xs"></i></a>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col-lg-6 col-md-12 col-sm-12">
												<div className="dlab-box portfolio-box m-b30">
													<div className="dlab-media dlab-img-effect dlab-img-overlay1" data-tilt=""> <img src={gallery14} alt="" />
														<div className="overlay-bx">
															<div className="overlay-icon text-white">
																<h5>Website Name</h5>
																<p className="m-b10">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots</p>
																<Iconimage />
																<a href="https://www.google.com/" target="bank"><i className="ti-arrow-top-right icon-bx-xs"></i></a>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="col-lg-3 col-md-6 col-sm-6">
												<div className="dlab-box portfolio-box m-b30">
													<div className="dlab-media dlab-img-effect dlab-img-overlay1" data-tilt=""> <img src={gallery16} alt="" />
														<div className="overlay-bx">
															<div className="overlay-icon text-white">
																<h5>Website Name</h5>
																<p className="m-b10">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots</p>
																<Iconimage />
																<a href="https://www.google.com/" target="bank"><i className="ti-arrow-top-right icon-bx-xs"></i></a>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="col-lg-3 col-md-6 col-sm-6">
												<div className="dlab-box portfolio-box m-b30">
													<div className="dlab-media dlab-img-effect dlab-img-overlay1" data-tilt=""> <img src={gallery15} alt="" />
														<div className="overlay-bx">
															<div className="overlay-icon text-white">
																<h5>Website Name</h5>
																<p className="m-b10">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots</p>
																<Iconimage />
																<a href="https://www.google.com/" target="bank"><i className="ti-arrow-top-right icon-bx-xs"></i></a>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</SRLWrapper >
								</SimpleReactLightbox>
                            </div>
                        </div>
                        {/* <!-- Pricing Table End --> */}
                        {/* <!-- Testimonial --> */}
                        <div className="section-full content-inner-2 bg-img-fix overlay-primary gradient subscribe-bx" style={{ backgroundImage: "url(" + bg1 + ")" }}>
                            <div className="container">
                                <form className="row text-white dezPlaceAni align-items-center dzSubscribe" action="script/mailchamp.php" method="post">
                                    <div className="col-lg-4  col-md-12">
                                        <h2 className="m-b0"><span className="font-weight-300">Subscribe to our</span><br /> Newsletter</h2>
                                    </div>
                                    <div className="col-lg-6 col-md-9 contact-form-bx">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <label>Your Email Address</label>
                                                <input name="dzEmail" required="required" type="email" className="form-control" placeholder="" />
                                                <div className="dzSubscribeMsg"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-3">
                                        <button name="submit" value="Submit" type="submit" className="site-button button-md radius-xl white btn-block">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* <!-- Testimonial End --> */}
                        {/* <!-- Contact Us --> */}
                        <div className="section-full content-inner-2 bg-white contact-form-bx" style={{ backgroundImage: "url(" + bg16 + ")" , backgroundSize: "100%" }}>
                            <div className="container">
                                <div className="section-head text-center">
                                    <h2 className="text-uppercase"><span className="font-weight-300">Contact </span> us</h2>
                                </div>
                                <div className="dezPlaceAni">
                                    <div className="dzFormMsg"></div>
                                    <form method="post" className="" action="">
                                        <input type="hidden" value="Contact" name="dzToDo" />
                                        <div className="row">
                                            <div className="col-lg-4 col-md-5 col-sm-12">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <label>Your Name</label>
                                                        <input name="dzName" type="text" required className="form-control" placeholder="" />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <label>Your Email Address</label>
                                                        <input name="dzEmail" type="email" className="form-control" required placeholder="" />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <label>Phone</label>
                                                        <input name="dzOther[Phone]" type="text" required className="form-control" placeholder="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8 col-md-7 col-sm-12">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <label>Your Message...</label>
                                                        <textarea name="dzMessage" rows="4" className="form-control" required placeholder=""></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                                                <button name="submit" type="submit" value="Submit" className="site-button outline outline-2 radius-xl button-md m-t10">Submit Now</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Contact Us End --> */}
                    </div>
                    {/* <!-- contact area END --> */}
                </div>

                <Footer3 />
            </>
        )
    }
}
export default Index4;