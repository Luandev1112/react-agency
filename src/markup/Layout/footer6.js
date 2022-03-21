import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer6 extends Component {
    render() {
        return (
            <>
                <footer className="site-footer">
					<div className="footer-top bg-gray-dark">
						<div className="container">
							<div className="row">
								<div className="col-5 col-lg-2 col-md-6 col-sm-6 footer-col-4">
									<div className="widget widget_services border-0">
										<h5 className="m-b30 text-white">Company</h5>
										<ul>
											<li><Link to={"#"}>Home </Link></li>
											<li><Link to={"#"}>About Us 1</Link></li>
											<li><Link to={"#"}>About Us 2</Link></li>
											<li><Link to={"#"}>Contact Us</Link></li>
										</ul>
									</div>
								</div>
								<div className="col-7 col-lg-2 col-md-6 col-sm-6 footer-col-4">
									<div className="widget widget_services border-0">
										<h5 className="m-b30 text-white">Useful Link</h5>
										<ul>
											<li><Link to={"#"}>Create Account</Link></li>
											<li><Link to={"#"}>Company Philosophy </Link></li>
											<li><Link to={"#"}>Corporate Culture</Link></li>
											<li><Link to={"#"}>Corporate Culture</Link></li>
										</ul>
									</div>
								</div>
								<div className="col-lg-4 col-md-6 col-sm-6 footer-col-4">
									<div className="widget widget_getintuch">
										<h5 className="m-b30 text-white">Contact us</h5>
										<ul>
											<li><i className="ti-location-pin"></i><strong>address</strong> demo address #8901 Marmora Road Chi Minh City, Vietnam </li>
											<li><i className="ti-mobile"></i><strong>phone</strong>0800-123456 <br/>0712-024163 (24/7 Support Line)</li>
										</ul>
									</div>
								</div>
								<div className="col-lg-4 col-md-6 col-sm-6 footer-col-4 ">
									<div className="widget">
										<h5 className="m-b30 text-white">Get started</h5>
										<p className="text-capitalize m-b20">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
										<Link to={"#"} className="site-button radius-xl text-white m-b5 m-r10">TAKE A TEST DRIVE</Link>
										<Link to={"#"} className="site-button radius-xl m-b5 white">CONTACT US</Link>
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

export default Footer6;