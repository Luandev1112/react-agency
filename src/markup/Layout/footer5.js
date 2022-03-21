import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer5 extends Component {
    render() {
        return (
            <>
                <footer className="site-footer text-uppercase footer-white business-footer">
                    <div className="footer-top">
                        <div className="container" >
                            <div className="row">
                                <div className="col-5 col-lg-2 col-md-6 col-sm-6 footer-col-4">
                                    <div className="widget widget_services border-0">
                                        <h5 className="m-b30 text-white">Company</h5>
                                        <ul>
                                            <li><Link to={"#"}>About Us </Link></li>
                                            <li><Link to={"#"}>Home </Link></li>
                                            <li><Link to={"#"}>Contact Us</Link></li>
                                            <li><Link to={"#"}>About Us</Link></li>
                                            <li><Link to={"#"}>Our Services</Link></li>
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
                                            <li><Link to={"#"}>Portfolio</Link></li>
                                            <li><Link to={"#"}>Project Details</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 footer-col-4">
                                    <div className="widget widget_getintuch">
                                        <h5 className="m-b30 text-white ">Contact us</h5>
                                        <ul>
                                            <li><i className="ti-location-pin"></i><strong>address</strong> demo address #8901 Marmora Road Chi Minh City, Vietnam </li>
                                            <li><i className="ti-mobile"></i><strong>phone</strong>0800-123456 (24/7 Support Line)</li>
                                            <li><i className="ti-email"></i><strong>email</strong>info@example.com</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 footer-col-4 ">
                                    <div className="widget">
                                        <h5 className="m-b30 text-white">Subscribe To Our Newsletter</h5>
                                        <p className="text-capitalize m-b20">If you have any questions, you can contact with us so that we can give you a satisfying answer. Subscribe to our newsletter to get our latest products.</p>
                                        <div className="subscribe-form m-b20">
                                            <form className="dzSubscribe" action="script/mailchamp.php" method="post">
                                                <div className="dzSubscribeMsg"></div>
                                                <div className="input-group">
                                                    <input name="dzEmail" required="required" className="form-control" placeholder="Your Email Id" type="email" />
                                                    <span className="input-group-btn">
                                                        <button name="submit" value="Submit" type="submit" className="site-button">Subscribe</button>
                                                    </span>
                                                </div>
                                            </form>
                                        </div>
                                        <ul className="list-inline m-a0">
                                            <li><Link to={"#"} className="site-button facebook circle mr-1"><i className="fa fa-facebook"></i></Link></li>
                                            <li><Link to={"#"} className="site-button google-plus circle mr-1"><i className="fa fa-google-plus"></i></Link></li>
                                            <li><Link to={"#"} className="site-button linkedin circle mr-1"><i className="fa fa-linkedin"></i></Link></li>
                                            <li><Link to={"#"} className="site-button instagram circle mr-1"><i className="fa fa-instagram"></i></Link></li>
                                            <li><Link to={"#"} className="site-button twitter circle mr-1"><i className="fa fa-twitter"></i></Link></li>
                                        </ul>
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

export default Footer5;