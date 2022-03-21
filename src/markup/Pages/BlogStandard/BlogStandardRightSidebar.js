import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './../../Layout/Header1';
import Footer from './../../Layout/Footer1';
import PageTitle from './../../Layout/PageTitle';
import Sidebar from './../../Element/Sidebar';
//import ProjectCarousel from '../element/project-carousel';
import {BlogPost} from './BlogStandard';
import bnr1 from './../../../images/banner/bnr9.jpg';

class BlogStandardRightSidebar extends Component {
    render() {
        return (
            <>
                <Header />

                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr dlab-bnr-inr-sm overlay-primary bg-pt" style={{ backgroundImage: "url(" + bnr1 + ")" }}>
						<PageTitle motherMenu='Blog Standard Right Sidebar' activeMenu='Blog Standard Right Sidebar' />
                    </div>
                    {/* <!-- inner page banner END --> */}
                    <div className="content-area">
                        <div className="container">
                            <div className="row">
                                {/* <!-- Left part start --> */}
                                <div className="col-md-7 col-lg-8 col-xl-9">	
									<BlogPost />	
                                    {/* <!-- Pagination start --> */}
                                    <div className="pagination-bx clearfix text-center">
                                        <ul className="pagination">
                                            <li className="previous"><Link to ={"#"}><i className="ti-arrow-left"></i> Prev</Link></li>
                                            <li className="active"><Link to ={"#"}>1</Link></li>
                                            <li><Link to ={"#"}>2</Link></li>
                                            <li><Link to ={"#"}>3</Link></li>
                                            <li className="next"><Link to ={"#"}>Next <i className="ti-arrow-right"></i></Link></li>
                                        </ul>
                                    </div>
                                    {/* <!-- Pagination END --> */}
                                </div>
                                {/* <!-- Left part END --> */}
								{/* <!-- Side bar start --> */}
                                <div className="col-md-5 col-lg-4 col-xl-3 sticky-top">
                                    <Sidebar />
                                </div>
                                {/* <!-- Side bar END --> */}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}
export default BlogStandardRightSidebar;