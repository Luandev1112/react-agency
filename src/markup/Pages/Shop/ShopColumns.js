import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './../../Layout/Header1';
import Footer from './../../Layout/Footer1';
import PageTitle from './../../Layout/PageTitle';	
import {OrderDetail} from './../Login';
//Images
import bnr from './../../../images/banner/bnr4.jpg';
import product1 from './../../../images/product/item1.jpg';
import product2 from './../../../images/product/item2.jpg';
import product3 from './../../../images/product/item3.jpg';
import product4 from './../../../images/product/item4.jpg';
import product5 from './../../../images/product/item5.jpg';
import product6 from './../../../images/product/item6.jpg';
import product7 from './../../../images/product/item7.jpg';
import product8 from './../../../images/product/item8.jpg';

const itemBox=[
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

class ShopColumns extends Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr overlay-primary bg-pt" style={{ backgroundImage: "url(" + bnr + ")" }}>
						<PageTitle motherMenu="Shop Columns"  activeMenu="Shop Columns"  />
                    </div>
                    {/* <!-- inner page banner END --> */}
                    {/* <!-- contact area --> */}
                    <div className="section-full content-inner">
                        {/* <!-- Product --> */}
                        <div className="container">
                            <div className="row">
								{itemBox.map((data,index)=>(
									<div className="col-lg-3 col-md-6 col-sm-6">
										<div className="item-box m-b10">
											<div className="item-img">
												<img src={data.image} alt="" />
												<div className="item-info-in">
													<ul>
														<li><Link to={"#"}><i className="ti-shopping-cart"></i></Link></li>
														<li><Link to={"#"}><i className="ti-eye"></i></Link></li>
														<li><Link to={"#"}><i className="ti-heart"></i></Link></li>
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
													<li><i className="fa fa-star-o"></i></li>
												</ul>
												<h4 className="item-price"><del>$232</del> <span className="text-primary">$192</span></h4>
											</div>
										</div>
									</div>
								))}
                            </div>
                        </div>
                        {/* <!-- Product END --> */}
                    </div>
                    { /* <-- Icon Blog and Order detail--> */}
						<OrderDetail />
					{/* <-- Icon Blog and Order detail End--> */}
                </div>

                <Footer />
            </>
        )
    }
}
export default ShopColumns;