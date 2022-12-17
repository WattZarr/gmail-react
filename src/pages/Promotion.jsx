import data from "../data"
import Message from "../components/Message"
import { useOutletContext } from "react-router-dom"
import { useEffect } from "react"
import { Link } from "react-router-dom"

const Promotion = () => {

  const [status,addList,removeList,pmail,prmail,smail] = useOutletContext();

  let modimail = prmail.filter(i => {
    return i.delete == false
  })

  useEffect(()=>{
    document.querySelectorAll(".message-check").forEach(i => {
        i.addEventListener('click',()=>{
            if(i.checked == true){
                addList()
            }
            else{
                let count = 0;
                document.querySelectorAll(".message-check").forEach(i => {
                    if(i.checked == true){
                        count = count + 1;
                    }
                })   
                if(count == 0){
                    removeList()
                }         
            }
        })
    })
  })

  return (
    <>
    {modimail.map(i => (
      <Message key={i.id} id={i.id} data={i} status={status}></Message>
    ))}
        
    </>
  )
}

export default Promotion