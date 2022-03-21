import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GoogleMaps from "simple-react-google-maps";

class Footer3 extends Component {
    render() {
        return (
            <>
                <footer className="site-footer map-footer text-white footer-gradient br-top">
					<div className="footer-top">
						<div className="container-fluid">
							<div className="row" >
								<div className="col-xl-7 col-md-4 col-lg-5 p-a0">
								{/* <iframe className="" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14444.846145183914!2d75.84806889203723!3d25.16233421040968!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1517832215254" allowfullscreen></iframe> */}
									<GoogleMaps
										apiKey={"AIzaSyDrAU41UTBlcEDNJgEtdlFLZeUBNBuHhzM"}
										style={{ minHeight:"100%", width: "100%" }}
										zoom={6}
										center={{ lat: 37.4224764, lng: -122.0842499 }}
										markers={{ lat: 37.4224764, lng: -122.0842499 }} //optional
									/>	
								</div>
								<div className="col-xl-5 col-md-8 col-lg-7">
									<div className="row footer-content-link">
										<div className="col-lg-4 col-md-4 col-sm-4">
											<div className="widget widget_services border-0">
												<h5 className="m-b15 text-white">Company</h5>
												<ul>
													<li><Link to={"#"}>About Us </Link></li>
													<li><Link to={"#"}>Home </Link></li>
													<li><Link to={"#"}>Contact Us</Link></li>
													<li><Link to={"#"}>About Us</Link></li>
													<li><Link to={"#"}>Our Services</Link></li>
												</ul>
											</div>
										</div>
										<div className="col-lg-4 col-md-4 col-sm-4">
											<div className="widget widget_services border-0">
												<h5 className="m-b15 text-white">Useful Link</h5>
												<ul>
													<li><Link to={"#"}>Create Account</Link></li>
													<li><Link to={"#"}>Company Philosophy </Link></li>
													<li><Link to={"#"}>Corporate Culture</Link></li>
													<li><Link to={"#"}>Portfolio</Link></li>
													<li><Link to={"#"}>Project Details</Link></li>
												</ul>
											</div>
										</div>
										<div className="col-lg-4 col-md-4 col-sm-4">
											<div className="widget widget_services border-0">
												<h5 className="m-b15 text-white">Useful Link</h5>
												<ul>
													<li><Link to={"#"}>Create Account</Link></li>
													<li><Link to={"#"}>Company Philosophy </Link></li>
													<li><Link to={"#"}>Corporate Culture</Link></li>
													<li><Link to={"#"}>Portfolio</Link></li>
													<li><Link to={"#"}>Project Details</Link></li>
												</ul>
											</div>
										</div>
									</div>
									<div className="footer-bottom text-left row">
										<div className="col-md-12 col-sm-12 text-left p-lr30"> 
											<span>Copyright &copy; 2021 DexignZone</span> 
											<div className="widget-link m-t10 "> 
												<ul>
													<li><Link to={"#"}> Home</Link></li> 
													<li><Link to={"#"}> About</Link></li> 
													<li><Link to={"#"}> Help Desk</Link></li> 
													<li><Link to={"#"}> Privacy Policy</Link></li> 
													<li><Link to={"#"}> Contact Us</Link></li> 
												</ul>
											</div>
										</div>
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

export default Footer3;