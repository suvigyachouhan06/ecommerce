import React from 'react'
import { LuShirt } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { RiDiscountPercentLine } from "react-icons/ri";
import { IoIosPricetag } from "react-icons/io";
import "./footer.css"
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="topInfo row">
                <div className="col d-flex align-items-center">
                    <span><LuShirt/></span>
                    <span>Everyday fresh products</span>
                </div>

                <div className="col d-flex align-items-center">
                    <span><TbTruckDelivery /></span>
                    <span>Free Delivery for order above Rs 799</span>
                </div>

                <div className="col d-flex align-items-center">
                    <span><RiDiscountPercentLine/></span>
                    <span>Daily Mega Discounts</span>
                </div>

                <div className="col d-flex align-items-center">
                    <span><IoIosPricetag/></span>
                    <span>Best price on the market</span>
                </div>
            </div>

            <div className="row mt-5 linksWrap">
                <div className="col">
                    <h5>FRUIT & VEGETABLES</h5>
                    <ul>
                        <li><Link to="#">Fresh Vegetables</Link></li>
                        <li><Link to="#">Herbs & Seasonings</Link></li>
                        <li><Link to="#">Fresh Fruits</Link></li>
                        <li><Link to="#">Cuts & Sprouts</Link></li>
                        <li><Link to="#">Exotic Fruits & Veggies</Link></li>
                        <li><Link to="#">Packaged Produce</Link></li>
                        <li><Link to="#">Party Trays</Link></li>
                    </ul>
                </div>

                <div className="col">
                    <h5>BREAKFAST & DAIRY</h5>
                    <ul>
                        <li><Link to="#">Fresh Vegetables</Link></li>
                        <li><Link to="#">Herbs & Seasonings</Link></li>
                        <li><Link to="#">Fresh Fruits</Link></li>
                        <li><Link to="#">Cuts & Sprouts</Link></li>
                        <li><Link to="#">Exotic Fruits & Veggies</Link></li>
                        <li><Link to="#">Packaged Produce</Link></li>
                        <li><Link to="#">Party Trays</Link></li>
                    </ul>
                </div>

                <div className="col">
                    <h5>MEAT & SEAFOOD</h5>
                    <ul>
                        <li><Link to="#">Fresh Vegetables</Link></li>
                        <li><Link to="#">Herbs & Seasonings</Link></li>
                        <li><Link to="#">Fresh Fruits</Link></li>
                        <li><Link to="#">Cuts & Sprouts</Link></li>
                        <li><Link to="#">Exotic Fruits & Veggies</Link></li>
                        <li><Link to="#">Packaged Produce</Link></li>
                        <li><Link to="#">Party Trays</Link></li>
                    </ul>
                </div>

                <div className="col">
                    <h5>BEVERAGES</h5>
                    <ul>
                        <li><Link to="#">Fresh Vegetables</Link></li>
                        <li><Link to="#">Herbs & Seasonings</Link></li>
                        <li><Link to="#">Fresh Fruits</Link></li>
                        <li><Link to="#">Cuts & Sprouts</Link></li>
                        <li><Link to="#">Exotic Fruits & Veggies</Link></li>
                        <li><Link to="#">Packaged Produce</Link></li>
                        <li><Link to="#">Party Trays</Link></li>
                    </ul>
                </div>

                <div className="col">
                    <h5>BREADS & BAKERY</h5>
                    <ul>
                        <li><Link to="#">Fresh Vegetables</Link></li>
                        <li><Link to="#">Herbs & Seasonings</Link></li>
                        <li><Link to="#">Fresh Fruits</Link></li>
                        <li><Link to="#">Cuts & Sprouts</Link></li>
                        <li><Link to="#">Exotic Fruits & Veggies</Link></li>
                        <li><Link to="#">Packaged Produce</Link></li>
                        <li><Link to="#">Party Trays</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer