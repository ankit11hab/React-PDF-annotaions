import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

let docid = '/';
class DesignOne extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            docs: []
        }
    }
    componentDidMount() {
        axios.get('https://menu.classforma.com/get_docs/')
        .then(response => {
            console.log(response)
            this.setState({docs: response.data})
        })
        .catch(err => {
            console.log(err)
        })
    }
    render() {
        const { docs } = this.state
        return (
            <div style={{margin:'10px', fontSize:'20px'}}>
                {<span style={{color:'black'}}><strong>Documents</strong><hr/></span>}
                {
                    docs.length?
                    docs.map(docs=> 
                        <Link to = "/main" style={{textDecoration:'none'}}><div style={{color:'blue',}} key={docs.id} onClick={()=>docid=docs._id}>{docs.filename}</div></Link>
                    ):null
                }
            </div>
        )
    }
}

export default DesignOne
export {docid}