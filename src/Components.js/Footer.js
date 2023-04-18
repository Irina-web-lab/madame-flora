import footFlowers from '../foot-flowers1.jpg';

import insta from './icons.js/instagram.png'
import facebook from './icons.js/facebook.png';
import twitter from './icons.js/twitter.png';

function Footer() {
    return (
         <div className='footer'> 
          
                <img src={footFlowers} className='foot-img' alt="Flowers"/>

<div className="icons">
     <ul>    
                <li><img src={insta} className='icon' alt="instagram" /></li>
                <li><img src={facebook} className='icon' alt="fb" /></li>
                <li><img src={twitter} className='icon' alt="twitter"/></li>
                 </ul>
            </div>
<h6>©2023 Irina Gysland</h6>
             </div>      
    )
}

export default Footer;