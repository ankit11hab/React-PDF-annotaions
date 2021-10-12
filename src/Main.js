import React, { useState, useEffect } from "react";
import axios from 'axios'
import {PdfLoader,PdfHighlighter,Tip,Highlight,Popup,AreaHighlight} from "react-pdf-highlighter";
import { Sidebar } from "./Sidebar";
import { docid } from "./Home";

import "./App.css";


const getNextId = () => String(Math.random()).slice(2);

const parseIdFromHash = () =>
  document.location.hash.slice("#highlight-".length);

const resetHash = () => {
  document.location.hash = "";
};

const HighlightPopup = ({
  comment,
}) =>
  comment&&comment.text ? (
    <div className="Highlight__popup">
      {comment.emoji} {comment.text}
    </div>
  ) : null;



function Main() {

  
 
  
  const [url, setUrl] = useState('')
  const [highlights, setHighlights] = useState([])
  const [label, setLabel] = useState(0)
  const resetHighlights = () => {
    setHighlights([])
  };

  
  const scrollViewerTo = (highlight) => {};

  const scrollToHighlightFromHash = () => {
    const highlight = getHighlightById(parseIdFromHash());

    if (highlight) {
      scrollViewerTo(highlight);
    }
  };

  useEffect(()=> {
    window.addEventListener(
      "hashchange",
      scrollToHighlightFromHash,
      false
    );
    axios.get(`https://menu.classforma.com/get_doc/${docid}/`)
        .then(response => {
            console.log(response.data)
            setUrl(`data:application/pdf;base64,${response.data.contents}`)
        })
        .catch(err => {
            console.log(err)
        })
  },[])

  const getHighlightById=(id)=> {
    return highlights.find((highlight) => highlight.id === id);
  }

  const addHighlight = (highlight)=> {

    console.log("Saving highlight", highlight);

    setHighlights((highlights)=>[{ ...highlight, id: getNextId() }, ...highlights]);
  }

  const updateHighlight = (highlightId, label, position, content)=> {
    console.log("Updating highlight", highlightId, position, content);

    setHighlights(highlights.map((h) => {
        const {
          id,
          position: originalPosition,
          content: originalContent,
          ...rest
        } = h;
        return id === highlightId
          ? {
              id,
              position: { ...originalPosition, ...position },
              content: { ...originalContent, ...content },
              ...rest,
            }
          : h;
      }),
    );
  }


    return (
      <div className="App" style={{ display: "flex", height: "100vh" }}>
        <Sidebar
          highlights={highlights}
          setLabel = {setLabel}
          resetHighlights={resetHighlights}
        />
        <div
          style={{
            height: "100vh",
            width: "75vw",
            position: "relative",
          }}
        >
          <PdfLoader url={url}>
            {(pdfDocument) => (
              <PdfHighlighter
                pdfDocument={pdfDocument}
                enableAreaSelection={(event) => true}
                onScrollChange={resetHash}
                // pdfScaleValue="page-width"
                scrollRef={(scrollTo) => {
                  scrollViewerTo = scrollTo;

                  scrollToHighlightFromHash();
                }}
                onSelectionFinished={(
                  position,
                  content,
                  hideTipAndSelection,
                  transformSelection,
                ) => 
                  {
                      console.log(label);
                      addHighlight({ label,position });
                      
                      hideTipAndSelection();
                  }
                }
                highlightTransform={(
                  highlight,
                  index,
                  setTip,
                  hideTip,
                  viewportToScaled,
                  screenshot,
                  isScrolledTo
                ) => {
                  
                  console.log("Highlight.label",label)
                  const component = highlight.label ? (
                    <AreaHighlight style={{color:"green",backgroundColor:"green"}}
                      isScrolledTo={isScrolledTo}
                      highlight={highlight}
                      onChange={(boundingRect) => {
                        updateHighlight(
                          highlight.id,
                          { boundingRect: viewportToScaled(boundingRect) },
                          { image: screenshot(boundingRect) }
                        );
                      }}
                    />
                  ) : (
                    <AreaHighlight style={{color:"green",backgroundColor:"orange"}}
                      isScrolledTo={isScrolledTo}
                      highlight={highlight}
                      onChange={(boundingRect) => {
                        updateHighlight(
                          highlight.id,
                          { boundingRect: viewportToScaled(boundingRect) },
                          { image: screenshot(boundingRect) }
                        );
                      }}
                    />
                  );

                  return (
                    <Popup
                      popupContent={<HighlightPopup {...highlight} />}
                      onMouseOver={(popupContent) =>
                        setTip(highlight, (highlight) => popupContent)
                      }
                      onMouseOut={hideTip}
                      key={index}
                      children={component}
                    />
                  );
                }}
                highlights={highlights}
              />
            )}
          </PdfLoader>
        </div>
      </div>
    );
  }

export default Main;
