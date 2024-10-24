import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/header/Header";
import Home from "./pages/Home/Home";
import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import Footer from "./Components/footer/Footer";
import ProductModal from "./Components/productModal/ProductModal";
import Listing from "./pages/Listing/Listing";
import ProductDetails from './pages/productDetails/ProductDetails';
import Cart from "./pages/cart/Cart";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signup/SignUp"
 export const myContext= createContext()

function App() {
  const [countryList,setCountryList]=useState([]);

const[isOpenProductModal,setIsOpenProductModal]=useState(false);
const[isHeaderFooterShow,setIsHeaderFooterShow]=useState(true);
const[isLogin,isSetLogin]=useState(false)


  useEffect(()=>{
    getCountry("https://countriesnow.space/api/v0.1/countries/")
  },[])

  const getCountry=async(url)=>{
    const responsive= await axios.get(url).then((res)=>{
       setCountryList(res.data.data)
      console.log(res.data.data)
    })
  }

  const values={
    countryList,
    setCountryList,
    isOpenProductModal,
    setIsOpenProductModal,
    isHeaderFooterShow,
    setIsHeaderFooterShow,
    isLogin,
    isSetLogin
  }
  return (
   <>
   <BrowserRouter>
   <myContext.Provider value={values}>
    { isHeaderFooterShow===true &&  <Header/>}
  
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/cat/:id" exact={true} element={<Listing/>}/>
    <Route path="/products/:id" exact={true} element={<ProductDetails/>}></Route>
    <Route path="/cart" exact={true} element={<Cart/>}></Route>
    <Route path="/signin" exact={true} element={<SignIn/>}></Route>
    <Route path="/signUp" exact={true} element={<SignUp/>}></Route>
   </Routes>
 { isHeaderFooterShow===true &&   <Footer/> }

   {isOpenProductModal===true &&  <ProductModal/>}
   </myContext.Provider>
   </BrowserRouter>
   </>
  );
}

export default App;
