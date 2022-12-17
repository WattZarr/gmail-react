import {FcMenu} from 'react-icons/fc';
import logo from '../asset/logo_gmail.png';
import {BsSearch} from 'react-icons/bs';
import {AiOutlineQuestionCircle} from 'react-icons/ai'
import {FiSettings} from 'react-icons/fi'
import {TbGridDots} from 'react-icons/tb'
import {BiUser} from 'react-icons/bi'

const Nav = () => {
  return (
    <div className='flex items-center justify-between gap-10 sticky top-0 bg-white'>
        <div className="logo flex items-center gap-4">
            <div className='w-10 h-10 p-1 rounded-full overflow-hidden flex items-center btn'><FcMenu className='text-3xl'></FcMenu></div>
            <img src={logo} alt="" />
        </div>
        <div className="search grow">
            <div className='shadow flex items-center gap-5 bg-gray-200 p-2 drop-shadow-lg rounded-md'>
                <BsSearch></BsSearch>
                <input type="text" placeholder='Search Mail' className='border-0 bg-gray-200 w-full'/>
            </div>
        </div>
        <div className="extra">
            <div className='flex gap-5 text-2xl'>
                <AiOutlineQuestionCircle title='support'></AiOutlineQuestionCircle>
                <FiSettings title='setting'></FiSettings>
                <TbGridDots title="Google apps"></TbGridDots>
                <BiUser title="Google Account"></BiUser>
            </div>
        </div>
    </div>
  )
}

export default Nav