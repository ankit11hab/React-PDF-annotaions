import React, { useState } from 'react'
import axios from 'axios'
import { Document, Page, pdfjs } from 'react-pdf';


const DesignFour = () => {
    pdfjs.GlobalWorkerOptions.workerSrc =
    `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    const [docs, setDocs] = useState([])
    axios.get(`https://cors-anywhere.herokuapp.com/https://menu.classforma.com/get_doc/60bb95f3f3799f9b7e625cb4/`)
        .then(response => {
            console.log(response)
            setDocs(response.data)
        })
        .catch(err => {
            console.log(err)
        })
    
    return (
        <div>
            {                
                <Document file={`data:application/pdf;base64,${docs.contents}`}  id="pdf"><Page pageNumber={1} /></Document>
            }
        </div>
    )
}

export default DesignFour
