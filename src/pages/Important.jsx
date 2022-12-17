import data from "../data"
import { Link } from "react-router-dom"
import Message from "../components/Message"

const Important = () => {

  const important = data.filter((i) => {
    return i.important == true 
  })

  return (
   <div className="h-screen overflow-scroll mt-4 ml-4 relative z-0 pb-32 w-[80%]">
    <p className="font-bold text-xl mb-4">Important Mail</p>
    {important?.map(i => (
      <Message key={i.id} id={i.id} data={i}></Message>
    ))}     
    </div>
  )
}

export default Important