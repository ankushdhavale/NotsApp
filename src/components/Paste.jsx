import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFormPastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';
import { NavLink } from 'react-router-dom';
import '../App.css'

const Paste = () => {

  const pastes = useSelector((state) => state.paste.pastes)
  console.log(pastes);
  
  const [searchTerm, setSerchTerm] = useState('');
  const dispatch = useDispatch();
  const filteredData = pastes.filter((paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase()));
  
  const handleDelete = (pasteId) => {
    dispatch(removeFormPastes(pasteId))
  }
  
  return (
    <div>
      <input
        className='showInput p-2 pl-3 min-w-[400px] rounded mt-5'
        type="text"
        placeholder='Search Here'
        value={searchTerm}
        onChange={(e)=>setSerchTerm(e.target.value)}
      />
      <div className='flex gap-10 flex-wrap mt-8 mx-5'>
        {
          filteredData.length > 0 &&
          filteredData.map((paste,index) => {
            return (
              <div
                key={index}
                className='rounded mt-2 border py-3 px-4 w-96'  
              >
                <p>{paste.title}</p>
                <p>{paste.content}</p>
                <div className='flex flex-row place-content-evenly my-4'>
                  <button className='border py-1 px-3 rounded border-stone-50/30'>
                    <NavLink to={`/?pasteId=${paste?._id}`}>
                      Edit
                    </NavLink>
                  </button>
                  <button className='border py-1 px-3 rounded border-stone-50/30'>
                    <NavLink to={`/pastes/${paste?._id}`}>
                      View
                    </NavLink>
                  </button>
                  <button className='border py-1 px-3 rounded border-stone-50/30'
                    onClick={() => {
                      navigator.clipboard.writeText(paste?.content)
                      toast.success("Copied Sucssesfully")
                    }}
                    >Copy</button>
                  <button 
                    className='border py-1 px-3 rounded border-stone-50/30'
                    onClick={() => handleDelete(paste?._id)}>Delete</button>
                </div>
              </div>)
          })
        }
      </div>
    </div>
  )
}

export default Paste
