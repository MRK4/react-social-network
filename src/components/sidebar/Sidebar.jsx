import './sidebar.css'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

export default function Sidebar() {
  return (
    <div className='border-r py-6 px-6 w-1/5 text-lg sticky top-0 flex flex-col space-y-6 items-center'>

        <div className='w-full flex flex-col items-start space-y-3'>
            <a className='transition duration-150 ease-out rounded-xl p-3 flex flex-row w-full items-center space-x-3 hover:bg-gray-200 drop-shadow-none hover:drop-shadow hover:underline underline-offset-2' href='https://www.google.com'>
                <RssFeedIcon/>
                <span>Feed</span>
            </a>
            <a className='transition duration-150 ease-out rounded-xl p-3 flex flex-row w-full items-center space-x-3 hover:bg-gray-200 drop-shadow-none hover:drop-shadow hover:underline underline-offset-2' href='https://www.google.com'>
                <ChatIcon/>
                <span>Chats</span>
            </a>
            <a className='transition duration-150 ease-out rounded-xl p-3 flex flex-row w-full items-center space-x-3 hover:bg-gray-200 drop-shadow-none hover:drop-shadow hover:underline underline-offset-2' href='https://www.google.com'>
                <PlayCircleIcon/>
                <span>Videos</span>
            </a>
            <a className='transition duration-150 ease-out rounded-xl p-3 flex flex-row w-full items-center space-x-3 hover:bg-gray-200 drop-shadow-none hover:drop-shadow hover:underline underline-offset-2' href='https://www.google.com'>
                <GroupIcon/>
                <span>Groups</span>
            </a>
            <a className='transition duration-150 ease-out rounded-xl p-3 flex flex-row w-full items-center space-x-3 hover:bg-gray-200 drop-shadow-none hover:drop-shadow hover:underline underline-offset-2' href='https://www.google.com'>
                <BookmarkIcon/>
                <span>Bookmars</span>
            </a>
            <a className='transition duration-150 ease-out rounded-xl p-3 flex flex-row w-full items-center space-x-3 hover:bg-gray-200 drop-shadow-none hover:drop-shadow hover:underline underline-offset-2' href='https://www.google.com'>
                <HelpOutlineIcon/>
                <span>Questions</span>
            </a>
            <a className='transition duration-150 ease-out rounded-xl p-3 flex flex-row w-full items-center space-x-3 hover:bg-gray-200 drop-shadow-none hover:drop-shadow hover:underline underline-offset-2' href='https://www.google.com'>
                <WorkIcon />
                <span>Jobs</span>
            </a>
            <a className='transition duration-150 ease-out rounded-xl p-3 flex flex-row w-full items-center space-x-3 hover:bg-gray-200 drop-shadow-none hover:drop-shadow hover:underline underline-offset-2' href='https://www.google.com'>
                <EventIcon/>
                <span>Events</span>
            </a>
            <a className='transition duration-150 ease-out rounded-xl p-3 flex flex-row w-full items-center space-x-3 hover:bg-gray-200 drop-shadow-none hover:drop-shadow hover:underline underline-offset-2' href='https://www.google.com'>
                <SchoolIcon/>
                <span>Courses</span>
            </a>
        </div>

        <span className='w-4/5 bg-[#e5e7eb] h-px w-full'></span>

        <div className='w-full flex flex-col items-start space-y-3'>
            <div className='font-semibold flex flex-row w-full items-center space-x-3'>
                <ConnectWithoutContactIcon/>
                <span>People Online</span>
            </div>
            <a className='transition duration-150 ease-out rounded-xl p-3 flex flex-row w-full items-center space-x-3 hover:bg-gray-200 drop-shadow-none hover:drop-shadow hover:underline underline-offset-2' href='https://www.google.com'>
                <img className='h-10 w-10 object-cover rounded-full' src="/assets/pfp/1.jpg" alt="" />
                <span>John Doe</span>
            </a>
            <a className='transition duration-150 ease-out rounded-xl p-3 flex flex-row w-full items-center space-x-3 hover:bg-gray-200 drop-shadow-none hover:drop-shadow hover:underline underline-offset-2' href='https://www.google.com'>
                <img className='h-10 w-10 object-cover rounded-full' src="/assets/pfp/2.jpg" alt="" />
                <span>John Doe</span>
            </a>
            <a className='transition duration-150 ease-out rounded-xl p-3 flex flex-row w-full items-center space-x-3 hover:bg-gray-200 drop-shadow-none hover:drop-shadow hover:underline underline-offset-2' href='https://www.google.com'>
                <img className='h-10 w-10 object-cover rounded-full' src="/assets/pfp/3.jpg" alt="" />
                <span>John Doe</span>
            </a>
            <a className='transition duration-150 ease-out rounded-xl p-3 flex flex-row w-full items-center space-x-3 hover:bg-gray-200 drop-shadow-none hover:drop-shadow hover:underline underline-offset-2' href='https://www.google.com'>
                <img className='h-10 w-10 object-cover rounded-full' src="/assets/pfp/4.jpg" alt="" />
                <span>John Doe</span>
            </a>
            <a className='transition duration-150 ease-out rounded-xl p-3 flex flex-row w-full items-center space-x-3 hover:bg-gray-200 drop-shadow-none hover:drop-shadow hover:underline underline-offset-2' href='https://www.google.com'>
                <img className='h-10 w-10 object-cover rounded-full' src="/assets/pfp/5.jpg" alt="" />
                <span>John Doe</span>
            </a>
            <a className='transition duration-150 ease-out rounded-xl p-3 flex flex-row w-full items-center space-x-3 hover:bg-gray-200 drop-shadow-none hover:drop-shadow hover:underline underline-offset-2' href='https://www.google.com'>
                <img className='h-10 w-10 object-cover rounded-full' src="/assets/pfp/6.jpg" alt="" />
                <span>John Doe</span>
            </a>
            <a className='transition duration-150 ease-out rounded-xl p-3 flex flex-row w-full items-center space-x-3 hover:bg-gray-200 drop-shadow-none hover:drop-shadow hover:underline underline-offset-2' href='https://www.google.com'>
                <img className='h-10 w-10 object-cover rounded-full' src="/assets/pfp/7.jpg" alt="" />
                <span>John Doe</span>
            </a>
        </div>

    </div>
  )
}
