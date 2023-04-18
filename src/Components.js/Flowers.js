import { useState } from "react";

function Flowers({itemForSale}) {
    const [showText,setShowText]=useState(false)
    const showTextClick=(element) => {
        element.showMore=!element.showMore
        setShowText(!showText)
    }
    
    return (<div>
    <div className="products">
            {itemForSale.map((element => {
                const {id, name, description, searchTerm, price, image, showMore} = element;

                return( <div key={id}>
                    <div className="products-card">
                    <img className="image-card" src={image} width="250px" height="200px" alt="" />                    
                    <h2>{name}</h2>
                    <p className="itemDisc">{showMore? description : description.substring(0, 50)+'...'}
                    <button class="descriptionBtn" onClick={()=>showTextClick(element)}>{showMore? 'Show less' : 'Show more'}</button></p>
                    <p className="itemPrice">${price}</p>
                    <div className="item_button">
                    <button className="item_btn">Add to cart</button>
                    </div>
                    </div>                    
                    </div>
             )}))
            }
            </div> 
            </div>
    )
}
        
export default Flowers;