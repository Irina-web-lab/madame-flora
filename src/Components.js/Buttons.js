function Buttons({filteredFlowers}) {
    return (
        <div>
            <div className="ServicesBtns-container">
            <button className="ServicesBtns-btn-all" onClick={() => window.location.reload()}>All</button>
            <button className="ServicesBtns-btn" onClick={() => filteredFlowers("roser")}>Roser</button>
            <button className="ServicesBtns-btn" onClick={() => filteredFlowers("bouquet")}>Bouquet</button>
            <button className="ServicesBtns-btn" onClick={() => filteredFlowers("wedding")}>Wedding</button>
            <button className="ServicesBtns-btn" onClick={() => filteredFlowers("home plants")}>Home plants</button>
            <button className="ServicesBtns-btn" onClick={() => filteredFlowers("cactus")}>Cactus</button>
            </div>
        </div>
    )
    }
    
    export default Buttons;
    
    