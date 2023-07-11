import React from 'react';
import {useYoutubeApi} from '../context/YoutubeApiContext';
import {useQuery} from '@tanstack/react-query';
import VideoCard  from './VideoCard';

export default function RelatedVideos( { id}) {
    const {youtube} = useYoutubeApi();
    const { 
        isLoding , 
        error,
        data:videos,
    } = useQuery(['related', id], ()=>
    youtube.relatedVideos(id),
    {staleTime: 1000 * 60 * 5 })
    
    return (
        <>
            {isLoding && <p>Loading..</p>}
            {error && <p>Somthing is wrong</p>}
            {videos && 
            <ul>
                {videos.map(video => <VideoCard key={video.id} video={video}/>)}
                </ul>}
        </>
    );
}

