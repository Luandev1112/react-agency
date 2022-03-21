import React from 'react';
import { Link } from 'react-router-dom';
import {Form} from 'react-bootstrap';
import Header from './../../Layout/Header1';
import Footer from './../../Layout/Footer1';
import PageTitle from './../../Layout/PageTitle';
import {OrderDetail} from './../Login';		

import bnr from './../../../images/banner/bnr3.jpg';
import thumb1 from './../../../images/product/thumb/item1.jpg';
import thumb2 from './../../../images/product/thumb/item2.jpg';
import thumb3 from './../../../images/product/thumb/item3.jpg';
import thumb4 from './../../../images/product/thumb/item4.jpg';
import thumb5 from './../../../images/product/thumb/item5.jpg';
import thumb6 from './../../../images/product/thumb/item6.jpg';

const poductBlog= [
	{image: thumb1 },
	{image: thumb2 },
	{image: thumb3 },
	{image: thumb4 },
	{image: thumb5 },
	{image: thumb6},
];

const ShopCart = () => {
   
        return (
            <>
                <Header />

                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr overlay-primary bg-pt" style={{ backgroundImage: "url(" + bnr + ")" }}>
                        <PageTitle motherMenu='Cart' activeMenu='Shop Cart' />
                    </div>
                    {/* <!-- inner page banner END --> */}
                    {/* <!-- contact area --> */}
                    <div className="section-full content-inner">
                        {/* <!-- Product --> */}
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="table-responsive">
                                        <table className="table check-tbl">
                                            <thead className="text-left">
                                                <tr>
                                                    <th>Product</th>
                                                    <th>Product name</th>
                                                    <th>Unit Price</th>
                                                    <th>Quantity</th>
                                                    <th>Total</th>
                                                    <th>Close</th>
                                                </tr>
                                            </thead>
                                            <tbody>
												{poductBlog.map((item,index)=>(
													<tr key={index}>
														<td className="product-item-img"><img src={item.image} alt="" /></td>
														<td className="product-item-name">Prduct Item 3</td>
														<td className="product-item-price">$28.00</td>
														<td className="product-item-quantity">
															<div className="quantity btn-quantity max-w80">
																<input type="number" name="num" className="form-control input-btn input-number" defaultValue={1} />
															</div>
														</td>
														<td className="product-item-totle">$28.00</td>
														<td className="product-item-close"><Link to={"#"} className="ti-close"></Link></td>
													</tr>
												))}	
                                               
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <form className="shop-form">
                                        <h5>Calculate Shipping</h5>
                                        <div className="form-group">
											<Form.Control as="select" custom>
												<option value="">Credit Card Type</option>
												<option value="">Another option</option>
												<option value="">A option</option>
												<option value="">Potato</option>
											</Form.Control>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-md-6">
                                                <input type="text" className="form-control" placeholder="Credit Card Number" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <input type="text" className="form-control" placeholder="Card Verification Number" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Coupon Code" />
                                        </div>
                                        <div className="form-group">
                                            <button className="site-button" type="button">Apply Coupon</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-md-6">
                                    <h5>Cart Subtotal</h5>
                                    <table className="table-bordered check-tbl">
                                        <tbody>
                                            <tr>
                                                <td>Order Subtotal</td>
                                                <td>$125.96</td>
                                            </tr>
                                            <tr>
                                                <td>Shipping</td>
                                                <td>Free Shipping</td>
                                            </tr>
                                            <tr>
                                                <td>Coupon</td>
                                                <td>$28.00</td>
                                            </tr>
                                            <tr>
                                                <td>Total</td>
                                                <td>$506.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="form-group">
                                        <button className="site-button" type="button">Proceed to Checkout</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Product END --> */}
                    </div>
					<OrderDetail />
					
					
                    {/* <!-- contact area  END --> */}
                </div>

                <Footer />
            </>
        )
    
}
export default ShopCart;