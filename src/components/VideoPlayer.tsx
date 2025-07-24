import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, RotateCcw, Settings } from 'lucide-react';

interface VideoPlayerProps {
  currentCamera: number;
  onCameraChange: (cameraId: number) => void;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ currentCamera, onCameraChange }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  
  const cameras = [
    { id: 1, thumbnail: '/assets/Screenshot (9).png' },
    { id: 2, thumbnail: 'https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?auto=compress&cs=tinysrgb&w=400' }
  ];

  return (
    <div className="bg-black rounded-lg overflow-hidden">
    
      <div className="relative bg-black aspect-video">
        <img 
src="/assets/Screenshot (9).png" 
          alt="CCTV Feed"
          className="w-full h-full object-cover"
        />
        
        <div className="absolute top-4 left-4 bg-black/80 px-2 py-1 rounded text-xs">
          <span className="text-white font-mono">
            📅 24/7/2025 - 03:12:37
          </span>
        </div>

        <div className="absolute bottom-4 left-4 bg-red-600 px-2 py-1 rounded text-xs">
          <span className="text-white font-semibold">
            📹 Camera - 01
          </span>
        </div>

        <div className="absolute bottom-4 right-4 flex space-x-2">
          {cameras.map((camera) => (
            <div key={camera.id} className="relative">
              <img 
                src={camera.thumbnail}
                alt={`Camera ${camera.id}`}
                className="w-24 h-16 object-cover rounded border border-gray-600"
              />
              <div className="absolute bottom-1 left-1 bg-black/80 px-1 rounded text-xs text-white">
                Camera - 0{camera.id}
              </div>
              <button className="absolute top-1 right-1 text-white text-xs">⋮</button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-black p-4 border-t border-gray-800">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <button className="text-gray-400 hover:text-white p-1 transition-colors">
              <SkipBack className="w-4 h-4" />
            </button>
            
            <button className="text-gray-400 hover:text-white p-1 transition-colors">
              <RotateCcw className="w-4 h-4" />
            </button>
            
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-white hover:bg-gray-200 p-2 rounded-full transition-colors"
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 text-black" />
              ) : (
                <Play className="w-4 h-4 text-black ml-0.5" />
              )}
            </button>
            
            <button className="text-gray-400 hover:text-white p-1 transition-colors">
              <SkipForward className="w-4 h-4" />
            </button>
            
            <button className="text-gray-400 hover:text-white p-1 transition-colors">
              <Volume2 className="w-4 h-4" />
            </button>

            <span className="text-white font-mono text-sm ml-4">
              03:12:37 (15-Jun-2025)
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button className="text-gray-400 hover:text-white p-1 transition-colors">
              <Settings className="w-4 h-4" />
            </button>
            <button className="text-gray-400 hover:text-white p-1 transition-colors">
              ⚡
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};