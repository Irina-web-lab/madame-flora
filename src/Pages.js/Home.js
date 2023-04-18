import React from "react";
import { useState } from 'react';

import { data } from "../data";
import Promo from "../Components.js/Promo";
import Flowers from "../Components.js/Flowers";
import Buttons from "../Components.js/Buttons";
import Carousel from "../Components.js/Carousel";
import Footer from "../Components.js/Footer";

function Home() {  
    const [flower, setFlower] = useState(data);
  
    const chosenFlower = (searchTerm) => {
        const newFlower = data.filter(element => element.searchTerm === searchTerm);
        setFlower(newFlower);
    }  
        return (<div>

<Promo />
<div className="info">
  <div className="content">
  <h3>Flower Delivery from Madame Flora.</h3>
        <h1 className="inf">All our flowers</h1>
    </div>
    <Buttons filteredFlowers={chosenFlower}/>
    <Flowers itemForSale={flower}/>
     <Carousel/>
     <Footer />     
</div>
</div>
) 
}       
        export default Home;

