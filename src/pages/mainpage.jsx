import React, {useState} from 'react'
import './mainpage.css'
import { Slide } from '@material-ui/core';
import Searchbar from '../components/searchbar/searchbar'
import Results from '../components/resultbox/resultbox'
const Mainpage = ()=>{
    const [showResult,setShow]= useState(false)
    const [result,setResult]=useState('')

    return(
        <div className='Mainpage'>
            <div className="Name">Shakesearch</div>
            <Searchbar setShow={setShow} setResult={setResult} />
            {!showResult?<div className="potrait">
                <img src="/image 28.png" width="100%" height="100%"/>
            </div>
            :null}
    
            {showResult?
            
            <Results setShow={setShow} result={result}/>
            :
            null}
            
        </div>

    )
}

export default Mainpage