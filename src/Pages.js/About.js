import Footer from "../Components.js/Footer";
import Promo from "../Components.js/Promo";
import imageAbout1 from "../imgAbout1.jpg";
import imageAbout2 from "../imgAbout2.jpg";

function About() {
    
        return (<div>
            <Promo />
        <div className="info">

    <h1 className="inf">About Us</h1>

<h3>Sale and delivery of flower bouquets - Madame Flora.</h3>
<p>We have only fresh flowers, fragrant, magically attractive, colorful and strict, garden and field, which you will like and will only cause admiration! 
The range is updated daily, flowers come from various greenhouses in the Netherlands, Kenya, Ecuador.
With us, every holiday will become special and unique, and gray, dull everyday life will turn into colorful flower magic.
Our store Madame Flora offers bouquets with delivery, as well as a huge selection of indoor plants and compositions from them. We are always happy to help with the purchase of a bouquet for any occasion, we will tell you which plant is worth buying for your room lighting conditions.
Among our variety, it is easy to choose an option for a birthday, anniversary, first date and many other important events.
Our catalog contains prices for all commodity items. Professional florists work on each composition, who pay special attention to the composition of the bouquet and its design. You will be satisfied with their quality and our service.
</p>
<div className="imageAbout">
    <img className="imageAbout1" src={imageAbout1} width='400px' height='280px' alt=""/>
    <img className="imageAbout2" src={imageAbout2} width='400px' height='280px' alt=""/>
</div>
<p>We have only fresh flowers, fragrant, magically attractive, colorful and strict, garden and field, which you will like and will only cause admiration! 
The range is updated daily, flowers come from various greenhouses in the Netherlands, Kenya, Ecuador.
With us, every holiday will become special and unique, and gray, dull everyday life will turn into colorful flower magic.
Our store Madame Flora offers bouquets with delivery, as well as a huge selection of indoor plants and compositions from them. We are always happy to help with the purchase of a bouquet for any occasion, we will tell you which plant is worth buying for your room lighting conditions.
Among our variety, it is easy to choose an option for a birthday, anniversary, first date and many other important events.
Our catalog contains prices for all commodity items. Professional florists work on each composition, who pay special attention to the composition of the bouquet and its design. You will be satisfied with their quality and our service.
</p>

</div>
<Footer />
</div>
) 
}       
        export default About;

