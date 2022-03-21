import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SimpleReactLightbox,{SRLWrapper} from 'simple-react-lightbox'
import mp1 from './../../images/map1.png';
import blog1 from './../../images/blog/recent-blog/pic1.jpg';
import blog2 from './../../images/blog/recent-blog/pic2.jpg';
import blog3 from './../../images/blog/recent-blog/pic3.jpg';
import gallery1 from './../../images/gallery/pic1.jpg';
import gallery2 from './../../images/gallery/pic2.jpg';
import gallery3 from './../../images/gallery/pic3.jpg';
import gallery4 from './../../images/gallery/pic4.jpg';
import gallery5 from './../../images/gallery/pic5.jpg';
import gallery6 from './../../images/gallery/pic6.jpg';
import gallery7 from './../../images/gallery/pic7.jpg';
import gallery8 from './../../images/gallery/pic8.jpg';
import gallery9 from './../../images/gallery/pic9.jpg';

class Footer2 extends Component {
    render() {
        return (
            <>
                <footer className="site-footer text-white">
                    <div className="footer-top bg-primary" style={{ backgroundImage: "url(" + mp1 + ")" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 col-5 col-xl-3 col-lg-4 col-sm-6 footer-col-4 col-12">
									<div className="widget border-0">
										<h5 className="m-b30 text-white">Company</h5>
										<ul className="list-2">
											<li><Link to={"#"}>Home</Link></li>
											<li><Link to={"#"}>About us </Link></li>
											<li><Link to={"#"}>Our Team</Link></li>
											<li><Link to={"#"}>Hire Developers</Link></li>
											<li><Link to={"#"}>Industries</Link></li>
											<li><Link to={"#"}>Portfolio</Link></li>
											<li><Link to={"#"}>Contact Us</Link></li>
											<li><Link to={"#"}>Blogs</Link></li>
											<li><Link to={"#"}>Testimonials</Link></li>
											<li><Link to={"#"}>Careers</Link></li>
											<li><Link to={"#"}>Portfolio</Link></li>
											<li><Link to={"#"}>Contact Us</Link></li>
											<li><Link to={"#"}>Blogs</Link></li>
											<li><Link to={"#"}>Testimonials</Link></li>
											<li><Link to={"#"}>Industries</Link></li>
											<li><Link to={"#"}>Portfolio</Link></li>
										</ul>
									</div>
								</div>
								<div className="col-md-6 col-xl-3 col-lg-4 col-sm-6 footer-col-4 col-12">
									<h4 className="m-b30 text-white">Company</h4>
									<div className="widget recent-posts-entry">
										<div className="widget-post-bx">
											<div className="widget-post clearfix">
												<div className="dlab-post-media"> <img src={blog1} alt="" width="200" height="143"/> </div>
												<div className="dlab-post-info">
													<div className="dlab-post-header">
														<h6 className="post-title"><Link to={"#"}>Title of first blog post entry</Link></h6>
													</div>
													<div className="dlab-post-meta">
														<ul>
															<li className="post-author">By Jone</li>
															<li className="post-comment"><i className="fa fa-comments"></i> 28</li>
														</ul>
													</div>
												</div>
											</div>
											<div className="widget-post clearfix">
												<div className="dlab-post-media"> <img src={blog2} alt="" width="200" height="160"/> </div>
												<div className="dlab-post-info">
													<div className="dlab-post-header">
														<h6 className="post-title"><Link to={"#"}>Title of first blog post entry</Link></h6>
													</div>
													<div className="dlab-post-meta">
														<ul>
															<li className="post-author">By Jone</li>
															<li className="post-comment"><i className="fa fa-comments"></i> 28</li>
														</ul>
													</div>
												</div>
											</div>
											<div className="widget-post clearfix">
												<div className="dlab-post-media"> <img src={blog3} alt="" width="200" height="160"/> </div>
												<div className="dlab-post-info">
													<div className="dlab-post-header">
														<h6 className="post-title"><Link to={"#"}>Title of first blog post entry</Link></h6>
													</div>
													<div className="dlab-post-meta">
														<ul>
															<li className="post-author">By Jone</li>
															<li className="post-comment"><i className="fa fa-comments"></i> 28</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
                                <div className="col-md-6 col-xl-3 col-lg-4 col-sm-6 footer-col-4  col-12">
									<div className="widget widget_getintuch">
										<h4 className="m-b30 text-white ">Contact us</h4>
										<ul>
											<li><i className="ti-location-pin"></i><strong>address</strong> demo address #8901 Marmora Road Chi Minh City, Vietnam </li>
											<li><i className="ti-mobile"></i><strong>phone</strong>0800-123456 (24/7 Support Line)</li>
											<li><i className="ti-email"></i><strong>email</strong>info@example.com</li>
											<li><i className="ti-email"></i><strong>Fax</strong>0800-123456</li>
										</ul>
									</div>
								</div>
								<div className="col-md-6 col-lg-3 col-sm-6 footer-col-4 d-lg-none d-xl-block  col-12">
									<div className="widget widget_gallery gallery-grid-4">
										<h4 className="m-b30 text-white">Gallery</h4>
										<SimpleReactLightbox>	
											<SRLWrapper>
												<ul>
													<li className="img-effect2"><img src={gallery1} alt=""/> </li>
													<li className="img-effect2"><img src={gallery2} alt=""/> </li>
													<li className="img-effect2"><img src={gallery3} alt=""/> </li>
													<li className="img-effect2"><img src={gallery4} alt=""/> </li>
													<li className="img-effect2"><img src={gallery5} alt=""/></li>
													<li className="img-effect2"><img src={gallery6} alt=""/></li>
													<li className="img-effect2"><img src={gallery7} alt=""/></li>
													<li className="img-effect2"><img src={gallery8} alt=""/></li>
													<li className="img-effect2"><img src={gallery9} alt=""/></li>
													<li className="img-effect2"><img src={gallery1} alt=""/></li>
													<li className="img-effect2"><img src={gallery2} alt=""/></li>
													<li className="img-effect2"><img src={gallery3} alt=""/></li>
													<li className="img-effect2"><img src={gallery7} alt=""/></li>
													<li className="img-effect2"><img src={gallery8} alt=""/></li>
													<li className="img-effect2"><img src={gallery9} alt=""/></li>
													<li className="img-effect2"><img src={gallery6} alt=""/></li>
												</ul>
											</SRLWrapper>	
										</SimpleReactLightbox>	
									</div>
								</div>
                            </div>
							<div className="dlab-divider bg-white tb20 op4"><i className="icon-dot c-square"></i></div>
							<div className="row m-t30">
								<div className="col-md-6 col-xl-6 col-lg-6 col-sm-12 footer-col-4 m-b15">
									<h4 className=" text-white">Flows Us</h4>
									<ul className="list-inline m-a0">
										<li><Link to={"#"} className="site-button facebook circle mr-1"><i className="fa fa-facebook"></i></Link></li>
										<li><Link to={"#"} className="site-button google-plus circle mr-1"><i className="fa fa-google-plus"></i></Link></li>
										<li><Link to={"#"} className="site-button linkedin circle mr-1"><i className="fa fa-linkedin"></i></Link></li>
										<li><Link to={"#"} className="site-button instagram circle mr-1"><i className="fa fa-instagram"></i></Link></li>
										<li><Link to={"#"} className="site-button twitter circle mr-1"><i className="fa fa-twitter"></i></Link></li>
									</ul>
								</div>
								<div className="col-md-6 col-xl-6 col-lg-6 col-sm-12 footer-col-4">
									<div className="widget">
										<h4 className="m-b15 text-white">Subscribe To Our Newsletter</h4>
										<div className="subscribe-form m-b20">
											<form className="dzSubscribe" action="script/mailchamp.php" method="post">
												<div className="dzSubscribeMsg"></div>
												<div className="input-group">
													<input name="dzEmail" required="required"  className="form-control" placeholder="Your Email Id" type="email"/>
													<span className="input-group-btn">
														<button name="submit" value="Submit" type="submit" className="site-button black radius-xl">Subscribe</button>
													</span> 
												</div>
											</form>
										</div>
										
									</div>
								</div>
							</div>
                        </div>
                    </div>
                    <div className="footer-bottom bg-primary">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 text-left "> <span>Copyright © 2021 DexignZone</span> </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 text-right ">
                                    <div className="widget-link ">
                                        <ul>
                                            <li><Link to={"#"}> Help Desk</Link></li>
                                            <li><Link to={"#"}> Privacy Policy</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
				
            </>
        );
    }
}

export default Footer2;