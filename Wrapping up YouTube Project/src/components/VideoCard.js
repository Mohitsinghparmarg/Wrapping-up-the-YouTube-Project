import React from 'react'

const VideoCard = ({info}) => {
    console.log(info);
    // const {snippet,statistics} = info;
    //  const {channelTitle,title,thumbnails} = snippet;

  return (
    
    <div className='p-2 m-2 w-72 shadow-lg'>
         <img className='rounded-lg bg-gray-500' alt='thumbnail' src={info?.snippet?.thumbnails?.medium?.url}/>
         <ul>
             <li className='font-bold py-2'>{info?.snippet?.title}</li>
             <li>{info?.snippet?.channelTitle}</li>
             <li>{ info?.statistics?.viewCount} views</li>
         </ul>
    </div>
  )
}

export default VideoCard
