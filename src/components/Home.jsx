import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';
import '../App.css'

const Home = () => {
    const [title, setTitle] = useState("");
    const [value, setValue] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const pasteId = searchParams.get("pasteId")
    const dispatch = useDispatch();
    const allPastes = useSelector((state)=>state.paste.pastes)

    function createPaste() {
        const paste = {
            title: title,
            content: value,
            _id: pasteId || Date.now.toString(30),
            createdAt: new Date().toISOString()
        }
        if (paste === 0) {
            
        }        
        if (pasteId) {
            //update
            dispatch(updateToPastes(paste));
            
        } else {
            //create
            dispatch(addToPastes(paste));
        }

        setValue('');
        setTitle('');
        setSearchParams({});
    }

    useEffect(() => {
        if (pasteId) {
            const paste = allPastes.find((p) => p._id === pasteId);
            setTitle(paste.title);
            setValue(paste.content);
        }
    }, [pasteId])
    

  return (
    <div className='header mt-6'>
        <h1 className='w-full font-semibold py-1 px-3 text-5xl'>NoteMaster</h1>
        <p>Anytime, anywhere – it's Note time! Go!</p>
          <div className='flex-row items-center justify-center gap-10 mt-12 lg:flex-col'>
              <input
                  className='p-2 rounded mt-2 pl-4 outline-none m-3 text-black'
                  type="text"
                  placeholder='Enter title here'
                  value={title}
                  onChange={(e)=>setTitle(e.target.value)}
              />
              <input
                  className='p-2 rounded outline-none mt-2 pl-4 m-3 text-black'
                  value={value}
                  placeholder='Enter content here'
                  onChange={(e)=>setValue(e.target.value)}
              ></input>
          </div>
          <button onClick={createPaste} className='px-5 text-[15px] border py-2 rounded mt-6 border-stone-50/30'>
                  {
                      pasteId ? "Update My Paste" : "Create My Paste"
                  }
        </button>
    </div>
  )
}

export default Home
