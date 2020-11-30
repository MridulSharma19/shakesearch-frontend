import React,{useState} from 'react' 
import './searchbar.css'
import axios from 'axios'

const Searchbar=({setShow,setResult})=>{
    const [query,setQuery]=useState('')
    const handleChange= (e)=>{  
        const {value} = e.target
        setQuery(value)
       
    }
    // const test = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
    const handleSubmit= async(e)=>{
        e.preventDefault()
        try {
            const response = await axios.get(`/search?q=${query}`);
            setResult(response.data) 
            console.log(response.data);
          } catch (error) {
            console.error(error);
          }
         
        setShow(true)

        
    }
    return(
        <div className="search">
            <div className="searchbox">
                <div className="icon">
                    <img src="/Vector.png" alt="icin"/>
                </div>
                <form onSubmit={handleSubmit}>
                    <input type="text" className='searchbar' onChange={handleChange} name='query' value={query} placeholder="What art thee looking f'r?" />
                </form>
                <div className="scribble">
                    <img src="/Vector 2.png" alt="scribble"/>
                </div>
            </div>
        </div>
    )
}
export default Searchbar