import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './../../Layout/Header1';
import Footer from './../../Layout/Footer1';
import PageTitle from './../../Layout/PageTitle';

//Images
import bnr1 from './../../../images/banner/bnr2.jpg';
import thum1 from './../../../images/blog/default/thum1.jpg';
import thum2 from './../../../images/blog/default/thum2.jpg';
import thum3 from './../../../images/blog/default/thum3.jpg';
import thum4 from './../../../images/blog/default/thum4.jpg';

const imageBlog=[
	{image: thum1, }, {image: thum2, }, {image: thum3, },
	{image: thum4, }, {image: thum1, }, {image: thum2, },
];

class BlogStandard extends Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr dlab-bnr-inr-sm overlay-primary bg-pt" style={{ backgroundImage: "url(" + bnr1 + ")" }}>
                        <PageTitle motherMenu='Blog Standard' activeMenu='Blog Standard' />
                    </div>
                    {/* <!-- inner page banner END --> */}
                    {/* <!-- contact area --> */}
                    <div className="content-area">
                        <div className="container max-w900">
                            {/* <!-- Blog large img --> */}
								<BlogPost />
							
                            {/* <!-- Blog large img END --> */}
                            {/* <!-- Pagination start --> */}
                            <div className="pagination-bx clearfix text-center">
                                <ul className="pagination">
                                    <li className="previous"><Link to={"#"}><i className="ti-arrow-left"></i> Prev</Link></li>
                                    <li className="active"><Link to={"#"}>1</Link></li>
                                    <li><Link to={"#"}>2</Link></li>
                                    <li><Link to={"#"}>3</Link></li>
                                    <li className="next"><Link to={"#"}>Next <i className="ti-arrow-right"></i></Link></li>
                                </ul>
                            </div>
                            {/* <!-- Pagination END --> */}
                        </div>
                    </div>
                </div>

                <Footer />
            </>
        )
    }
}

function BlogPost(){
	return(
		<>
			{imageBlog.map((item,index)=>(
				<div className="blog-post blog-lg" key={index}>
					<div className="dlab-post-media dlab-img-effect zoom-slow">
						<Link to={"#"}><img src={item.image} alt="" /></Link> 
					</div>
					<div className="dlab-post-info">
						<div className="dlab-post-title ">
							<h4 className="post-title"><Link to={"#"}>Title of first blog post</Link></h4>
						</div>
						<div className="dlab-post-meta">
							<ul className="d-flex align-items-center">
								<li className="post-date"> <i className="fa fa-calendar"></i><strong>10 Aug</strong> <span> 2016</span> </li>
								<li className="post-author"><i className="fa fa-user"></i>By <Link to={"#"}>demongo</Link> </li>
								<li className="post-comment"><i className="fa fa-comments"></i><Link to={"#"}>0 Comments</Link> </li>
							</ul>
						</div>
						<div className="dlab-post-text">
							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
							</p>
						</div>
						<div className="dlab-post-readmore blog-share">
							<Link to={"#"} title="READ MORE" rel="bookmark" className="site-button outline outline-1">READ MORE
								<i className="fa fa-long-arrow-right m-l5"></i>
							</Link>
							<div className="share-btn">
								<ul className="clearfix">
									<li><Link to={"#"} className="site-button sharp"><i className="fa fa-facebook"></i></Link></li>
									<li><Link to={"#"} className="site-button sharp"><i className="fa fa-google-plus"></i></Link></li>
									<li><Link to={"#"} className="site-button sharp"><i className="fa fa-linkedin"></i></Link></li>
									<li><Link to={"#"} className="site-button sharp"><i className="fa fa-twitter"></i></Link></li>
									<li className="share-button"><Link to={"#"} className="site-button sharp"><i className="fa fa-share-alt"></i></Link></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			))}	
		</>
	)
}
export {BlogPost};
export default BlogStandard;