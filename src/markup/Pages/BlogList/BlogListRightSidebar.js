import React, { Component } from 'react';
import Header from './../../Layout/Header1';
import Footer from './../../Layout/Footer1';
import PageTitle from './../../Layout/PageTitle';
import Sidebar from './../../Element/Sidebar';
import {ListMainBlog} from './BlogListLeftSidebar';

//Images
import bnr1 from './../../../images/banner/bnr3.jpg';

class BlogListRightSidebar extends Component {

    render() {
        return (
            <>
                <Header />
                <div className="page-content bg-white">
                    <div className="dlab-bnr-inr dlab-bnr-inr-sm overlay-primary bg-pt" style={{ backgroundImage: "url(" + bnr1 + ")" }}>
						<PageTitle motherMenu='List Blog Right Sidebar' activeMenu='List Blog Right Sidebar' />
                    </div>
                    <div className="content-area">
                        <div className="container">
                            <div className="row">
								{/* Main Blog List Sidebar */}
									<ListMainBlog    />
								{/* Main Blog List Sidebar End*/}
								<div className="col-lg-3 sticky-top">
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
export default BlogListRightSidebar;