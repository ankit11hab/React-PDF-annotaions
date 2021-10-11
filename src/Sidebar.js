import React from "react";

const updateHash = (highlight) => {
  document.location.hash = `highlight-${highlight.id}`;
};

export function Sidebar({
  highlights,
  setLabel,
  resetHighlights,
}) {
	console.log(highlights);
  return (
    <div className="sidebar" style={{ width: "25vw" }}>
      <div className="description" style={{ padding: "1rem" }}>
        <h3 style={{ marginBottom: "1rem",color:"black" }}>Labels</h3><hr/>
        <button style={{ backgroundColor:"orange", border:"none" }} onClick={()=>setLabel(0)}><b>Name</b></button>
        <button style={{ marginLeft:"20px",marginBottom:"40px",backgroundColor:"#AFE1AF", border:"none" }} onClick={()=>setLabel(1)}><b>Telephone</b></button>


        <h3 style={{ marginBottom: "1rem",color:"black" }}>Boxes</h3><hr/>
      </div>

      <ul className="sidebar__highlights">
        {highlights.map((highlight, index) => (
          <li
            key={index}
            className="sidebar__highlight"
            onClick={() => {
              updateHash(highlight);
	    }}
          >
            <div style={{ color:"black" }}>
            {highlight.position.boundingRect.x1?(<span>-x: {parseInt(highlight.position.boundingRect.x1)} </span>) : null}
            {highlight.position.boundingRect.y1?(<span>y: {parseInt(highlight.position.boundingRect.y1)} </span>) : null}
            {highlight.position.boundingRect.height?(<span>height: {parseInt(highlight.position.boundingRect.y2)-parseInt(highlight.position.boundingRect.y1)} </span>) : null}
            {highlight.position.boundingRect.width?(<span>width: {parseInt(highlight.position.boundingRect.x2)-parseInt(highlight.position.boundingRect.x1)} </span>) : null} {highlight.label==1?<span style={{ marginLeft:"20px",marginBottom:"40px",backgroundColor:"#AFE1AF", border:"none" }} ><b>Telephone</b></span>:<span style={{ backgroundColor:"orange", border:"none" }}><b>Name</b></span>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
