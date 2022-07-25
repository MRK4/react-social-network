import './topbar.css'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';


export default function Topbar() {
  return (
    <div className='z-50 sticky top-0 px-12 py-2 text-white bg-blue-500 flex flex-row items-center justify-between shadow-lg'>

        <div>

          <span className='font-bold text-3xl cursor-pointer'>React Network</span>

        </div>

        <div className='w-2/5 font-semibold py-2 px-3 rounded-full bg-white flex flex-row items-center space-x-2'>
          <SearchIcon className='text-gray-700' />
          <input className='w-full text-gray-700 focus:outline-0' type="text" placeholder="Search for friends or content" />
        </div>

        <div className='flex flex-row items-center space-x-6'>

          <div className='flex flex-row items-center space-x-4'>

            <div>
              <PersonIcon className='relative cursor-pointer'/>
              <span className='transform -translate-y-8 translate-x-4 flex items-center justify-center text-xs w-4 h-4 absolute bg-red-500 rounded-full'>1</span>
            </div>

            <div>
              <ChatIcon className='relative cursor-pointer'/>
              <span className='transform -translate-y-8 translate-x-4 flex items-center justify-center text-xs w-4 h-4 absolute bg-red-500 rounded-full'>2</span>
            </div>

            <div>
              <NotificationsIcon className='relative cursor-pointer'/>
              <span className='transform -translate-y-8 translate-x-4 flex items-center justify-center text-xs w-4 h-4 absolute bg-red-500 rounded-full'>3</span>
            </div>

          </div>

          <img className='cursor-pointer h-10 w-10 object-cover rounded-full' src="/assets/pfp/1.jpg" alt="" />

        </div>

    </div>
  )
}
