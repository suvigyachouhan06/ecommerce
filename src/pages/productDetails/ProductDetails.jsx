import React, { useState } from 'react';
import "./productDetails.css";
import ProductZoom from '../../Components/productZoom/ProductZoom';
import Rating from '@mui/material/Rating';
import QuantityBox from '../../Components/QuantityBox/QuantityBox';
import { Button } from '@mui/material';
import { FaCartShopping } from "react-icons/fa6";

const ProductDetails = () => { // Change here
    const [activeSize, setActiveSize] = useState(null);

    const handleSizeChange = (size) => {
        setActiveSize(size);
    };

    return (
        <section className='productDetails section'>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <ProductZoom />
                    </div>

                    <div className="col-md-7 ps-5">
                        <h2 className='hd text-capitalize'>Siril Georgette Brown Color Saree with Blouse piece</h2>

                        <ul className='list list-inline d-flex align-items-center'>
                            <li className="list-inline-item">
                                <div className="d-flex align-items-center">
                                    <span className="text-secondary me-2">Brands :</span>
                                    <span>SIRIL</span>
                                </div>
                            </li>

                            <li className='list-inline-item ms-4'>
                                <div className="d-flex align-items-center">
                                    <Rating name="read-only" value={4.5} readOnly size="small" precision={0.5} />
                                    <span className='text-secondary cursor ms-2'>1 review</span>
                                </div>
                            </li>

                            <li className="list-inline-item ms-4">
                                <div className="d-flex align-items-center">
                                    <span className="text-secondary me-2">SKU :</span>
                                    <span>ZU49VOR</span>
                                </div>
                            </li>
                        </ul>

                        <div className="d-flex info">
                            <span className="oldPrice">Rs 490</span>
                            <span className="netPrice text-danger ms-2">Rs 450</span>
                        </div>

                        <span className="badge badge-success">IN STOCK</span>

                        <p className='mt-2'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>

                        <div className="productSize d-flex align-items-center">
                            <span>Size / Weight :</span>
                            <ul className="list list-inline mb-0 ps-4">
                                {[ 'S', 'M', 'L', 'XL', 'XXL' ].map((size, index) => (
                                    <li className="list-inline-item" key={index}>
                                        <a 
                                            className={`tag ${activeSize === index ? 'active' : ''}`}
                                            onClick={() => handleSizeChange(index)} // Add click handler
                                        >
                                            {size}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="d-flex align-items-center mt-4">
                            <QuantityBox />
                            <Button className='btn-blue btn-lg btn-big btn-round'>
                                <FaCartShopping /> &nbsp; Add to Cart
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductDetails; // Ensure this matches the component name




