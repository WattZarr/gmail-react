import data from "../data"
import Message from "../components/Message"
import { Link } from "react-router-dom"

const Starred = () => {

  const starred = data.filter((i) => {
    return i.starred == true 
  })

  return (
   <div className="h-screen overflow-scroll mt-4 ml-4 relative z-0 pb-32 w-[80%] ml-[13%] md:ml-[9%] lg:ml-[6%]">
    <p className="font-bold text-xl mb-4">Starred Mail</p>
    {starred?.map(i => (
    <Message key={i.id} id={i.id} data={i}></Message>
    ))}     
    </div>
  )
}

export default Starred