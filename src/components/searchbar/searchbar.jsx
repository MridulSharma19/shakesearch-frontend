import React,{useState} from 'react' 
import './searchbar.css'
import axios from 'axios'

const Searchbar=({setShow,showResult,setResult})=>{
    const [query,setQuery]=useState('')
    const handleChange= (e)=>{  
        const {value} = e.target
        setQuery(value)
       
    }
    // const test = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
    const handleSubmit= async(e)=>{
        e.preventDefault()
        setShow(true)
        try {
            const response = await axios.get(`/search?q=${query}`);
            setResult(response.data) 
            console.log(response.data);
          } catch (error) {
            console.error(error);
          }
         
        

        
    }
    return(
        <div className="search">
            <div className="searchbox">
                <div className="icon">
                    <img src="/Vector.png" height="100%" width="auto" alt="icin"/>
                </div>
                <form onSubmit={handleSubmit}>
                    <input type="text" className='searchbar' onChange={handleChange} name='query' value={query} placeholder="What art thee looking f'r?" />
                </form>
                
                {!showResult?<div className="scribble">
                    <img src="/Vector 2.png" width="100%" height="auto" alt="scribble"/>
                </div>:null}
            </div>
        </div>
    )
}
export default Searchbar