import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './../../Layout/Header1';
import Footer from './../../Layout/Footer1';
import PageTitle from './../../Layout/PageTitle';
import {OrderDetail} from './../Login';
import bnr from './../../../images/banner/bnr8.jpg';

class ShopLogin extends Component {
    render() {
        return (
            <>
                <Header />

                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr overlay-primary bg-pt" style={{ backgroundImage: "url(" + bnr + ")" }}>
                        <PageTitle motherMenu ='Login' activeMenu='Login'  />
                    </div>
                    {/* <!-- inner page banner END --> */}
                    {/* <!-- contact area --> */}
                    <div className="section-full content-inner shop-account">
                        {/* <!-- Product --> */}
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <h2 className="font-weight-700 m-t0 m-b40">ALREADY REGISTERED?</h2>
                                </div>
                            </div>
                            <div className="row dzseth">
                                <div className="col-md-6 col-sm-12 m-b30">
                                    <div className="p-a30 border-1 seth">
                                        <div className="tab-content">
                                            <h4 className="font-weight-700">NEW CUSTOMER</h4>
                                            <p className="font-weight-600">By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.</p>
                                            <Link to={"./shop-register"} className="site-button m-r5 button-lg radius-no" >CREATE AN ACCOUNT</Link>
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
                                                    <Link to={"#"} className="site-button outline gray button-lg radius-no" data-toggle="tab" >Back</Link>
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
					
                    <OrderDetail />
                    
					{/* <!-- contact area  END --> */}
                </div>

                <Footer />
            </>
        )
    }
}
export default ShopLogin;