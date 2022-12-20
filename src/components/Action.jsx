import {BiPencil,BiCategory} from 'react-icons/bi'
import {HiOutlineInbox} from 'react-icons/hi'
import {AiOutlineStar,AiOutlineClockCircle,AiOutlineFile,AiOutlineDownCircle,AiOutlineUpCircle} from 'react-icons/ai'
import {FiSend} from 'react-icons/fi'
import {MdLabelImportantOutline,MdOutlineScheduleSend,MdOutlineEmail,MdLabelOutline} from 'react-icons/md'
import {BsChatSquareText} from 'react-icons/bs'
import {RiSpam2Line} from 'react-icons/ri'
import {CiTrash} from 'react-icons/ci'
import { useEffect } from 'react'
import { BrowserRouter as Router,Routes,Route,NavLink } from 'react-router-dom'
import Mail from './Mail'
import Starred from '../pages/Starred'
import Primary from '../pages/Primary'
import Promotion from '../pages/Promotion'
import Social from '../pages/Social'
import Important from '../pages/Important'
import Spam from '../pages/Spam'
import Sent from '../pages/Sent'
import Detail from '../pages/Detail'

const Action = () => {

  const show = () => {
    document.querySelector('.more').style.display = "none";
    let items = document.querySelectorAll('.noshow');
    items.forEach(i => {
      i.classList.replace('noshow','show')
    })
  }

  const noshow = () => {
    document.querySelector('.more').style.display = "flex";
    let items = document.querySelectorAll('.show');
    items.forEach(i => {
      i.classList.replace('show','noshow')
    })
  }

  const compose = () => {
    document.querySelector("#compose").classList.toggle('hidden')
  }
   
  useEffect(()=>{
    document.querySelector('#action-list').addEventListener('mouseover',(event)=>{
      document.querySelector('#action-container').classList.remove('hide')
    })

    document.querySelector('#action-list').addEventListener('mouseout',()=>{
      document.querySelector('#action-container').classList.add('hide')
    })

  })


  return (
    <Router>
    <div className="h-screen overflow-scroll shadow-2xl hide md:pl-4" id="action-container">
        <ul className='flex flex-col pb-20' id="action-list">
          <li className='sticky top-0 px-2 py-4 rounded-xl bg-cyan-200 flex' onClick={compose}><i><BiPencil className='text-lg md:text-2xl'></BiPencil></i><span className='ml-4 cursor-pointer'>Compose</span></li>
          <NavLink to="/" className='action mt-4'><li className='flex items-center' title='Inbox'><i><HiOutlineInbox className=' text-sm md:text-xl'></HiOutlineInbox></i><span className='ml-4 cursor-pointer text-xs'>Inbox</span></li></NavLink>
          <NavLink to="starred" className='action'><li className='flex items-center' title='Starred'><i><AiOutlineStar className=' text-sm md:text-xl'></AiOutlineStar></i><span className='ml-4 cursor-pointer text-xs'>Starred</span></li></NavLink>
          <li className='action' title='Snoozed'><i><AiOutlineClockCircle className=' text-sm md:text-xl'></AiOutlineClockCircle></i><span className='ml-4 cursor-pointer text-xs'>Snoozed</span></li>
          <NavLink to="sent" className='action'><li className='flex items-center' title='Sent'><i><FiSend className=' text-sm md:text-xl'></FiSend></i><span className='ml-4 cursor-pointer text-xs'>Sent</span></li></NavLink>
          <li className='action' title='Draft'><i><AiOutlineFile className=' text-sm md:text-xl'></AiOutlineFile></i><span className='ml-4 cursor-pointer text-xs'>Draft</span></li>
          <li className='action more' title='More' onClick={show}><i><AiOutlineDownCircle className=' text-sm md:text-xl'></AiOutlineDownCircle></i><span className='ml-4 cursor-pointer text-xs'>More</span></li>
          <li className='action noshow' title='Less' onClick={noshow}><i><AiOutlineUpCircle className=' text-sm md:text-xl'></AiOutlineUpCircle></i><span className='ml-4 cursor-pointer text-xs'>Less</span></li>
          <NavLink to="important" className='action'><li className='flex items-center noshow' title='Important'><i><MdLabelImportantOutline className=' text-sm md:text-xl'></MdLabelImportantOutline></i><span className='ml-4 cursor-pointer text-xs'>Important</span></li></NavLink>
          <li className='action noshow' title='Chat'><i><BsChatSquareText className=' text-sm md:text-xl'></BsChatSquareText></i><span className='ml-4 cursor-pointer text-xs'>Chat</span></li>
          <li className='action noshow' title='Schedule'><i><MdOutlineScheduleSend className=' text-sm md:text-xl'></MdOutlineScheduleSend></i><span className='ml-4 cursor-pointer text-xs'>Schedule</span></li>
          <li className='action noshow' title='All Mail'><i><MdOutlineEmail className=' text-sm md:text-xl'></MdOutlineEmail></i><span className='ml-4 cursor-pointer text-xs'>All Mail</span></li>          
          <NavLink to="spam" className='action'><li className='flex items-center noshow' title='Spam'><i><RiSpam2Line className=' text-sm md:text-xl'></RiSpam2Line></i><span className='ml-4 cursor-pointer text-xs'>Spam</span></li></NavLink>
          <li className='action noshow' title='Trash'><i><CiTrash className=' text-sm md:text-xl'></CiTrash></i><span className='ml-4 cursor-pointer text-xs'>Trash</span></li>
          <li className='action noshow' title='Category'><i><BiCategory className=' text-sm md:text-xl'></BiCategory></i><span className='ml-4 cursor-pointer text-xs'>Category</span></li>
          <li className='action noshow' title='Manage Label'><i><MdLabelOutline className=' text-sm md:text-xl'></MdLabelOutline></i><span className='ml-4 cursor-pointer text-xs'>Manage Label</span></li>          
        </ul>
    </div>
    <Routes>
      <Route path="/" element={<Mail></Mail>}>
        <Route path="/" element={<Primary></Primary>}></Route>
        <Route path="/promotion" element={<Promotion></Promotion>}></Route>
        <Route path='/social' element={<Social></Social>}></Route>
      </Route>
      <Route path="/starred" element={<Starred></Starred>}></Route>
      <Route path="/sent" element={<Sent></Sent>}></Route>
      <Route path="/important" element={<Important></Important>}></Route>
      <Route path='/spam' element={<Spam></Spam>}></Route>
      <Route path="/detail/:id" element={<Detail></Detail>}></Route>
      <Route path="/promotion/detail/:id" element={<Detail></Detail>}></Route>
      <Route path="social/detail/:id" element={<Detail></Detail>}></Route>
      <Route path="starred/detail/:id" element={<Detail></Detail>}></Route>
      <Route path="sent/detail/:id" element={<Detail></Detail>}></Route>
      <Route path="important/detail:id" element={<Detail></Detail>}></Route>
      <Route path="spam/detail/:id" element={<Detail></Detail>}></Route>
    </Routes>
    </Router>
    
  )
}

export default Action