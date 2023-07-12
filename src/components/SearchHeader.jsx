import React, { useEffect, useState } from 'react';
import { AiOutlineSearch, AiFillYoutube } from 'react-icons/ai';
import { Link,useNavigate,useParams  } from "react-router-dom";


export default function SearchHeader() {
    const {keyword} = useParams();
    const navigate = useNavigate();
    const [text , setText] = useState('');
    const HandleonSubmit = (e) => {
        e.preventDefault();
        navigate(`/videos/${text}`);
    };
    
    //키워드가변경될떄마다 실행
    useEffect(() => setText(keyword || '') ,[keyword])

    return (
        <header className='w-full flex p-4 text-2xl border-b border-zinc-600 mb-4'>
        <Link to='/' className='flex items-center'>
          <AiFillYoutube className='text-4xl text-brand' />
          <h1 className='font-bold ml-2 text-3xl'>Youtube</h1>
        </Link>
        <form className='w-full flex justify-center' onSubmit={HandleonSubmit}>
          <input
            className='w-7/12 p-2 outline-none bg-black text-gray-50'
            type='text'
            placeholder='Search...'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
            <button className='bg-zinc-600 px-4'>
                <AiOutlineSearch />
            </button>
            </form>
        </header>
    );
}





