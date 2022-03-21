import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-component';
import Header from './../../Layout/Header1';
import Footer from './../../Layout/Footer1';
import PageTitle from './../../Layout/PageTitle';
import Sidebar from './../../Element/Sidebar';

//Images
import bnr1 from './../../../images/banner/bnr7.jpg';
import grid1 from './../../../images/blog/grid/pic1.jpg';
import grid2 from './../../../images/blog/grid/pic2.jpg';
import grid3 from './../../../images/blog/grid/pic3.jpg';
import grid4 from './../../../images/blog/grid/pic4.jpg';

const postBlog = [
	{images: grid1, }, {images: grid2, }, {images: grid3, },
	{images: grid4, }, {images: grid1, }, {images: grid2, },
	{images: grid1, }, {images: grid2, }, {images: grid3, },
	{images: grid4, }, {images: grid1, }, {images: grid2, },
];

// Masonry section
const masonryOptions = {                                          
    transitionDuration: 0
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }
// Masonry section end


class BlogClassicLeftSidebar extends Component {


    render() {
        return (
            <>
                <Header />
                <div className="page-content bg-white">
                    <div className="dlab-bnr-inr dlab-bnr-inr-sm overlay-primary bg-pt" style={{ backgroundImage: "url(" + bnr1 + ")" }}>
						<PageTitle motherMenu='Blog Classic Grid Left Sidebar' activeMenu='Blog Classic Grid Left Sidebar' />
                    </div>
                    <div className="content-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-xl-3 col-md-5 sticky-top">
                                    <Sidebar />
                                </div>
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
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </>
        )
    }
}
function DlabBlogGrid(){
	return(
		<>
			<div className="dlab-blog-grid-3 " id="masonry" >
				<Masonry
					className={'my-gallery-class'} // default ''
					options={masonryOptions} // default {}
					disableImagesLoaded={false} // default false
					updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
					imagesLoadedOptions={imagesLoadedOptions} // default {}
					>
					{postBlog.map((data,index)=>(
						<div className="post card-container col-xl-6 col-lg-6 col-md-12 col-xs-12" key={index}>
							<div className="blog-post blog-grid blog-rounded blog-effect1">
								<div className="dlab-post-media dlab-img-effect "><Link to={"#"}><img src={data.images} alt="" /></Link> </div>
								<div className="dlab-info p-a20 border-1">
									<div className="dlab-post-title ">
										<h4 className="post-title"><Link to={"#"}>Title of first blog post</Link></h4>
									</div>
									<div className="dlab-post-meta">
										<ul className="d-flex align-items-center">
											<li className="post-date"> <i className="fa fa-calendar"></i><strong>10 Aug</strong> <span> 2016</span> </li>
											<li className="post-author"><i className="fa fa-user"></i>By <Link to={"#"}>Jone</Link> </li>
										</ul>
									</div>
									<div className="dlab-post-text">
										<p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.</p>
									</div>
									<div className="dlab-post-readmore blog-share">
										<Link to={"#"} title="READ MORE" rel="bookmark" className="site-button outline outline-1">READ MORE
											<i className="fa fa-long-arrow-right ml-1"></i>
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
						</div>
					))}
				</Masonry>	
			</div>
		</>
	)	
}
export {DlabBlogGrid};
export default BlogClassicLeftSidebar;