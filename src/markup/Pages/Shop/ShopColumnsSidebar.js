import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Accordion} from 'react-bootstrap';
import Header from './../../Layout/Header1';
import Footer from './../../Layout/Footer1';
import PageTitle from './../../Layout/PageTitle'
import {OrderDetail} from './../Login';	
import RangeSlider from './RangeSlider';

import bnr from './../../../images/banner/bnr5.jpg';
import product1 from './../../../images/product/item1.jpg';
import product2 from './../../../images/product/item2.jpg';
import product3 from './../../../images/product/item3.jpg';
import product4 from './../../../images/product/item4.jpg';
import product5 from './../../../images/product/item5.jpg';
import product6 from './../../../images/product/item6.jpg';
import product7 from './../../../images/product/item7.jpg';
import product8 from './../../../images/product/item8.jpg';
import thumb1 from './../../../images/product/thumb/item1.jpg';
import thumb2 from './../../../images/product/thumb/item2.jpg';
import thumb3 from './../../../images/product/thumb/item3.jpg';

const priceBox=[
	{image: product1, title:'Checked Short Dress'},
	{image: product2, title:'Slim Fit Chinos'},
	{image: product3, title:'Dark Brown Boots'},
	{image: product4, title:'Light Blue Denim Dress'},
	{image: product5, title:'Green Trousers'},
	{image: product6, title:'Unisex Sunglasses'},
	{image: product7, title:'Blue Round-Neck Tshirt'},
	{image: product8, title:'Men Grey Casual Shoes'},
	{image: product1, title:'Checked Short Dress'},
	{image: product2, title:'Slim Fit Chinos'},
	{image: product3, title:'Dark Brown Boots'},
	{image: product4, title:'Light Blue Denim Dress'},
];

const widgetsBox=[
	{image: thumb1,}, {image: thumb2,}, {image: thumb3,},
];

class ShopColumnsSidebar extends Component {
	componentDidMount() {
		
		//Sidebar open and Close 
       // var Closeicon = document.querySelector('.filter-btn');
	   
        var sidebaropen = document.querySelector('.filter-left');
        var Closeicon = [].slice.call(document.querySelectorAll('.filter-btn'));
        for (var y = 0; y < Closeicon.length; y++) {
            Closeicon[y].addEventListener('click', toggleFunc);
        }

        function toggleFunc() {
			if ( (" " + sidebaropen.className + " ").replace(/[\n\t]/g, " ").indexOf(" filter-on ") > -1 ) {
				sidebaropen.classList.remove('filter-on');
				sidebaropen.classList.add('filter-off');
			}else{
				sidebaropen.classList.add('filter-on');
				sidebaropen.classList.remove('filter-off');
			}    
        }
		
	}

    render() {
        return (
            <>
                <Header />

                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr overlay-primary bg-pt"  style={{ backgroundImage: "url(" + bnr + ")" }}>
						<PageTitle motherMenu="Shop Columns Sidebar" activeMenu="Shop Columns Sidebar" />
                    </div>
                    {/* <!-- inner page banner END --> */}
                    {/* <!-- contact area --> */}
                    <div className="section-full content-inner">
                        {/* <!-- Product --> */}
                        <div className="container">
                            <div className="row sp10-sm">
                                <div className="col-lg-12 col-md-12 col-sm-12 filter-bar">
                                    <div className="filter-mobile">
                                        <div className="filter-bx">
                                            <select>
                                                <option>Sort By</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                            </select>
                                        </div>
                                        <div className="filter-bx">
                                            <Link to={"#"} className="filter-btn black"><i className="fa fa-filter"></i> Fillter</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-12 col-sm-12 sticky-top filter-bar">
                                    <aside className="side-bar shop-categories filter-left "  >
                                        <Link to={"#"} className="filter-btn close black"><i className="fa fa-close"></i></Link>
                                        <div className="widget recent-posts-entry">
											<div className="dlab-accordion advanced-search toggle" id="accordion1">
												<Accordion defaultActiveKey="0">
													<div className="panel"> 
														<div className="acod-head">
															<h5 className="acod-title">
																<Accordion.Toggle as={Link} variant="link" eventKey="0">Product categories</Accordion.Toggle>
															</h5>
														</div>
														<Accordion.Collapse eventKey="0">
															<div className="acod-content">
																<div className="widget widget_services">
																	<ul>
																		<li>Bags</li>
																		<li>Jeans</li>
																		<li>Shoes</li>
																		<li>Sweaters</li>
																		<li>Tops</li>
																		<li>Women</li>
																	</ul>
																</div>
															</div>
														</Accordion.Collapse>
													</div>
												</Accordion>
												<Accordion defaultActiveKey="1">
													<div className="acod-head">
														<h5 className="acod-title">
															<Accordion.Toggle as={Link} variant="link" eventKey="1">Price Range</Accordion.Toggle>
														</h5>
                                                    </div>
													<Accordion.Collapse eventKey="1" >
														<div className="acod-content">
                                                            <div className="price-slide-2 range-slider">
                                                                <div className="price">
                                                                    <input type="text" id="amount-2" className="amount" readOnly="" value="$15 - $100" />
                                                                    <div id="slider-range-2">
																		<RangeSlider />
																	</div>
																	
                                                                </div>
                                                            </div>
                                                        </div>
													</Accordion.Collapse>
												</Accordion>
												<Accordion defaultActiveKey="2">
													<div className="panel">
														<div className="acod-head">
															<h5 className="acod-title">
																<Accordion.Toggle as={Link} variant="link" eventKey="2">COLOR</Accordion.Toggle>
															</h5>
														</div>
														<Accordion.Collapse eventKey="2" >
															<div className="acod-content">
																<h6>Select the color</h6>
																<div className="btn-group product-item-color" data-toggle="buttons">
																	<label className="btn bg-red active">
																		<input name="options" id="option1" checked="" type="radio" />
																	</label>
																	<label className="btn bg-pink">
																		<input name="options" id="option2" type="radio" />
																	</label>
																	<label className="btn bg-yellow">
																		<input name="options" id="option3" type="radio" />
																	</label>
																	<label className="btn bg-blue">
																		<input name="options" id="option4" type="radio" />
																	</label>
																	<label className="btn bg-green">
																		<input name="options" id="option5" type="radio" />
																	</label>
																</div>
															</div>
														</Accordion.Collapse>
													</div>	
												</Accordion>
												<Accordion defaultActiveKey="3">
													<div className="panel">
														<div className="acod-head">
															<h5 className="acod-title">
																<Accordion.Toggle as={Link} variant="link" eventKey="3">Size</Accordion.Toggle>
															</h5>
														</div>
														<Accordion.Collapse eventKey="3" >
															<div className="acod-content">
																<h6>Product Size</h6>
																<div className="btn-group product-item-size" data-toggle="buttons">
																	<label className="btn active">
																		<input name="options" id="option6" checked="" type="radio" />XS
																	</label>
																	<label className="btn">
																		<input name="options" id="option7" type="radio" /> LG
																	</label>
																	<label className="btn">
																		<input name="options" id="option8" type="radio" /> MD
																	</label>
																	<label className="btn">
																		<input name="options" id="option9" type="radio" /> SM
																	</label>
																	<label className="btn">
																		<input name="options" id="option10" type="radio" /> Xl
																	</label>
																</div>
															</div>
														</Accordion.Collapse>
													</div>	
												</Accordion>
                                                <Accordion defaultActiveKey="4">
													<div className="panel">
														<div className="acod-head">
															<h5 className="acod-title">
																<Accordion.Toggle as={Link} variant="link" eventKey="4">VENDOR</Accordion.Toggle>
															</h5>
														</div>
														<Accordion.Collapse eventKey="4">
															<div className="acod-content">
																<div className="product-brand">
																	<div className="search-content">
																		<input id="seating1" type="checkbox" />
																		<label htmlFor="seating1" className="search-content-area">Gap</label>
																	</div>
																	<div className="search-content">
																		<input id="seating2" type="checkbox" />
																		<label htmlFor="seating2" className="search-content-area">Guess</label>
																	</div>
																	<div className="search-content">
																		<input id="seating3" type="checkbox" />
																		<label htmlFor="seating3" className="search-content-area">Lacoste</label>
																	</div>
																	<div className="search-content">
																		<input id="seating4" type="checkbox" />
																		<label htmlFor="seating4" className="search-content-area">Levi's</label>
																	</div>
																	<div className="search-content">
																		<input id="seating5" type="checkbox" />
																		<label htmlFor="seating5" className="search-content-area">Polo</label>
																	</div>
																</div>
															</div>
														</Accordion.Collapse>
													</div>	
												</Accordion>
                                                <Accordion >
													<div className="panel">
														<div className="acod-head">
															<h5 className="acod-title">
																<Accordion.Toggle as={Link} variant="link" className="collapsed" eventKey="5">POPULAR TAGS</Accordion.Toggle>
															</h5>
														</div>
														<Accordion.Collapse eventKey="5">
															<div className="acod-content">
																<div className="widget_tag_cloud radius">
																	<div className="tagcloud"> <Link to={"#"} className="mr-1">Design</Link>
																		<Link to={"#"} className="mr-1">User interface</Link>
																		<Link to={"#"} className="mr-1">SEO</Link>
																		<Link to={"#"} className="mr-1">WordPress</Link>
																		<Link to={"#"} className="mr-1">Development</Link>
																		<Link to={"#"} className="mr-1">Joomla</Link>
																		<Link to={"#"} className="mr-1">Design</Link>
																		<Link to={"#"} className="mr-1">User interface</Link>
																		<Link to={"#"} className="mr-1">SEO</Link>
																		<Link to={"#"} className="mr-1">WordPress</Link>
																		<Link to={"#"} className="mr-1">Development</Link>
																		<Link to={"#"} className="mr-1">Joomla</Link>
																		<Link to={"#"} className="mr-1">Design</Link>
																		<Link to={"#"} className="mr-1">User interface</Link>
																		<Link to={"#"} className="mr-1">SEO</Link>
																		<Link to={"#"} className="mr-1">WordPress</Link>
																		<Link to={"#"} className="mr-1">Development</Link>
																		<Link to={"#"} className="mr-1">Joomla</Link> 
																	</div>
																</div>
															</div>
														</Accordion.Collapse>
													</div>	
												</Accordion>
                                                
                                                <Accordion >
													<div className="panel">
														<div className="acod-head">
															<h5 className="acod-title">	
																<Accordion.Toggle as={Link} variant="link" className="collapsed" eventKey="6">Features</Accordion.Toggle>	
															</h5>
														</div>
														<Accordion.Collapse eventKey="6">
															<div className="acod-content">
																{widgetsBox.map((item,index)=>(
																	<div className="item-widgets-box" key={index}>
																		<div className="item-widgets-left">
																			<img src={item.image} alt="" />
																		</div>
																		<div className="item-widgets-body text-black">
																			<h6 className="item-title text-uppercase font-weight-500 m-t0">
																				<Link to={"#"}>Product Title</Link>
																			</h6>
																			<ul className="item-review text-yellow-light">
																				<li><i className="fa fa-star mr-1"></i></li>
																				<li><i className="fa fa-star mr-1"></i></li>
																				<li><i className="fa fa-star mr-1"></i></li>
																				<li><i className="fa fa-star-half-o mr-1"></i></li>
																				<li><i className="fa fa-star-o mr-1"></i></li>
																			</ul>
																			<h6 className="item-price m-b0"><del>$232</del> <span className="text-primary">$192</span></h6>
																		</div>
																	</div>
																))}	
															</div>
														</Accordion.Collapse>
													</div>
												</Accordion>	                                                      
                                            </div>
                                        </div>
                                    </aside>
                                </div>
                                <div className="col-lg-9 col-md-12 col-sm-12 ">
                                    <div className="row">
										{priceBox.map((data,index)=>(
											<div className="col-lg-4 col-md-6 col-sm-12 col-6 " key={index}>
												<div className="item-box m-b10">
													<div className="item-img">
														<img src={data.image} alt="" />
														<div className="item-info-in center">
															<ul>
																<li><Link to={"#"} ><i className="ti-shopping-cart"></i></Link></li>
																<li><Link to={"#"} ><i className="ti-eye"></i></Link></li>
																<li><Link to={"#"} ><i className="ti-heart"></i></Link></li>
															</ul>
														</div>
													</div>
													<div className="item-info text-center text-black p-a10">
														<h6 className="item-title font-weight-500"><Link to={"#"}>{data.title}</Link></h6>
														<ul className="item-review">
															<li><i className="fa fa-star mr-1"></i></li>
															<li><i className="fa fa-star mr-1"></i></li>
															<li><i className="fa fa-star mr-1"></i></li>
															<li><i className="fa fa-star-half-o mr-1"></i></li>
															<li><i className="fa fa-star-o mr-1"></i></li>
														</ul>
														<h4 className="item-price"><del>$232</del> <span className="text-primary">$192</span></h4>
													</div>
												</div>
											</div>
										))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Product END --> */}
                    </div>
						<OrderDetail /> 
                </div>

                <Footer />
            </>
        )
    }
}
export default ShopColumnsSidebar;