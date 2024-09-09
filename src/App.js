import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/header/Header";
import Home from "./pages/Home/Home";
import { createContext, useEffect, useState } from "react";
import axios from 'axios'

 export const myContext= createContext()

function App() {
  const [countryList,setCountryList]=useState([]);

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
    setCountryList
  }
  return (
   <>
   <BrowserRouter>
   <myContext.Provider value={values}>
   <Header/>
   <Routes>
    <Route path="/" exact={true} component={<Home/>}></Route>
   </Routes>
   </myContext.Provider>
   </BrowserRouter>
   </>
  );
}

export default App;
