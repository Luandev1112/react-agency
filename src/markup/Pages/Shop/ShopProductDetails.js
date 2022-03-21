import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './../../Layout/Header1';
import Footer from './../../Layout/Footer1';
import PageTitle from './../../Layout/PageTitle';
import TabStyle1 from './../ShortCode/TabStyle1';
import {OrderDetail} from './../Login';
import ShopProductSlider from './ShopProductSlider';
import ShopProductCarousel from './ShopProductCarousel';
import bnr1 from './../../../images/banner/bnr7.jpg';

class ShopProductDetails extends Component {
    render() {
        return (
            <>
                <Header />

                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr overlay-primary bg-pt" style={{ backgroundImage: "url(" + bnr1 + ")" }}>
						<PageTitle motherMenu='Product Details' activeMenu='Product Details' />
                    </div>
                    {/* <!-- inner page banner END --> */}
                    {/* <!-- contact area --> */}
                    <div className="section-full content-inner bg-white">
                        {/* <!-- Product details --> */}
                        <div className="container woo-entry">
                            <div className="row m-b30">
                                <div className="col-md-5 col-sm-5">
                                    <div className="product-gallery on-show-slider">
                                        <ShopProductSlider />
                                    </div>
                                </div>
                                <div className="col-md-7 col-sm-7 ">
                                    <form method="post" className="cart sticky-top">
                                        <div className="dlab-post-title ">
                                            <h4 className="post-title"><Link to ={"#"}>Product name</Link></h4>
                                            <p className="m-b10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
                                            <div className="dlab-divider bg-gray tb15"><i className="icon-dot c-square"></i></div>
                                        </div>
                                        <div className="relative">
                                            <h3 className="m-tb10">$2,140.00 </h3>
                                            <div className="shop-item-rating">
                                                <span className="rating-bx">
                                                    <i className="fa fa-star mr-1"></i>
                                                    <i className="fa fa-star mr-1"></i>
                                                    <i className="fa fa-star mr-1"></i>
                                                    <i className="fa fa-star-o mr-1"></i>
                                                    <i className="fa fa-star-o mr-1"></i>
                                                </span>
                                                <span>4.5 Rating</span>
                                            </div>
                                        </div>
                                        <div className="shop-item-tage">
                                            <span>Tags :- </span>
                                            <Link to ={"#"}>Shoes,</Link>
                                            <Link to ={"#"}>Clothing</Link>
                                            <Link to ={"#"}>T-shirts</Link>
                                        </div>
                                        <div className="dlab-divider bg-gray tb15"><i className="icon-dot c-square"></i></div>
                                        <div className="row">
                                            <div className="m-b30 col-md-7">
                                                <h6>Product Size</h6>
                                                <div className="btn-group product-item-size" data-toggle="buttons">
                                                    <label className="btn active">
                                                        <input type="radio" name="options" id="option1" />XS
											        </label>
                                                    <label className="btn">
                                                        <input type="radio" name="options" id="option2" /> LG
											        </label>
                                                    <label className="btn">
                                                        <input type="radio" name="options" id="option3" /> MD
											        </label>
                                                    <label className="btn">
                                                        <input type="radio" name="options" id="option4" /> SM
											        </label>
                                                    <label className="btn">
                                                        <input type="radio" name="options" id="option5" /> Xl
											        </label>
                                                </div>
                                            </div>
                                            <div className="m-b30 col-md-5">
                                                <h6>Select quantity</h6>
												<div className="quantity btn-quantity style-1">
													<input type="number" name="num" className="form-control input-btn input-number" defaultValue={1} />
												</div>
                                            </div>
                                        </div>
                                        <div className="m-b30">
                                            <h6>Select the color</h6>
                                            <div className="btn-group product-item-color" data-toggle="buttons">
                                                <label className="btn bg-red active">
                                                    <input type="radio" name="options" id="option6" checked />
                                                </label>
                                                <label className="btn bg-pink">
                                                    <input type="radio" name="options" id="option7" />
                                                </label>
                                                <label className="btn bg-yellow">
                                                    <input type="radio" name="options" id="option8" />
                                                </label>
                                                <label className="btn bg-blue">
                                                    <input type="radio" name="options" id="option9" />
                                                </label>
                                                <label className="btn bg-green">
                                                    <input type="radio" name="options" id="option10" />
                                                </label>
                                            </div>
                                        </div>
                                        <button className="site-button radius-no"><i className="ti-shopping-cart"></i> Add To Cart</button>
                                    </form>
                                </div>
                            </div>
							{/* Tabs */ }
								<TabStyle1 /> 
							{/* Tabs End */ }
                            
							<div className="row">
                                <div className="col-md-12">
                                    <h5 className="m-b20">Related Products</h5>
                                    <ShopProductCarousel /> 
                                </div>
							</div>
                        </div>
                        {/* <!-- Product details --> */}
                    </div>
                    {/* <!-- contact area  END --> */}
						<OrderDetail />
                </div>

                <Footer />
            </>
        )
    }
}
export default ShopProductDetails;