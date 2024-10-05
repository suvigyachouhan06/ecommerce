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
               <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-18.jpg" alt="" style={{borderRadius:"8px"}}/>
                </div>
            </div>
        </div>
       </section>
    </>
  )
}

export default Listing
