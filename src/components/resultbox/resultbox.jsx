import React,{useState} from 'react'
import ClearIcon from '@material-ui/icons/Clear';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
// import Pagination from '../pagination'
import Res from '../res'
import './resultbox.css'
const Results=({setShow,result})=>{
    const [currentPage, setCurrentPage] = useState(1);
    const resPerPage = 4
    const totalpages = Math.trunc((result.length/resPerPage) +1)
  const indexOfLastRes = currentPage * resPerPage;
  const indexOfFirstRes = indexOfLastRes - resPerPage;
  const currentRes = result.slice(indexOfFirstRes, indexOfLastRes);
//   const paginate = pageNumber => setCurrentPage(pageNumber);
  const handleClick=()=>{
        setShow(false)
    }
    return(
        <div className="box">
            
            <ClearIcon className='clear' onClick={handleClick}/>
            
            <div className='container mt-5'>
      
      <Res res={currentRes}  />
      {/* <Pagination
        className='pagin'
        postsPerPage={resPerPage}
        totalPosts={result.length}
        paginate={paginate}
      /> */}
      <div className="pagin">
          {currentPage!==1?<NavigateBeforeIcon onClick={()=>setCurrentPage(currentPage-1)}/> : null } {currentPage} of {totalpages} {currentPage!==totalpages? <NavigateNextIcon onClick={()=>setCurrentPage(currentPage+1)} /> :null}
      </div>
    </div>
  

            
        </div>
    )
}
export default Results