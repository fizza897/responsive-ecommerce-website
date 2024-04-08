import { useEffect, useState } from "react";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import headPhone from "./components/Images/headphone-M8ndZJ0u.png"
import SmartWatch from "./components/Images/smartwatch.png" 
import Products from "./components/Products/Products";
import Blogs from "./components/Blogs/Blogs";
import Partner from "./components/Partner/Partner";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Pop/Popup"
import Aos from "aos";
import "aos/dist/aos.css"
const BannerData={
  discount:"30% OFF",
  title:"Fine Smile",
  date:"10 Jan to 28 Jan",
  image:headPhone,
  title2:"Air Solo Bass",
  title3:"Winter Sale",
  title4:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor:"#f42c37",
}
const BannerData2={
  discount:"30% OFF",
  title:"HAPPY HOURS",
  date:"10 Jan to 28 Jan",
  image:SmartWatch,
  title2:"Smart Solo",
  title3:"Winter Sale",
  title4:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor:"#2dcc6f",
}


function App() {
  const [orderPopup,setOrderPopup] =useState(false)
  const handleOrderPopup=()=>{
    setOrderPopup(!orderPopup)
  }
  useEffect=(()=>{
    Aos.init({
      duration:800,
      easing:"ease-in-sine",
      delay: 100,
      offset:100
    })
    Aos.refresh()
  })
  return (
    <>
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
    <Navbar handleOrderPopup={handleOrderPopup}/>
    <Hero handleOrderPopup={handleOrderPopup}/>
    <Category/>
    <Category2/>
    <Services/>
    <Banner data={BannerData}/>
    <Products/>
    <Banner data={BannerData2}/>
    <Blogs/>
    <Partner/>
    <Footer/>
    <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup}/>

    </div>
    </>
  );
}

export default App;
