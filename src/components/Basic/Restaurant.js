import React, { useState } from 'react'
import Menu from "./menuApi.js"
import MenuCard from './MenuCard';


const Restaurant = () => {
    const [menuData, setMenuData]=useState(Menu);
    const filterItem = (category)=>
    {
        const updatedList = Menu.filter((currElem)=>
        {
            return currElem.category === category;
        })
        setMenuData(updatedList);
    }
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <span className="nav-link" onClick={() => filterItem("breakfast")}>Breakfast</span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link"  onClick={() => filterItem("lunch")}>Lunch</span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link"  onClick={() => filterItem("dinner")}>Dinner</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <MenuCard menuData={menuData} />
        </div>
    )
}

export default Restaurant
