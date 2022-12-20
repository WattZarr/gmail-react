import { useEffect } from 'react'
import {FiStar} from 'react-icons/fi'
import { Link } from 'react-router-dom';

const Message = ({id,data,status,isSent}) => {

  const mid = `i${id}`;
  const handleStar = (e) => {
    if(e.target.getAttribute("fill") == "none"){
      e.target.setAttribute("fill","#f7cb4d")
      data.starred = true
    }
    else{
      e.target.setAttribute("fill","none")
      data.starred = false
    }
  }

  const makeCheck = () => {
    data.isCheck = true
  }


  useEffect(()=>{
    if(data.starred == true){
      document.querySelector(`#${mid}`).setAttribute("fill","#f7cb4d")
    }
    else{
      document.querySelector(`#${mid}`).setAttribute("fill","none")
    }
  },[])

  useEffect(()=>{
    // to rerender everytime the status change
  },[status])


  return (
    <>
    <div className='text-sm md:text-base flex items-center py-1 px-2 rounded hover:bg-slate-200' id='message'>
        {data.isRead == false && (
          <>
          <div className='flex items-center w-[17%]'>
            <div><input type="checkbox" className='mr-2 message-check' onClick={makeCheck}/></div>
            <div><FiStar className='mr-2' id={mid} onClick={handleStar}></FiStar></div>
            <span className=' font-bold'>{data.from}</span>
          </div>
          <div className='whitespace-pre overflow-hidden ml-12 mr-2 md:mx-4 w-[90%] font-bold' id='mes'>
          <Link to={`detail/${id}`} state={{id:id,isSent}}>
            {data.message}
          </Link>
          </div>
          <div className='font-bold'>{data.time}</div>
          </>    
          )}
      {data.isRead == true && (
      <>
      <div className='flex items-center w-[17%]'>
        <div><input type="checkbox" className='mr-2 message-check' onClick={makeCheck} /></div>
        <div><FiStar className='mr-2' id={mid} onClick={handleStar}></FiStar></div>
        <span>{data.from}</span>
      </div>
      <div className='whitespace-nowrap overflow-hidden ml-12 mr-2 md:mx-4 w-[90%]' id='mes'>
      <Link to={`detail/${id}`} state={{id:id,isSent}}>
          {data.message}
      </Link>
      </div>
      <div>{data.time}</div>
      </>    
      )}
        
    </div>
    <hr />
    </>
  )
}

export default Message 