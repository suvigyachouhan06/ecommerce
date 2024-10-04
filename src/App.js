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

 export const myContext= createContext()

function App() {
  const [countryList,setCountryList]=useState([]);

const[isOpenProductModal,setIsOpenProductModal]=useState(false);



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
    setIsOpenProductModal
  }
  return (
   <>
   <BrowserRouter>
   <myContext.Provider value={values}>
   <Header/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/cat/:id" exact={true} element={<Listing/>}/>
   </Routes>
   <Footer/> 

   {isOpenProductModal===true &&  <ProductModal/>}
   </myContext.Provider>
   </BrowserRouter>
   </>
  );
}

export default App;
