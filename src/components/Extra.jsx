import cal from '../asset/calendar.png'
import keep from '../asset/keep.png'
import tasks from '../asset/tasks.png'
import contacts from '../asset/contacts.png'
import add from '../asset/add.png'
import {AiOutlineRightCircle} from 'react-icons/ai'

const Extra = () => {

  const hideSidePanel = () => {
    document.querySelector("#extra").classList.toggle('side-panel-hide')
    if(document.querySelector("#extra").classList.contains('side-panel-hide') == true){
      document.querySelector("#toggle").title = "Show this side panel";
    }
    else{
      document.querySelector("#toggle").title = "Hide this side panel";
    }
    
  }

  return (
    <div className="p-2 h-screen flex flex-col items-center" id="extra">
      <div className='flex flex-col items-center'>
      <img src={cal} alt="" className="ex mb-2" title='calendar'/>
        <img src={keep} alt="" className="ex my-2" title='keep'/>
        <img src={tasks} alt="" className="ex my-2" title='tasks'/>
        <img src={contacts} alt="" className="ex my-2" title='contacts'/>
        <img src={add} alt="" className="ex mt-20" title='add'/>
      </div>

      <button className='rounded-full shadow-lg mt-32' id='toggle' title='Hide this side panel' onClick={hideSidePanel}>
        <AiOutlineRightCircle className='text-2xl' id="btn"></AiOutlineRightCircle>
      </button>
    </div>
  )
}

export default Extra