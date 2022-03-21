import React,{Fragment, Component} from 'react';

class FormStyle extends Component{
	render(){
		return(
			<Fragment>
				<div className="container">
					<div className="row">
						<div className="col-lg-5 col-md-5 content-inner chosesus-content text-white">
							<h2 className="box-title m-b15 " >Let's get in touch<span className="bg-primary"></span></h2>
							<p className="font-16 op8" >Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days.</p>
							<h3 className="font-weight-500 m-b50 op6 " >By 700+ customers for 3200+ Web and Mobile App development projects.</h3>
							<h4 className="" >& What you will get:</h4>
							<ul className="list-checked primary " >
								<li><span>Contrary to popular belief, Lorem Ipsum is not simply</span></li>
								<li><span>Random text. It has roots in a piece of classical Latin literature</span></li>
								<li><span>Latin professor at Hampden-Sydney College in Virginia</span></li>
							</ul>
						</div>
						<div className="col-lg-7 col-md-7 m-b30">
							<form className="inquiry-form  dzForm"  action="script/contact.php">
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
			</Fragment>
		)
	}
}
export default FormStyle;