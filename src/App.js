import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/header/Header";
import Home from "./pages/Home/Home";


function App() {
  return (
   <>
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path="/" exact={true} component={<Home/>}></Route>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
