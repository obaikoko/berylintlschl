'use client';
import React, { useState } from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = ({ videoId }) => {
  const opts = {
    height: '390',
    width: '440',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className='mx-auto rounded bg-red-900 w-1/2 p-10'>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

export default VideoPlayer;
