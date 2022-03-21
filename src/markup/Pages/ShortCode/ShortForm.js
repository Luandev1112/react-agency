import React, { Component } from 'react';
import Header from './../../Layout/Header1';
import Footer from './../../Layout/Footer1';
import PageTitle from './../../Layout/PageTitle';
import FormStyle from './../../Element/FormStyle';
import LineChart from './LineChart';

import bnr2 from './../../../images/banner/bnr2.jpg';
import bg16 from './../../../images/background/bg16.jpg';
import bg3 from './../../../images/background/bg3.jpg';
import bg1 from './../../../images/background/bg1.jpg';

class ShortForm extends Component {
	componentDidMount(){
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
                <Header />

                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr overlay-primary" style={{ backgroundImage: "url(" + bnr2 + ")" }}>
						<PageTitle motherMenu='Form' activeMenu='Form'  />
                    </div>
                    {/* <!-- inner page banner END --> */}
                    <div className="content-block">
                        {/* <!-- Contact Us --> */}
                        <div className="section-full content-inner-2 bg-white contact-form-bx" style={{ backgroundImage: "url(" + bg16 + ")" }}>
                            <div className="sort-title-bx" data-name="Element Style 1">Element Style 1 <i className="fa fa-angle-double-right"></i></div>
                            <div className="container">
                                <div className="section-head text-center">
                                    <h2 className="text-uppercase"><span className="font-weight-300">Contact </span> us</h2>
                                </div>
                                <div className="dezPlaceAni">
                                    <div className="dzFormMsg"></div>
                                    <form method="post" className="dzForm" action="script/contact.php">
                                        <input type="hidden" value="Contact" name="dzToDo" />
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-12">
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
                                            <div className="col-lg-8 col-md-8 col-sm-12">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <label>Your Message...</label>
                                                        <textarea name="dzMessage" rows="4" className="form-control" required placeholder="" ></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                                                <button name="submit" type="submit" value="Submit" className="site-button outline outline-2 radius-xl button-md m-t30">Submit Now</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Contact Us End --> */}
                        <div className="section-full content-inner-2 bg-primary bg-img-fix overlay-primary tax-info-chart" style={{ backgroundImage: "url(" + bg3 + ")" }}>
                            <div className="sort-title-bx text-white" data-name="Element Style 2">Element Style 2 <i className="fa fa-angle-double-right"></i></div>
                            <div className="container">
                                <div className="row dzseth">
                                    <div className="col-lg-6 col-md-12 col-sm-12 d-flex mb-4 mb-md-4 mb-lg-0">
                                        <div className="chart-box">	
											<LineChart />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 dis-tbl d-flex">
                                        <FormBlog />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-full content-inner-2 shop-account">
                            <div className="sort-title-bx" data-name="Element Style 3">Element Style 3 <i className="fa fa-angle-double-right"></i></div>
                            {/* <!-- Product --> */}
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 m-b30">
                                        <div className="p-a30 border-1  m-auto">
                                            <div className="tab-content">
                                                <form id="login-info" className="tab-pane active">
                                                    <h4 className="font-weight-700">PERSONAL INFORMATION</h4>
                                                    <p className="font-weight-600">If you have an account with us, please log in.</p>
                                                    <div className="form-group">
                                                        <label className="font-weight-700">First Name *</label>
                                                        <input name="dzName" required="" className="form-control" placeholder="First Name" type="text" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="font-weight-700">Last Name *</label>
                                                        <input name="dzName" required="" className="form-control" placeholder="Last Name" type="text" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="font-weight-700">E-MAIL *</label>
                                                        <input name="dzName" required="" className="form-control" placeholder="Your Email Id" type="email" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="font-weight-700">PASSWORD *</label>
                                                        <input name="dzName" required="" className="form-control " placeholder="Type Password" type="password" />
                                                    </div>
                                                    <div className="text-left">
                                                        <button className="site-button button-lg radius-no outline outline-2">CREATE</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12 m-b30">
                                        <div className="p-a30 border-1 seth">
                                            <div className="tab-content nav">
                                                <form id="login" className="tab-pane active col-12 p-a0 ">
                                                    <h4 className="font-weight-700">LOGIN</h4>
                                                    <p className="font-weight-600">If you have an account with us, please log in.</p>
                                                    <div className="form-group">
                                                        <label className="font-weight-700">E-MAIL *</label>
                                                        <input name="dzName" required="" className="form-control" placeholder="Your Email Id" type="email" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="font-weight-700">PASSWORD *</label>
                                                        <input name="dzName" required="" className="form-control " placeholder="Type Password" type="password" />
                                                    </div>
                                                    <div className="text-left">
                                                        <button className="site-button m-r5 button-lg radius-no">login</button>
                                                        <a data-toggle="tab" href="#forgot-password" className="m-l5"><i className="fa fa-unlock-alt"></i> Forgot Password</a>
                                                    </div>
                                                </form>
                                                <form id="forgot-password" className="tab-pane fade  col-12 p-a0">
                                                    <h4 className="font-weight-700">FORGET PASSWORD ?</h4>
                                                    <p className="font-weight-600">We will send you an email to reset your password. </p>
                                                    <div className="form-group">
                                                        <label className="font-weight-700">E-MAIL *</label>
                                                        <input name="dzName" required="" className="form-control" placeholder="Your Email Id" type="email" />
                                                    </div>
                                                    <div className="text-left">
                                                        <a className="site-button outline gray button-lg radius-no" data-toggle="tab" href="#login">Back</a>
                                                        <button className="site-button pull-right button-lg radius-no">Submit</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Product END --> */}
                        </div>
                        {/* <!-- Get in touch --> */}
                        <div className="section-full overlay-primary-dark bg-img-fix" style={{ backgroundImage: "url(" + bg1 + ")" }}>
						<div className="sort-title-bx text-white" data-name="Element Style 4">Element Style 4 <i className="fa fa-angle-double-right"></i></div>
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
function FormBlog(){
	return(
		<>
			<div className="bg-white text-black p-a30 p-t40 form-tax align-self-center">
				<div className="row">
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mb-4">
						<div className="form-group">
							<label>choose your business</label>
							<select className="form-control">
								<option>Select Your Business</option>
								<option>Marketing</option>
								<option>IT Industries</option>
								<option>Management Industries</option>
								<option>Property Business</option>
							</select>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mb-4">
						<div className="form-group">
							<label>Country of residence</label>
							<select className="form-control">
								<option>Australia</option>
								<option>United State</option>
								<option>United Kingdom</option>
								<option>Germany</option>
								<option>Netherland</option>
							</select>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-12 mb-4">
						<div className="form-group">
							<label>employees</label>
							<select className="form-control">
								<option>Select Here</option>
								<option>0-20</option>
								<option>21-50</option>
								<option>51-150</option>
								<option>151-500</option>
								<option>500+</option>
							</select>
						</div>
					</div>
					<div className="col-xl-3 col-lg-6 col-md-3 col-sm-6 col-12 mb-4">
						<div className="form-group">
							<label>Tax Year</label>
							<select className="form-control">
								<option>2000-2005</option>
								<option>2006-2010</option>
								<option>2011-2015</option>
								<option>2016-2020</option>
							</select>
						</div>
					</div>
					<div className="col-xl-5 col-lg-12 col-md-5 col-sm-12 col-12 mb-4">
						<div className="form-group">
							<label>Yearly total income</label>
							<select className="form-control">
								<option>Select Range</option>
								<option>0 - 1 Million</option>
								<option>1 Million - 3 Million</option>
								<option>3 Million - 10 Million</option>
								<option>10 Million - 20 Million</option>
								<option>20Million+</option>
							</select>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xl-4 col-lg-5 col-md-3 col-sm-12 col-12 mb-4 d-flex">
						<div className="calculate align-self-end btn-block">
							<button className="site-button btn-block" type="button">Calculate</button>
						</div>
					</div>
					<div className="col-xl-8 col-lg-7 col-md-9 col-sm-12 col-12 mb-4">
						<div className="calculate">
							<div className="">
								<label>Total Payable Tax</label>
								<input type="text" className="form-control" placeholder="$000.00" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export {FormBlog};
export default ShortForm;