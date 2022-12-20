import { useLocation } from "react-router-dom";
import data from "../data";
import sentData from "../sentData";
import {MdArrowBackIos} from 'react-icons/md'
import { Link } from "react-router-dom";

const Detail = () => {
  const location = useLocation();
  const {id} = location.state
  const {isSent} = location.state
  let detail = []
  if(isSent == "yes"){
    detail = sentData.filter(i => i.id == id) 
    sentData.forEach( i => {
      if(i.id == id){
          i.isRead = true
      }
    })
  }
  else{
    detail = data.filter(i => i.id == id) 
    data.forEach( i => {
      if(i.id == id){
          i.isRead = true
      }
    })
  }
  

  const back = () => {
    window.history.back();
  }
  return (
    <div className="border-2 border-slate-200 w-full rounded-md ml-[13%] md:ml-[6%]">
        <div className="py-1">
            <button className="flex items-center px-4 text-lg" onClick={back}>
                <MdArrowBackIos></MdArrowBackIos>Back
            </button>
        </div>
        <hr />
        <div className="px-4 py-2 flex justify-between">
            <span className="font-semibold text-xl">{detail[0].from}</span>
            <span className="text-sm text-slate-400">{detail[0].time}</span>
        </div>
        <div className="px-4 py-4">
            <p>{detail[0].message}</p>
        </div>
    </div>
  )
}

export default Detail