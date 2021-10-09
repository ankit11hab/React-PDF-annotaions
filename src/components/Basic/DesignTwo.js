import React, { Component } from 'react'
import axios from 'axios'
import { Document, Page, pdfjs } from 'react-pdf';
import { docid } from './DesignOne'

class DesignTwo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            docs: [],
            numPages: null,
            pageNumber: 1,
        }
    }
    componentDidMount() {
        axios.get(`https://cors-anywhere.herokuapp.com/https://menu.classforma.com/get_doc/60bb95f3f3799f9b7e625cb4/`)
            .then(response => {
                console.log(response)
                this.setState({ docs: response.data })
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        pdfjs.GlobalWorkerOptions.workerSrc =
            `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
        console.log({ docid })
        const { docs } = this.state
        return (
            <div>
                {
                    
                    <Document file={`data:application/pdf;base64,${docs.contents}`}  id="pdf" key={docs.key}><Page pageNumber={1} /></Document>
                    

                }
            </div>
        )
    }
}

export default DesignTwo
