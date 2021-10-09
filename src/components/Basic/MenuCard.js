import React from "react";

const MenuCard = ({ menuData }) => {
    console.log(menuData);
    return (
        <div>
            {menuData.map((curElem) => {
                return (
                    <div className="container" style={{ marginTop: "40px" }}>
                        <div className="card" style={{ width: "18rem" }} key={curElem.id}>
                            <div className="card-body">
                                <h5 className="card-title">{curElem.name}</h5><br/>
                                <h6 className="card-subtitle mb-2 text-muted">{curElem.category}</h6>
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </p><br/>
                                <h6 className="card-subtitle mb-2 text-muted">{curElem.price}</h6><br/>
                                <button className="btn btn-primary">Continue</button>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    );
};

export default MenuCard;
