import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';
import Header4 from './../Layout/header4';
import Footer5 from './../Layout/footer5';
import Index6Carousel from './../Element/Index6Carousel';

//Images
import bg4 from './../../images/background/bg4.png';
import slider9 from './../../images/main-slider/slide9.png';
import bgslider9 from './../../images/main-slider/slide9.jpg';
import bg6 from './../../images/background/bg6.png';
import bg9 from './../../images/background/bg9.png';
import bg10 from './../../images/background/bg10.png';
import bg8 from './../../images/background/bg8.png';
import bubble1 from './../../images/bubbles/bubbles1.png';
import bubble2 from './../../images/bubbles/bubbles2.png';
import bubble3 from './../../images/bubbles/bubbles3.png';
import bubble4 from './../../images/bubbles/bubbles4.png';
import bubble5 from './../../images/bubbles/bubbles5.png';
import iconbubble1 from './../../images/bubbles/icon1.png';
import iconbubble2 from './../../images/bubbles/icon2.png';
import iconbubble3 from './../../images/bubbles/icon3.png';
import iconbubble4 from './../../images/bubbles/icon4.png';
import iconbubble5 from './../../images/bubbles/icon5.png';

import watch1 from './../../images/product/watch/item1.jpg';
import watch2 from './../../images/product/watch/item2.jpg';
import watch3 from './../../images/product/watch/item3.jpg';
import watch4 from './../../images/product/watch/item4.jpg';
import watch5 from './../../images/product/watch/item5.jpg';
import watch6 from './../../images/product/watch/item6.jpg';

import test1 from './../../images/testimonials/pic1.jpg';
import test2 from './../../images/testimonials/pic2.jpg';
import test3 from './../../images/testimonials/pic3.jpg';

import blog1 from './../../images/blog/latest-blog/pic1.png';
import blog2 from './../../images/blog/latest-blog/pic2.png';
import blog3 from './../../images/blog/latest-blog/pic3.png';

import team1 from './../../images/our-team/pic1.jpg';
import team2 from './../../images/our-team/pic2.jpg';
import team3 from './../../images/our-team/pic3.jpg';
import sign1 from './../../images/sign/sign1.png';
import sign2 from './../../images/sign/sign2.png';
import sign3 from './../../images/sign/sign3.png';

const flipBlog = [
	{image: test1}, {image: test2}, {image: test3}, 
];
const dalbBlog = [
	{image: team1, image2: sign1, title:'Oliver James',}, 
	{image: team2, image2: sign2, title:'Enna Matthews',},
	{image: team3, image2: sign3, title:'Nick Marshall',}, 
];

const Index6 = (props) => {
	
	let resizeMargin = () => {
		var screenWidth = window.innerWidth;
		if(screenWidth >= 1280 ){
			var elmnt = document.querySelector('.container');
			var containerSize = elmnt.offsetWidth;
			
			var getMargin = (screenWidth - containerSize)/2;
			
			var setResizeMarginButton = document.getElementsByClassName("setResizeMargin");
			var class_len = setResizeMarginButton !== null ? setResizeMarginButton.length : 0;
			for(var i=0; i < class_len; i++) {
				setResizeMarginButton[i].setAttribute("style", 'margin-left:'+getMargin+'px') 
			}
			
		}
	};
		
	 useEffect(() => {
		resizeMargin();
	  }, []); 
	
	var i = 0;
		
		// Placeholder Animation Start
		var inputSelector = document.querySelectorAll('input, textarea');
		
		for (i = 0; i < inputSelector.length; i++) {
			inputSelector[i].addEventListener('focus', function(event) {
				return this.parentElement.parentElement.classList.add("focused");
			});
		}
		
		
		for (i = 0; i < inputSelector.length; i++) {
			inputSelector[i].addEventListener('blur', function(event) {
				var inputValue = this.value;	
				if ( inputValue === '' ) {
					this.parentElement.parentElement.classList.remove('filled');
					this.parentElement.parentElement.classList.remove('focused');  
				} else {
					this.parentElement.parentElement.classList.add('filled');
				}
			});
		}
    
        return (
            <>
                <Header4 />

                <div className="page-content bg-white rubik-font">

					<div className="home-banner-2" style={{backgroundImage:"url("+ bgslider9 +")" }}>
						<div className="container">
							<div className="home-bnr-inner-2 row align-items-center">
								<div className="home-bnr-content-2 col-md-6">
									<h4 className="sub-title">We’re Awesome & Professionals</h4>
									<h2 className="dz-title text-primary"><span>Best ICO Strategy</span><br/><strong>On Blockchain</strong></h2>
									<p>Aliquam vulputate, tortor nec commodo ultricies, <br/>vitae viverra urna nulla sed turpis. Nullam lacinia <br/>faucibus risus, a euismod.</p>
									<Link to={"#"} className="site-button button-md radius-xl">Explore Now</Link>
								</div>	
								<div className="col-md-6">
									<div className="curve-img">
										<img src={slider9} alt="" className="slide-img-curve"/>
									</div>
								</div>
							</div>
						</div>
					</div>

                    <div className="content-block">
                        {/* <!-- Coded & Maintained --> */}
                        <div className="section-full content-inner-2 about-bx2" style={{ backgroundImage: "url(" + bg4 + ")", backgroundPosition: "top right", backgroundRepeat: "no-repeat" }}>
                            <div className="container">
                                <div className="row align-items-center d-flex">
                                    <div className="col-lg-8 col-md-7">
                                        <div className="row">
                                            <div className="col-5 bubbx1">
                                                <div className="bubbles-bx bubbles-bx1"  style={{ backgroundImage: "url(" + bubble1 + ")" }}>
                                                    <div className="bubinbox">
                                                        <div className="text-primary">
                                                            <span className="icon-cell icon-lg"><img src={iconbubble1} alt="" /></span>
                                                        </div>
                                                        <h5 className="dlab-tilte">Diamond</h5>
                                                    </div>
                                                </div>
                                                <div className="bubbles-bx bubbles-bx2 ml-auto " style={{ backgroundImage: "url(" + bubble3 + ")" }}>
                                                    <div className="bubinbox">
                                                        <div className="text-primary">
                                                            <span className="icon-cell icon-lg"><img src={iconbubble3} alt="" /></span>
                                                        </div>
                                                        <h5 className="dlab-tilte">Diamond</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-3 bubbx1">
                                                <div className="bubbles-bx bubbles-bx3 " style={{ backgroundImage: "url(" + bubble2 + ")" }}>
                                                    <div className="bubinbox">
                                                        <div className="text-primary">
                                                            <span className="icon-cell icon-lg"><img src={iconbubble2} alt="" /></span>
                                                        </div>
                                                        <h5 className="dlab-tilte">Cube</h5>
                                                    </div>
                                                </div>
                                                <div className="bubbles-bx bubbles-bx4 " style={{ backgroundImage: "url(" + bubble4 + ")" }}>
                                                    <div className="bubinbox">
                                                        <div className="text-primary">
                                                            <span className="icon-cell icon-lg"><img src={iconbubble4} alt="" /></span>
                                                        </div>
                                                        <h5 className="dlab-tilte">Delicious</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-4 bubbx1 d-flex align-items-center">
                                                <div className="bubbles-bx bubbles-bx5 " style={{ backgroundImage: "url(" + bubble5 + ")" }}>
                                                    <div className="bubinbox">
                                                        <div className="text-primary">
                                                            <span className="icon-cell icon-lg"><img src={iconbubble5} alt="" /></span>
                                                        </div>
                                                        <h5 className="dlab-tilte">G & G</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-5 title-bx about-bx2-content text-right ">
                                        <h2>Smartly Coded & Maintained</h2>
                                        <div className="dlab-separator bg-primary op8"></div>
                                        <p>Aliquam vulputate, tortor nec commodo ultricies, vitae viverra urna nulla sed turpis. Nullam lacinia faucibus risus, a euismod lorem tincidunt id.
										Vestibulum imperdiet nibh vel magna lacinia ultrices. Nam ac elit a ante commodo tristique</p>
                                        <Link to={"#"} className="site-button radius-xl button-md btn-long">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Coded & Maintained End --> */}
                        {/* <!-- Our Product Gallery --> */}
                        <div className="section-full content-inner our-product-gallery">
                            <div className="setResizeMargin">
                                <div className="section-head title-bx">
                                    <h2>Our Product Gallery</h2>
                                </div>
                                <div className="content-section">
									<Index6Carousel />
                                    <div className="m-t30">
                                        <Link to={"#"} className="site-button button-md btn-long radius-xl">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Our Product Gallery END --> */}
                        {/* <!-- Our Branded Products --> */}
                        <div className="section-full business-pro-blog" style={{ backgroundImage: "url(" + bg6 + ")" }}>
                            {/* <!-- Our Branded Products --> */}
                            <div className="content-inner business-product">
                                <div className="container">
                                    <div className="section-head title-bx text-center">
                                        <h2>Our Branded Products</h2>
                                    </div>
                                    <div className="row align-items-center d-flex">
                                        <div className="col-md-12 col-lg-3">
                                            <div className="product-box zoomIn" >
                                                <div className="product-img">
                                                    <img src={watch1} alt="" />
                                                </div>
                                                <div className="product-details">
                                                    <h4 className="product-title"><Link to={"./shop-product-details"}>Product Name here</Link></h4>
                                                    <span className="product-tage">Sports Watch</span>
                                                    <ul className="rating-star">
                                                        <li className="active"><i className="fa fa-star"></i></li>
                                                        <li className="active"><i className="fa fa-star"></i></li>
                                                        <li className="active"><i className="fa fa-star"></i></li>
                                                        <li className="active"><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                    </ul>
                                                    <div className="product-price">
                                                        <h4>$67.00</h4>
                                                    </div>
                                                    <Link to={"./shop-product-details"} className="site-button button-sm radius-xl">Shop Now</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6">
                                            <div className="row align-items-end d-flex">
                                                <div className="col-lg-8 col-md-6 col-sm-12">
                                                    <div className="product-box product-lg product-right  zoomIn" >
                                                        <div className="product-details">
                                                            <h4 className="product-title"><Link to={"./shop-product-details"}>Product Name here</Link></h4>
                                                            <span className="product-tage">Sports Watch</span>
                                                            <ul className="rating-star">
                                                                <li className="active"><i className="fa fa-star"></i></li>
                                                                <li className="active"><i className="fa fa-star"></i></li>
                                                                <li className="active"><i className="fa fa-star"></i></li>
                                                                <li className="active"><i className="fa fa-star"></i></li>
                                                                <li><i className="fa fa-star"></i></li>
                                                            </ul>
                                                            <div className="product-price">
                                                                <h4>$67.00</h4>
                                                            </div>
                                                            <Link to={"./shop-product-details"} className="site-button button-sm radius-xl">Shop Now</Link>
                                                        </div>
                                                        <div className="product-img">
                                                            <img src={watch2} alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-sm-6">
                                                    <div className="product-box product-sm zoomIn" >
                                                        <div className="product-img">
                                                            <img src={watch3} alt="" />
                                                        </div>
                                                        <div className="product-details">
                                                            <h4 className="product-title"><Link to={"./shop-product-details"}>Product Name here</Link></h4>
                                                            <span className="product-tage">Sports Watch</span>
                                                            <ul className="rating-star">
                                                                <li className="active"><i className="fa fa-star"></i></li>
                                                                <li className="active"><i className="fa fa-star"></i></li>
                                                                <li className="active"><i className="fa fa-star"></i></li>
                                                                <li className="active"><i className="fa fa-star"></i></li>
                                                                <li><i className="fa fa-star"></i></li>
                                                            </ul>
                                                            <div className="product-price">
                                                                <h4>$67.00</h4>
                                                            </div>
                                                            <Link to={"./shop-product-details"} className="site-button button-sm radius-xl">Shop Now</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-sm-6 d-flex align-self-start">
                                                    <div className="product-box product-sm  zoomIn" >
                                                        <div className="product-img">
                                                            <img src={watch5} alt="" />
                                                        </div>
                                                        <div className="product-details">
                                                            <h4 className="product-title"><Link to={"./shop-product-details"}>Product Name here</Link></h4>
                                                            <span className="product-tage">Sports Watch</span>
                                                            <ul className="rating-star">
                                                                <li className="active"><i className="fa fa-star"></i></li>
                                                                <li className="active"><i className="fa fa-star"></i></li>
                                                                <li className="active"><i className="fa fa-star"></i></li>
                                                                <li className="active"><i className="fa fa-star"></i></li>
                                                                <li><i className="fa fa-star"></i></li>
                                                            </ul>
                                                            <div className="product-price">
                                                                <h4>$67.00</h4>
                                                            </div>
                                                            <Link to={"./shop-product-details"} className="site-button button-sm radius-xl">Shop Now</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-8 col-md-6 col-sm-12">
                                                    <div className="product-box product-lg product-right  zoomIn" >
                                                        <div className="product-details">
                                                            <h4 className="product-title"><Link to={"./shop-product-details"}>Product Name here</Link></h4>
                                                            <span className="product-tage">Sports Watch</span>
                                                            <ul className="rating-star">
                                                                <li className="active"><i className="fa fa-star"></i></li>
                                                                <li className="active"><i className="fa fa-star"></i></li>
                                                                <li className="active"><i className="fa fa-star"></i></li>
                                                                <li className="active"><i className="fa fa-star"></i></li>
                                                                <li><i className="fa fa-star"></i></li>
                                                            </ul>
                                                            <div className="product-price">
                                                                <h4>$67.00</h4>
                                                            </div>
                                                            <Link to={"./shop-product-details"} className="site-button button-sm radius-xl">Shop Now</Link>
                                                        </div>
                                                        <div className="product-img">
                                                            <img src={watch6} alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-3">
                                            <div className="product-box  zoomIn" >
                                                <div className="product-details">
                                                    <h4 className="product-title"><Link to={"./shop-product-details"}>Product Name here</Link></h4>
                                                    <span className="product-tage">Sports Watch</span>
                                                    <ul className="rating-star">
                                                        <li className="active"><i className="fa fa-star"></i></li>
                                                        <li className="active"><i className="fa fa-star"></i></li>
                                                        <li className="active"><i className="fa fa-star"></i></li>
                                                        <li className="active"><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                    </ul>
                                                    <div className="product-price">
                                                        <h4>$67.00</h4>
                                                    </div>
                                                    <Link to={"./shop-product-details"} className="site-button button-sm radius-xl">Shop Now</Link>
                                                </div>
                                                <div className="product-img">
                                                    <img src={watch4} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Our Branded Products END --> */}
                            {/* <!-- Our Featured Products --> */}
                            <div className="content-inner our-featured">
                                <div className="setResizeMargin">
                                    <div className="row m-a0 d-flex align-items-center">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="section-head title-bx">
                                                <h2>Our Featured  <br /> Products</h2>
                                                <h3 className="text-primary font-weight-500">Pricing starts from 30$</h3>
                                                <p className="m-b30">Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.</p>
                                                <Link to={"#"} className="site-button button-long button-md radius-xl">Read More</Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-8 col-md-6 text-right">
                                            <div className="feature-img-bx" >
                                                <img src={bg8} alt="" className="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Our Featured Products END --> */}
                        </div>
                        {/* <!-- Customer Review  --> */}
                        <div className="content-inner pro-client-review">
                            <div className="container">
                                <div className="section-head title-bx text-center">
                                    <h2>What our Customer Reviews <br /> About Us</h2>
                                </div>
                                <div className="row">
									{flipBlog.map((data,index)=>(
										<div className="col-lg-4 col-md-4 col-sm-12" key={index}>
											<div className="flip-bx testimonial-flip" >
												<div className="front">
													<div className="inner text-white">
														<div className="testimonial-pic radius">
															<img src={data.image} alt="" width="100" height="100" />
														</div>
														<div className="testimonial-detail">
															<strong className="testimonial-name">David Matin</strong>
															<span className="testimonial-position">Client</span>
														</div>
													</div>
												</div>
												<div className="back">
													<div className="inner text-white">
														<p className="m-b10">Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
														<div className="testimonial-detail">
															<strong className="testimonial-name">David Matin</strong>
															<span className="testimonial-position">Student</span>
														</div>
													</div>
												</div>
											</div>
										</div>
									))}
                                </div>
                            </div>
                        </div>
                        {/* <!-- Customer Review END --> */}
                        {/* <!-- Our Recent Blog Posts --> */}
                        <div className="content-inner business-blog">
                            <div className="container">
                                <div className="section-head title-bx text-center">
                                    <h2>Our Recent Blog Posts</h2>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="blog-post blog-bx blog-img-bottom ">
                                            <div className="dlab-post-info">
                                                <div className="blog-number">01</div>
                                                <div className="dlab-post-title ">
                                                    <h3 className="post-title"><Link to={"#"}>How to find, install, apps on your Apple Watch</Link></h3>
                                                </div>
                                                <div className="dlab-post-meta">
                                                    <ul className="d-flex align-items-center">
                                                        <li className="post-author"><i className="ti-user"></i><Link to={"#"}>Serenity Caldwell</Link></li>
                                                        <li className="post-comment"><Link to={"#"}>2 Comments</Link> </li>
                                                        <li className="post-date">10 Aug</li>
                                                    </ul>
                                                </div>
                                                <div className="dlab-post-text">
                                                    <p>Third-party Apple Watch apps aren't truly apps — they're iPhone app extensions. As such, when you download an iPhone app with an Apple</p>
                                                </div>
                                                <div className="dlab-post-readmore blog-share">
                                                    <Link to={"#"} title="READ MORE" rel="bookmark" className="site-button-link"><i className="fa fa-long-arrow-right"></i></Link>
                                                </div>
                                            </div>
                                            <div className="dlab-post-media blog-curve-img">
                                                <Link to={"#"}>
                                                    <img src={blog1} alt="" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="blog-post blog-bx  ">
                                            <div className="dlab-post-media blog-curve-img">
                                                <Link to={"#"}><img src={blog2} alt="" /></Link>
                                            </div>
                                            <div className="dlab-post-info">
                                                <div className="blog-number">02</div>
                                                <div className="dlab-post-title ">
                                                    <h3 className="post-title"><Link to={"#"}>How to find, install, apps on your Apple Watch</Link></h3>
                                                </div>
                                                <div className="dlab-post-meta">
                                                    <ul className="d-flex align-items-center">
                                                        <li className="post-author"><i className="ti-user"></i><Link to={"#"}>Serenity Caldwell</Link></li>
                                                        <li className="post-comment"><Link to={"#"}>2 Comments</Link> </li>
                                                        <li className="post-date">10 Aug</li>
                                                    </ul>
                                                </div>
                                                <div className="dlab-post-text">
                                                    <p>Third-party Apple Watch apps aren't truly apps — they're iPhone app extensions. As such, when you download an iPhone app with an Apple</p>
                                                </div>
                                                <div className="dlab-post-readmore blog-share">
                                                    <Link to={"#"} title="READ MORE" rel="bookmark" className="site-button-link"><i className="fa fa-long-arrow-right"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="blog-post blog-bx blog-img-bottom " >
                                            <div className="dlab-post-info">
                                                <div className="blog-number">03</div>
                                                <div className="dlab-post-title ">
                                                    <h3 className="post-title"><Link to={"#"}>How to find, install, apps on your Apple Watch</Link></h3>
                                                </div>
                                                <div className="dlab-post-meta">
                                                    <ul className="d-flex align-items-center">
                                                        <li className="post-author"><i className="ti-user"></i><Link to={"#"}>Serenity Caldwell</Link></li>
                                                        <li className="post-comment"><Link to={"#"}>2 Comments</Link> </li>
                                                        <li className="post-date">10 Aug</li>
                                                    </ul>
                                                </div>
                                                <div className="dlab-post-text">
                                                    <p>Third-party Apple Watch apps aren't truly apps — they're iPhone app extensions. As such, when you download an iPhone app with an Apple</p>
                                                </div>
                                                <div className="dlab-post-readmore blog-share">
                                                    <Link to={"#"} title="READ MORE" rel="bookmark" className="site-button-link"><i className="fa fa-long-arrow-right"></i></Link>
                                                </div>
                                            </div>
                                            <div className="dlab-post-media blog-curve-img">
                                                <Link to={"#"}><img src={blog3} alt="" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Our Recent Blog Posts END --> */}
                        {/* <!-- Newsletter --> */}
                        <div className="content-inner newsletter-bx">
                            <div className="container">
                                <form className="row text-white dezPlaceAni align-items-center dzSubscribe m-lr0 "  action="script/mailchamp.php" method="post">
                                    <div className="col-xl-5 col-lg-6 col-md-12">
                                        <div className="title-bx">
                                            <h2 className="m-b0">Join our monthly <br /> newsletter</h2>
                                        </div>
                                    </div>
                                    <div className="col-xl-7 col-lg-6 col-md-12 contact-form-bx">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <label>Write your email</label>
                                                <input name="dzEmail" required="required" type="email" className="form-control" placeholder="" />
                                                <button name="submit" value="Submit" type="submit" className="site-button radius-xl">Subscribe</button>
                                            </div>
                                            <div className="dzSubscribeMsg"></div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* <!-- Newsletter END --> */}
                        {/* <!-- Our Team --> */}
                        <div className="content-inner newsletter-bx" style={{ backgroundImage: "url(" + bg9 + ")",  backgroundPosition:"center", backgroundRepeat: "no-repeat" }}>
                            <div className="container">
                                <div className="section-head title-bx text-center">
                                    <h2>Meet Our Team</h2>
                                </div>
                                <div className="row">
									{dalbBlog.map((item,index)=>(
										<div className="col-lg-4 col-md-6" key={index}>
											<div className="dlab-box team-curve-bx " >
												<div className="dlab-media">
													<img src={item.image} alt="" />
												</div>
												<div className="dlab-title-bx p-a10 text-center">
													<h5 className="title"><Link to={"#"}>{item.title}</Link></h5>
													<img src={item.image2} alt="" />
												</div>
											</div>
										</div>
									))}
                                </div>
                            </div>
                        </div>
                        {/* <!-- Our Team END --> */}
                        {/* <!-- Contact Us --> */}
                        <div className="content-inner business-contact" style={{ backgroundImage: "url(" + bg10 + ")", backgroundPosition:"right center", backgroundRepeat:"no-repeat" }}>
                            <div className="container">
                                <div className="section-head title-bx text-center">
                                    <h2>Have a question? Contact Us</h2>
                                </div>
                                <form className="row dezPlaceAni contact-form-bx">
                                    <div className="dzFormMsg"></div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="form-group ">
                                            <div className="input-group">
                                                <label>Full name*</label>
                                                <input name="dzName" required="required" type="text" className="form-control" placeholder="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="form-group " >
                                            <div className="input-group">
                                                <label>Email Address*</label>
                                                <input name="dzEmail" required="required" type="email" className="form-control" placeholder="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="form-group " >
                                            <div className="input-group">
                                                <label>Phone Number*</label>
                                                <input name="dzOther[Subject]" required="required" type="text" className="form-control" placeholder="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group" >
                                            <div className="input-group">
                                                <label>Your Questions*</label>
                                                <textarea name="dzMessage" rows="4" className="form-control" required placeholder=""></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 text-center ">
                                        <button name="submit" type="submit" value="Submit" className="site-button radius-xl">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="container m-t80 ">
                            <div className="section-head title-bx text-center">
                                <h2>Download Our Mobile App</h2>
                            </div>
                            <div className="app-btn-bx text-center">
                                <Link to={"#"} className="site-button radius-xl m-lr5 "><i className="fa fa-apple"></i>IOS</Link>
                                <Link to={"#"} className="site-button radius-xl m-lr5" ><i className="fa fa-android"></i>Android</Link>
                            </div>
                        </div>
                        {/* <!-- Contact Us END --> */}
                    </div>
                    {/* <!-- contact area END --> */}
                </div>

                <Footer5 />
            </>
        )
   
}
export default Index6;