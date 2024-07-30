import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import CarouselComponent from "./Carousel";
import NavHome from "./NavHome";
import Footer from "./Footer"


function Home() {

  return (
    <div className="navHome backgroundContainer">
      <NavHome />
      <CarouselComponent />
      <br/> <br/>
      <Footer />
    </div>
  )

}

export default Home