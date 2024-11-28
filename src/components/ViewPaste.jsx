import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import '../App.css'

const ViewPaste = () => {
  const { id } = useParams();

  const pastes = useSelector((state) => state.paste.pastes);

  // Filter pastes based on search term (by title or content)
  const paste = pastes.filter((paste) => paste._id === id)[0];
  console.log(paste.content);
  console.log(paste.title);
  
  
  
  return (
    <div className='mt-6'>
          <div className='flex justify-center gap-6'>
              <input
                  className='p-2 rounded mt-2 pl-4'
                  type="text"
                  placeholder='enter title here'
                  value={paste.title}
                  disabled
              />
              <input
              className='p-2 rounded mt-2 pl-4'
              value={paste.content}
              placeholder='enter content here'
              disabled
              rows={20}
              cols={70}
          ></input>
          </div>
          <div className='flex justify-center gap-4'>
            <h1>Title:</h1>
            <p>{paste.title}</p>
          </div>
          <div className=''>
            <h1>Nots Content</h1>
            <p>{paste.content}</p>
          </div>
    </div>
  )
}

export default ViewPaste;

