import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './../../Layout/Header1';
import Footer from './../../Layout/Footer1';
import PageTitle from './../../Layout/PageTitle';

import bnr1 from './../../../images/banner/bnr6.jpg';

class Error405 extends Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr dlab-bnr-inr-sm overlay-primary bg-pt" style={{ backgroundImage: "url(" + bnr1 + ")" }}>
                        <PageTitle motherMenu='Error 405' activeMenu='Error 405' />
                    </div>
                    {/* <!-- inner page banner END --> */}
                    {/* <!-- Error Page --> */}
                    <div className="section-full dz_error-405 content-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5 align-self-center">
                                    <div className="dz_error">405</div>
                                </div>
                                <div className="col-lg-7 m-b30">
                                    <h2 className="error-head">Server Error!</h2>
                                    <div className="dlab-divider bg-gray-dark"></div>
                                    <p className="font-16 error-content">You can go back to the Main Page by clicking the button.</p>
                                    <Link to={"./"} className="site-button">Go To Home</Link>
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
export default Error405;