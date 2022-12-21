import { AiOutlineCloseCircle } from "react-icons/ai"
import searchData from "../searchData";
import Message from "../components/Message";
import { useEffect } from "react";

const Result = () => {

  const closeSearch = () => {
    document.querySelector('#result').classList.add('hidden');
  }
  
  return (
    <div className=" hidden w-full h-[200%] bg-white absolute top-[10%]" id="result">
        <div  className="text-2xl mt-4 flex justify-between items-center mr-4" >
        <p className="font-bold mb-4">Search Result</p>    
            <AiOutlineCloseCircle onClick={closeSearch}></AiOutlineCloseCircle>
        </div>
        {searchData[searchData.length-1]?.map(i => (
            <Message key={i.id} id={i.id} data={i}></Message>
          ))}
    </div>
  )
}

export default Result