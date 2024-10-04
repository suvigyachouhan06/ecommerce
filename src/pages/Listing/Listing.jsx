import React from 'react'
import Sidebar from '../../Components/sidebar/Sidebar'
import "./listing.css"
const Listing = () => {
  return (
    <>
       <section className="product_Listing_Page">
        <div className="container">
            <div className="productListing d-flex">
                <Sidebar/>
                <div className="content_right">
                content_right8
                </div>
            </div>
        </div>
       </section>
    </>
  )
}

export default Listing
