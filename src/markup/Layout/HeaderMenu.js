import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class HeaderMenu extends Component{
	render(){
		return(
			<>
				<ul className="nav navbar-nav">
					<li className="active"><Link to={'#'}><span className="ti-home"></span> <i className="fa fa-chevron-down"></i></Link>
						<ul className="sub-menu">
							<li><Link to={'./'} className="dez-page">Home 1</Link></li>
							<li><Link to={'./index-2'} className="dez-page">Home 2</Link></li>
							<li><Link to={'./index-3'} className="dez-page">Home 3</Link></li>
							<li><Link to={'./index-4'} className="dez-page">Home 4</Link></li>
							<li><Link to={'./index-5'} className="dez-page">Home 5</Link></li>
							<li><Link to={'./index-6'} className="dez-page">Home 6 <span className="new-page">New</span></Link></li>
							<li><Link to={'./index-7'} className="dez-page">Home 7 <span className="new-page">New</span></Link></li>
						</ul>
					</li>
					<li><Link to={'#'}>Pages <i className="fa fa-chevron-down"></i></Link>
						<ul className="sub-menu">
							<li><Link to={'#'}>About Us <i className="fa fa-angle-right"></i></Link>
								<ul className="sub-menu">
									<li><Link to={'./about-1'} className="dez-page">About Us 1</Link></li>
									<li><Link to={'./about-2'} className="dez-page">About Us 2</Link></li>
								</ul>
							</li>
							<li><Link to={'#'}>Error Page <i className="fa fa-angle-right"></i></Link>
								<ul className="sub-menu">
									<li><Link to={'./error-403'} className="dez-page">Error 403</Link></li>
									<li><Link to={'./error-404'} className="dez-page">Error 404</Link></li>
									<li><Link to={'./error-405'} className="dez-page">Error 405</Link></li>
								</ul>
							</li>
							<li><Link to={'#'}>Coming Soon <i className="fa fa-angle-right"></i></Link>
								<ul className="sub-menu">
									<li><Link to={'./coming-soon-1'} className="dez-page">Coming Soon 1 </Link></li>
								</ul>
							</li> 
							<li><Link to={'./under-maintenance'} className="dez-page">Under Maintenance</Link></li>
							<li><Link to={'./expertise'} className="dez-page">Expertise</Link></li>
							<li><Link to={'./project-management'} className="dez-page">Project management</Link></li>
							<li><Link to={'./our-projects'} className="dez-page">Our Projects</Link></li>
							<li><Link to={'./project-details'} className="dez-page">Project Details </Link></li>
							<li><Link to={'./team'} className="dez-page">Our Team</Link></li>
							<li><Link to={'./faqs'} className="dez-page">FAQ's</Link></li>
							<li><Link to={'./login'} className="dez-page">Login </Link></li>
							<li><Link to={'./register'} className="dez-page">Register </Link></li>
							<li><Link to={'./contact'} className="dez-page">Contact Us</Link></li>
						</ul>
					</li>
					<li><Link to={'#'}>Our Service <i className="fa fa-chevron-down"></i></Link>
						<ul className="sub-menu">
							<li><Link to={'./service'} className="dez-page">Services</Link></li>
							<li><Link to={'./services-details'} className="dez-page">Services Details</Link></li>
						</ul>
					</li>
					<li><Link to={'#'}>Blog <i className="fa fa-chevron-down"></i></Link>
						<ul className="sub-menu">
							<li><Link to={'#'}>Blog Standard <i className="fa fa-angle-right"></i></Link>
								<ul className="sub-menu left">
									<li><Link to={'./blog-standard'} className="dez-page">Standard</Link></li>
									<li><Link to={'./blog-standard-left-sidebar'} className="dez-page">Standard Left Sidebar</Link></li>
									<li><Link to={'./blog-standard-right-sidebar'} className="dez-page">Standard Right Sidebar</Link></li>
								</ul>
							</li>
							<li><Link to={'#'}>Blog Classic <i className="fa fa-angle-right"></i></Link>
								<ul className="sub-menu left">
									<li><Link to={'./blog-classic-grid'} className="dez-page">Classic</Link></li>
									<li><Link to={'./blog-classic-left-sidebar'} className="dez-page">Classic Left Sidebar</Link></li>
									<li><Link to={'./blog-classic-right-sidebar'} className="dez-page">Classic Right Sidebar</Link></li>
								</ul>
							</li>
							<li><Link to={'#'}>Blog List <i className="fa fa-angle-right"></i></Link>
								<ul className="sub-menu left">
									<li><Link to={'./blog-list-left-sidebar'} className="dez-page">List Left Sidebar</Link></li>
									<li><Link to={'./blog-list-right-sidebar'} className="dez-page">List Right Sidebar</Link></li>
								</ul>
							</li>
							<li><Link to={'./blog-details'} className="dez-page">Blog Details</Link></li>
						</ul>
					</li>
					<li><Link to={'#'}>Our Portfolio <i className="fa fa-chevron-down"></i></Link>
						<ul className="sub-menu left">
							<li><Link to={'./portfolio-full-width'} className="dez-page">Portfolio Full Width  </Link></li>
							<li><Link to={'./portfolio-grid-2'} className="dez-page">Portfolio Grid 2 </Link></li>
							<li><Link to={'./portfolio-grid-3'} className="dez-page">Portfolio Grid 3 </Link></li>
							<li><Link to={'./portfolio-grid-4'} className="dez-page">Portfolio Grid 4 </Link></li>
						</ul>
					</li>
					<li><Link to={'#'}>Shop <i className="fa fa-chevron-down"></i></Link>
						<ul className="sub-menu left">
							<li><Link to={'./shop-columns'} className="dez-page">Shop Columns</Link></li>
							<li><Link to={'./shop-columns-sidebar'} className="dez-page">Shop Columns Sidebar</Link></li>
							<li><Link to={'./shop-product-details'} className="dez-page">Product Details</Link></li>
							<li><Link to={'./shop-cart'} className="dez-page">Cart</Link></li>
							<li><Link to={'./shop-checkout'} className="dez-page">Checkout</Link></li>
							<li><Link to={'./shop-wishlist'} className="dez-page">Wishlist</Link></li>
							<li><Link to={'./shop-login'} className="dez-page">Shop Login</Link></li>
							<li><Link to={'./shop-register'} className="dez-page">Shop Register</Link></li>
						</ul>
					</li>
					<li><Link to={'#'}>Element <i className="fa fa-chevron-down"></i> </Link>
						<ul className="sub-menu left">
							<li><Link to={'./short-icon-box'} className="dez-page">Icon Box</Link></li>
							<li><Link to={'./short-counter'} className="dez-page">Counter</Link></li>
							<li><Link to={'./short-portfolio'} className="dez-page">Portfolio</Link></li>
							<li><Link to={'./short-tabs'} className="dez-page">Tabs</Link></li>
							<li><Link to={'./short-team'} className="dez-page">Team</Link></li>
							<li><Link to={'./short-testimonial'} className="dez-page">Testimonial</Link></li>
							<li><Link to={'./short-form'} className="dez-page">Form</Link></li>
							<li><Link to={'./short-accordions'} className="dez-page">Accordions</Link></li>
						</ul>
					</li>
				</ul>
			</>
		)
	}
}
export default HeaderMenu;