import './feed.css'
import {useState} from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

export default function Feed() {

  const [like, setLike] = useState(false);

  return (
    <div className='w-full py-8 flex flex-col items-center space-y-4'>

      <div className='bg-gray-100 rounded-xl shadow-lg p-6 w-1/2 flex flex-col justify-center items-center space-y-6'>
        <div className='px-1 w-full flex flex-row items-center justify-start space-x-3'>
          <img className='h-14 w-14 object-cover rounded-full' src="/assets/pfp/1.jpg" alt="" />
          <div className='flex flex-col'>
            <a className='text-lg font-semibold hover:underline underline-offset-2' href="https://www.google.com">John Doe</a>
            <span className='text-xs text-gray-500'>Photographer</span>
          </div>
        </div>
        <div className=''>
          <textarea placeholder="Écrivez quelque chose ..." className='p-3 w-full shadow-inner rounded-xl outline-2 outline-blue-200 focus:outline-blue-500' name="postmessage" id="postmessage" cols="80"></textarea>
        </div>
        <div className='w-full flex flex-row justify-between'>
          <div>
            <span className='font-semibold cursor-pointer px-3 py-2 hover:bg-blue-500 text-blue-500 hover:text-white rounded-xl border-2 border-blue-500'>Envoyer</span>
          </div>
          <div className='flex flex-row space-x-3'>
            <span>
              <label for="pictureInput"><AddAPhotoIcon className='cursor-pointer hover:text-blue-500'/></label>
              <input className='hidden' type="file" name="pictureInput" id="pictureInput" />
            </span>
            <span>
              <label for="soundInput"><VolumeUpIcon data-tooltip-target="tooltip-default" className='cursor-pointer hover:text-green-500'/></label>
              <input className='hidden' type="file" name="soundInput" id="soundInput" />
            </span>
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-start items-center w-3/5 space-y-6 divide-y divide-solid'>

        <div className='w-4/5 p-4 flex flex-col justify-center items-center space-y-6'>

          {/* HEADER, PHOTO DE PROFIL ET NOM */}
          <div className='px-1 w-full flex flex-row items-start justify-between'>
            <div className='flex flex-row items-center space-x-3'>
              <img className='cursor-pointer h-14 w-14 object-cover rounded-full' src="/assets/pfp/1.jpg" alt="" />
              <div className='flex flex-col'>
                <a className='text-lg font-semibold hover:underline underline-offset-2' href="https://www.google.com">John Doe</a>
                <span className='text-xs text-gray-500'>Photographer</span>
              </div>
            </div>
            <div className='text-xs text-gray-500'>5 minutes ago ...</div>
          </div>

          {/* CONTENU MESSAGE */}
          <div className='space-y-3'>
            <img className='rounded-xl h-auto w-full' src="/assets/posts/1.jpg" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nam voluptas omnis delectus amet. A cum, voluptatem quod officia quae fugit deserunt dolore expedita voluptate, minus suscipit distinctio possimus mollitia.</p>
          </div>

          {/* ICONES LIKE ET PARTAGE */}
          <div className='w-full flex flex-row justify-between'>
            <div className='w-full flex flex-row justify-end space-x-3'>
              <span onClick={() => setLike((prevState) => !prevState)}>
                {like ? <FavoriteBorderIcon className='cursor-pointer text-gray-800 hover:text-red-500'/> : <FavoriteIcon className='cursor-pointer text-red-500'/>}
              </span>
              <span>
                <ShareIcon className='cursor-pointer hover:text-blue-500'/>
              </span>
            </div>
          </div>

          {/* COMMENTAIRES */}
          <div className='flex flex-row space-x-3'>
            <img className='h-10 w-10 shadow-lg object-cover rounded-full' src="/assets/pfp/1.jpg" alt="" />
            <div className='p-3 w-full shadow-lg rounded-xl outline-2 outline-blue-200 focus:outline-blue-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam facilis est reiciendis minima sed et quia officiis commodi dicta autem expedita voluptate modi tempore adipisci amet, omnis non, laudantium quod.</div>
          </div>

          {/* REPONDRE */}
          <div className='flex flex-col space-y-6'>
            <div className='flex flex-row space-x-3'>
              <img className='h-10 w-10 object-cover rounded-full' src="/assets/pfp/1.jpg" alt="" />
              <textarea placeholder="Écrivez quelque chose ..." className='p-3 w-full shadow-inner rounded-xl outline-2 outline-blue-200 focus:outline-blue-500' name="replymessage" id="replymessage" cols="80"></textarea>
            </div>
            <div className='flex justify-end'>
              <span className='font-semibold cursor-pointer px-3 py-2 bg-gray-200 hover:bg-gray-100 hover:text-gray-500 rounded-xl'>Répondre</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}