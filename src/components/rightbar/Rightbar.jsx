import './rightbar.css'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import MessageIcon from '@mui/icons-material/Message';

export default function Rightbar() {
  return (
    <div className='p-6 border-l flex flex-col items-start space-y-3 w-1/5'>
      <span className='w-full flex flex-col items-start space-y-3'>

        <div className='font-semibold flex flex-row w-full items-center space-x-3'>
          <PeopleAltIcon />
          <span>Friend requests</span>
        </div>

        <div className='group transition duration-150 ease-out rounded-xl p-3 flex flex-row w-full items-center justify-between space-x-3 hover:bg-gray-200 drop-shadow-none hover:drop-shadow'>
          <div className='flex flex-row items-center space-x-3'>
            <img className='h-10 w-10 object-cover rounded-full' src="/assets/pfp/1.jpg" alt="" />
            <a className='hover:underline underline-offset-2' href="">John Doe</a>
          </div>
          <div className='hidden group-hover:flex space-x-1'>
            <DeleteIcon className='cursor-pointer p-1 rounded-full hover:bg-white hover:text-red-500'/>
            <AddIcon className='cursor-pointer p-1 rounded-full hover:bg-white hover:text-green-500'/>
          </div>
        </div>

      </span>


      <span className='w-full flex flex-col items-start space-y-3'>

        <div className='font-semibold flex flex-row w-full items-center space-x-3'>
          <PeopleAltIcon />
          <span>Friends</span>
        </div>

        <div className='group transition duration-150 ease-out rounded-xl p-3 flex flex-row w-full items-center justify-between space-x-3 hover:bg-gray-200 drop-shadow-none hover:drop-shadow' href='https://www.google.com'>
          <div className='flex flex-row items-center space-x-3'>
            <img className='h-10 w-10 object-cover rounded-full' src="/assets/pfp/1.jpg" alt="" />
            <a className='hover:underline underline-offset-2' href="">John Doe</a>
          </div>
          <div className='hidden group-hover:flex'>
            <MessageIcon className='p-1 cursor-pointer hover:text-blue-500'/>
          </div>
        </div>

        <div className='group transition duration-150 ease-out rounded-xl p-3 flex flex-row w-full items-center justify-between space-x-3 hover:bg-gray-200 drop-shadow-none hover:drop-shadow' href='https://www.google.com'>
          <div className='flex flex-row items-center space-x-3'>
            <img className='h-10 w-10 object-cover rounded-full' src="/assets/pfp/2.jpg" alt="" />
            <a className='hover:underline underline-offset-2' href="">John Doe</a>
          </div>
          <div className='hidden group-hover:flex'>
            <MessageIcon className='p-1 cursor-pointer hover:text-blue-500'/>
          </div>
        </div>

        <div className='group transition duration-150 ease-out rounded-xl p-3 flex flex-row w-full items-center justify-between space-x-3 hover:bg-gray-200 drop-shadow-none hover:drop-shadow' href='https://www.google.com'>
          <div className='flex flex-row items-center space-x-3'>
            <img className='h-10 w-10 object-cover rounded-full' src="/assets/pfp/3.jpg" alt="" />
            <a className='hover:underline underline-offset-2' href="">John Doe</a>
          </div>
          <div className='hidden group-hover:flex'>
            <MessageIcon className='p-1 cursor-pointer hover:text-blue-500'/>
          </div>
        </div>

        <div className='group transition duration-150 ease-out rounded-xl p-3 flex flex-row w-full items-center justify-between space-x-3 hover:bg-gray-200 drop-shadow-none hover:drop-shadow' href='https://www.google.com'>
          <div className='flex flex-row items-center space-x-3'>
            <img className='h-10 w-10 object-cover rounded-full' src="/assets/pfp/4.jpg" alt="" />
            <a className='hover:underline underline-offset-2' href="">John Doe</a>
          </div>
          <div className='hidden group-hover:flex'>
            <MessageIcon className='p-1 cursor-pointer hover:text-blue-500'/>
          </div>
        </div>

        <div className='group transition duration-150 ease-out rounded-xl p-3 flex flex-row w-full items-center justify-between space-x-3 hover:bg-gray-200 drop-shadow-none hover:drop-shadow' href='https://www.google.com'>
          <div className='flex flex-row items-center space-x-3'>
            <img className='h-10 w-10 object-cover rounded-full' src="/assets/pfp/5.jpg" alt="" />
            <a className='hover:underline underline-offset-2' href="">John Doe</a>
          </div>
          <div className='hidden group-hover:flex'>
            <MessageIcon className='p-1 cursor-pointer hover:text-blue-500'/>
          </div>
        </div>

        <div className='group transition duration-150 ease-out rounded-xl p-3 flex flex-row w-full items-center justify-between space-x-3 hover:bg-gray-200 drop-shadow-none hover:drop-shadow' href='https://www.google.com'>
          <div className='flex flex-row items-center space-x-3'>
            <img className='h-10 w-10 object-cover rounded-full' src="/assets/pfp/6.jpg" alt="" />
            <a className='hover:underline underline-offset-2' href="">John Doe</a>
          </div>
          <div className='hidden group-hover:flex'>
            <MessageIcon className='p-1 cursor-pointer hover:text-blue-500'/>
          </div>
        </div>

        <div className='group transition duration-150 ease-out rounded-xl p-3 flex flex-row w-full items-center justify-between space-x-3 hover:bg-gray-200 drop-shadow-none hover:drop-shadow' href='https://www.google.com'>
          <div className='flex flex-row items-center space-x-3'>
            <img className='h-10 w-10 object-cover rounded-full' src="/assets/pfp/7.jpg" alt="" />
            <a className='hover:underline underline-offset-2' href="">John Doe</a>
          </div>
          <div className='hidden group-hover:flex'>
            <MessageIcon className='p-1 cursor-pointer hover:text-blue-500'/>
          </div>
        </div>

      </span>

    </div>
  )
}
