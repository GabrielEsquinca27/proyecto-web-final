import React, { useState } from 'react';
import './Burger.css';

function Burger() { 
    const [isClosed, setIsClosed] = useState(true);
    const burgerTime = () => {
        setIsClosed(!isClosed);
    };

    return (
        <>
            <div class={`hamburglar ${isClosed ? 'is-closed' : 'is-open'}`}
                id="hamburger"
                onClick={burgerTime}>
                <div className="burger-icon">
                    <div className="burger-container">
                    <div className="burger-bun-top"></div>
                    <div className="burger-filling"></div>
                    <div className="burger-bun-bot"></div>
                    </div>
                </div>
            </div>
        </>
        
    );
}
export default Burger;
