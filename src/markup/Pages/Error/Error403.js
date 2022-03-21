import React, { Component } from 'react';
import Header from './../../Layout/Header1';
import Footer from './../../Layout/Footer1';
import PageTitle from './../../Layout/PageTitle';

import bnr1 from '../../../images/banner/bnr1.jpg';
import bnr2 from '../../../images/background/bg1.jpg';

class Error403 extends Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr dlab-bnr-inr-sm overlay-primary bg-pt" style={{ backgroundImage: "url(" + bnr1 + ")" }}>
                        <PageTitle motherMenu='Error 403' activeMenu='Error 403' />
                    </div>
                    {/* <!-- inner page banner END --> */}
                    {/* <!-- Error Page --> */}
                    <div className="section-full dz_error-405 content-inner overlay-white-dark op95" style={{ backgroundImage: "url(" + bnr2 + ")",  backgroundPosition: "50% 50%" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5 align-self-center">
                                    <div className="dz_error">403</div>
                                </div>
                                <div className="col-lg-7 m-b30">
                                    <h2 className="error-head text-primary">Something went wrong !</h2>
                                    <p className="font-16 text-black">We are sorry but it appears that the page you are looking for could not be found. We are working on it and we will get it fixed as soon as possible.</p>
                                    <div className="dlab-divider bg-black op3"></div>
                                    <p className="text-black">You can go back to the Main Page by clicking the button.</p>
									<div className="subscribe-form p-a0 max-w400">
										<form>
											<div className="input-group">
												<input name="text" className="form-control radius-no bg-black" placeholder="Search For Pages" type="text" />
												<span className="input-group-btn">
													<button type="submit" className="site-button radius-no">SEARCH</button>
												</span>
											</div>
										</form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Error Page END --> */}
                </div>
                <Footer />
            </>
        )
    }
}
export default Error403;