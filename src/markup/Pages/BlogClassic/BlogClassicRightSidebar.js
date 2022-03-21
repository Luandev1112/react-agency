import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './../../Layout/Header1';
import Footer from './../../Layout/Footer1';
import PageTitle from './../../Layout/PageTitle';
import Sidebar from './../../Element/Sidebar';
import {DlabBlogGrid} from './BlogClassicLeftSidebar';

//Images
import bnr1 from './../../../images/banner/bnr6.jpg';

class BlogClassicRightSidebar extends Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content bg-white">
                    <div className="dlab-bnr-inr dlab-bnr-inr-sm overlay-primary bg-pt" style={{ backgroundImage: "url(" + bnr1 + ")" }}>
						<PageTitle motherMenu='Blog Classic Grid Right Sidebar' activeMenu='Blog Classic Grid Right Sidebar' />
                    </div>
                    <div className="content-area">
                        <div className="container">
                            <div className="row">
								<div className="col-lg-8 col-xl-9 col-md-7">
                                    <DlabBlogGrid />
                                    <div className="pagination-bx clearfix text-center">
                                        <ul className="pagination">
											<li className="previous"><Link to={"#"}><i className="ti-arrow-left"></i> Prev</Link></li>
											<li className="active"><Link to={"#"}>1</Link></li>
											<li><Link to={"#"}>2</Link></li>
											<li><Link to={"#"}>3</Link></li>
											<li className="next"><Link to={"#"}>Next <i className="ti-arrow-right"></i></Link></li>
										</ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xl-3 col-md-5 sticky-top">
                                    <Sidebar />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}

export default BlogClassicRightSidebar;