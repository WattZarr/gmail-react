import { Outlet, NavLink } from "react-router-dom"
import {HiOutlineInbox, HiOutlineDotsVertical} from 'react-icons/hi'
import {BsTag} from 'react-icons/bs'
import {TbUsers} from 'react-icons/tb'
import {VscRefresh} from 'react-icons/vsc'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {BiExpandAlt} from 'react-icons/bi'
import {FiMinimize2} from 'react-icons/fi'
import { useEffect } from "react"
import { useState } from "react"
import data from "../data"
import { useRef } from "react"
import sentData from "../sentData" 

const Mail = () => {

  const [status,setStatus] = useState(false);
  const toRef = useRef("");
  const fromRef = useRef("");
  const mailRef = useRef("");

  const send = (e) => {

    let today = new Date();
    let time = "";
    if(today.getHours() > 12){
       time = today.getHours()-12 + ":" + today.getMinutes()+"pm";
    }
    else{
      time = today.getHours() + ":" + today.getMinutes()+"am";
    }

    e.preventDefault();
    sentData.push({id:sentData.length+1,
                  from:fromRef.current.value,
                  to:toRef.current.value,
                  message:mailRef.current.value,
                  time:time,
                  starred : false,
                  delete:false,
                  important:false,
                  spam:false,
                  isCheck : false,
                  isRead : true,
                })
    toRef.current.value = "";
    fromRef.current.value = "";
    mailRef.current.value="";
  }

  let pmail = data.filter((i) => {
       return i.type == "primary" 
     })
     
  let prmail = data.filter((i) => {
        return i.type == "promotion"
      })

  let smail = data.filter((i) => {
        return i.type == "social"
      })

  const handleModal = () => {
    document.querySelector('#modal').classList.toggle('hidden');
  }

  const addList = () => {
    document.querySelector("#false-text").classList.add('hidden');
    document.querySelector("#true-text").classList.remove('hidden');
  }

  const removeList = () => {
    document.querySelector("#false-text").classList.remove('hidden');
    document.querySelector("#true-text").classList.add('hidden');
  }

  const allRead = () => {
    data.forEach( i => {
        i.isRead = true;
    })
    setStatus(!status)
  }

  const deleteAll = () => {
    data.length = 0;
    setStatus(!status)
  }

  const selectDelete = () => {
    const checked = data.filter( i => {
      return i.isCheck == true
    })
    const unChecked = data.filter( i => {
      return i.isCheck == false
    })
    checked.forEach(i => {
      i.delete = true;
    })
    pmail = checked.concat(unChecked);
    setStatus(!status)
  }

  const markUnread = () => {
    const checked = data.filter( i => {
      return i.isCheck == true
    })
    const unChecked = data.filter( i => {
      return i.isCheck == false
    })
    checked.forEach(i => {
      i.isRead = false;
    })
    pmail = checked.concat(unChecked);
    setStatus(!status)
  }

  const markImportant = () => {
    const checked = data.filter( i => {
      return i.isCheck == true
    })
    const unChecked = data.filter( i => {
      return i.isCheck == false
    })
    checked.forEach(i=>{
      i.important = true
    })
    data = checked.concat(unChecked)
  }

  const markSpam = () => {
    const checked = data.filter( i => {
      return i.isCheck == true
    })
    const unChecked = data.filter( i => {
      return i.isCheck == false
    })
    checked.forEach(i=>{
      i.spam = true
    })
    data = checked.concat(unChecked)
  }

  const composeClose = () => {
    document.querySelector("#compose").classList.add('hidden');
  }

  const expand = () => {
    document.querySelector('#compose').classList.add('compose')
    document.querySelector("#min").classList.remove("hidden")
    document.querySelector("#exp").classList.add("hidden")
  }

  const minimise = () => {
    document.querySelector('#compose').classList.remove('compose')
    document.querySelector("#min").classList.add("hidden")
    document.querySelector("#exp").classList.remove("hidden")
  }

  useEffect(()=>{
    document.querySelector('#allcheck').addEventListener('click',()=>{
        if(document.querySelector('#allcheck').checked == true){
            document.querySelectorAll('.message-check').forEach(i => {
                i.checked = true
            })
            data.forEach( i => {
                i.isCheck = true
            })
            addList()            
        }
        else{
            document.querySelectorAll('.message-check').forEach(i => {
                i.checked = false
            })
            data.forEach(i => {
                i.isCheck = false
            })
            removeList()
        }
      })
  },[])



  return (
    <div className="h-screen overflow-scroll mt-4 ml-4 relative z-0 pb-32" id="mail">
        <div className="flex items-center text-xl mb-8">
            <input type="checkbox" className="mr-8" title="select" id="allcheck" name="allcheck"/>
            <VscRefresh className="mx-8" title="refresh" onClick={()=>window.location.reload()}></VscRefresh>
            <HiOutlineDotsVertical className="mx-8 focus:bg-slate-500" title="more" onClick={handleModal}></HiOutlineDotsVertical>
        </div>
        <div className="hidden py-4 px-16 border-2 rounded w-fit shadow-2xl bg-white absolute z-50 top-4 left-44" id='modal'>
            <p className="cursor-pointer" onClick={allRead}>Mark as all read</p>
            <hr />
            <p className="mt-4 text-slate-500" id="false-text">Select messages to see  <br /> more options</p>
            <ul id="true-text" className="hidden cursor-pointer">
                <li className="py-1 font-bold" onClick={deleteAll}>Delete All Message</li>
                <li className="py-1 font-bold" onClick={selectDelete}>Delete Selected Message</li>
                <li className="py-1 font-bold" onClick={markUnread}>Mark as unread</li>
                <li className="py-1 font-bold" onClick={markImportant}>Mark as important</li>
                <li className="py-1 font-bold" onClick={markSpam}>Mark as spam</li>
            </ul>
        </div>
        <div id="compose" className="hidden absolute bg-white border-2 border-slate-200 shadow-2xl z-50 bottom-24 right-0 py-2 w-[50%]">
            <div className="flex items-center justify-end pb-2">
              <i id="exp" className="mx-2 hover:bg-slate-400 p-1 rounded-lg" onClick={expand}><BiExpandAlt></BiExpandAlt></i>
              <i id="min" className="hidden mx-2 hover:bg-slate-400 p-1 rounded-lg" onClick={minimise}><FiMinimize2></FiMinimize2></i>
              <i className="mx-2 hover:bg-slate-400 p-1 rounded-lg" onClick={composeClose}><AiOutlineCloseCircle></AiOutlineCloseCircle></i>
            </div>
            <p className=" bg-slate-300 p-2">New Message</p>
            <form onSubmit={send}>
            <input type="email" ref={toRef} placeholder="Recipent" className="w-full p-2" required/>
            <hr />
            <input type="email" ref={fromRef} placeholder="From" className="w-full p-2" required/>
            <textarea ref={mailRef} cols="30" rows="10" className="w-full p-2" placeholder="Message" required></textarea>
            <div>
              <button className="py-2 px-5 rounded-lg bg-blue-400" type="submit">Send</button>
            </div>
            </form>
        </div>
            <nav className="flex list-none mb-4 sticky top-0 z-40 bg-white">
                <li className="w-1/4 mr-4 bg-white">
                    <NavLink to="/" className="flex pb-2 items-center" style={({ isActive }) => isActive ? {color: '#1d4ed8',background: '#ffffff',borderBottom:'2px solid #1d4ed8',borderRadius:'0'}: { color: 'black', background: 'white' }}><HiOutlineInbox className="mr-4 text-xl"></HiOutlineInbox>Primary</NavLink>
                </li>
                <li className="w-1/4 mr-4 bg-white">
                    <NavLink to="promotion" className="flex pb-2 items-center" style={({ isActive }) => isActive ? {color: '#1d4ed8',background: '#ffffff',borderBottom:'2px solid #1d4ed8',borderRadius:'0'} : { color: 'black', background: 'white' }}><BsTag className="mr-4 text-xl"></BsTag>Promotion</NavLink>
                </li>
                <li className="w-1/4 mr-4 bg-white">
                    <NavLink to="social" className="flex pb-2 items-center" style={({ isActive }) => isActive ? {color: '#1d4ed8',background: '#ffffff',borderBottom:'2px solid #1d4ed8',borderRadius:'0'} : { color: 'black', background: 'white' }}><TbUsers className="mr-4 text-xl"></TbUsers>Social</NavLink>
                </li>
            </nav>

        <Outlet context={[status,addList,removeList,pmail,prmail,smail]}></Outlet>
    </div>
  )
}

export default Mail