import React, { useContext, useEffect } from 'react'
import { myContext } from '../../App'
import Logo from "../../assets/e-logo.jpg"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom';
import { IoCloseSharp } from "react-icons/io5";
import google_png from "../../assets/pngimg.com - google_PNG19635.png"
import insta_png from "../../assets/Instagram_icon.png.webp"

const SignIn = () => {

    const context=useContext(myContext);

    useEffect(()=>{
        context.setIsHeaderFooterShow(false)
    },[])
  return (
    <section className='section signInPage'>
        <div className="shape-bottom"> <svg fill="#fff" id="Layer_1" x="0px" y="0px" viewBox='0 0 1921 819.8' style={{enableBackground:'new 0 0 1921 819.8'}}> <path className='st0' d="M1921,413.1v406.7H0V0.5h0.4l228.1,598.3c30,74.4,80.8,130.6,152.5,168.6c107.6,57,212.1,40.7,245.7,34.4 c22.4-4.2,54.9-13.1,97.5-26.6L1921,400.5V413.1z"></path></svg></div>
      <div className="container">
        <div className="box card p-3 shadow border-0">
            <div className="text-center">
                <img src={Logo} alt="" />
                <div className='signInClose'>
                  <Link to="/"><Button onClick={()=>context.setIsHeaderFooterShow(true)}><IoCloseSharp /></Button> </Link></div>
                 
            </div>

            
            <form action="" className='mt-3'>
            <h2>Sign Up</h2>

            <div className="form-group signUpForm">
            <div className='row'>
                    <div className="col-md-6">
                    <TextField id="standard-basic" type='name' label="Full Name" variant="standard" required className='w-100'/>
                    </div>
                    <div className="col-md-6">
                    <TextField id="standard-basic" type='tel' label="Contact No." variant="standard" required className='w-100' inputProps={{ maxLength: 10 }} />
                    </div>
                </div>
            </div>

            <div className="form-group signUpForm">  
              <TextField id="standard-basic" type='email' label="E-mail" variant="standard" required className='w-100'/>
              </div>
              <div className="form-group signUpForm">
              <TextField id="standard-basic" type='password' label="Password" variant="standard" required className='w-100'/>
              </div>

  
             
              <Button className='btn-blue btn-lg btn-big w-100 mt-3'>Sign Up</Button>

              <p className='mt-1'>Already a User? <Link to="/signin" className='border-effect ms-1 fw-bold'>Sign In</Link></p>

              <h6 className='mt-4 text-center fw-bold'>Or continue with social account</h6>

              <ul className="list list-inline mt-3 mb-0 socials text-center">
                    <li className="list-inline-item">
                        <Link to="#"><img src={google_png} alt="" /></Link>
                    </li>
                    <li className="list-inline-item">
                    <Link to="#"><img src={insta_png} alt="" /></Link>
                    </li>
                   
              </ul>
            </form>
        </div>
      </div>
    </section>
  )
}

export default SignIn
