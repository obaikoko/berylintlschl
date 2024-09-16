'use client';
import React from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = ({ videoId }) => {
  const opts = {
    height: '390',
    width: '80%', // Make it responsive
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className='mx-auto w-full md:w-3/4 lg:w-1/2 p-4 bg-gray-900 rounded-lg shadow-lg'>
      <div className='relative pb-16x9'>
        <YouTube
          videoId={videoId}
          opts={opts}
          className='absolute inset-0 w-full h-full'
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
