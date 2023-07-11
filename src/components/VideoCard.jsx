import React from 'react';
import { formatAgo } from '../util/data';
import { useNavigate } from 'react-router-dom';


export default function VideoCard({ video ,type}) {
    const navigate = useNavigate();
    const {title , thumbnails, channelTitle ,publishedAt} = video.snippet;
    const isList = type === 'list';
    return (
        <li 
        className={isList ? 'flex gap-1 m-2' : ''}
        onClick={() => {navigate(`/videos/watch/${video.id}`, { state: { video } })}}>
           <img className={isList ? 'w-60' : 'w-full'} 
           src={thumbnails.medium.url} alt={title} 
           />
           <div className={isList ? 'w-60 mr-2' : 'w-full'}>
            <p className='font-semibold my-2'>{title}</p>
            <p className='text-sm opacity-80'>{channelTitle}</p>
            <p className='text-sm opacity-80'>{formatAgo(publishedAt)}</p>
           </div>
        </li>
    );
}
