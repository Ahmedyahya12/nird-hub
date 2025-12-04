import { useState, useRef, useEffect } from 'react';

const VideoBackground = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(50);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    
    if (videoRef.current) {
      videoRef.current.volume = newVolume / 100;
      
      if (newVolume > 0 && isMuted) {
        videoRef.current.muted = false;
        setIsMuted(false);
      }
    }
  };

  const getVolumeIcon = () => {
    if (isMuted || volume == 0) return '🔇';
    if (volume < 30) return '🔈';
    if (volume < 70) return '🔉';
    return '🔊';
  };

  return (
    <>
      {/* Vidéo confinée au Hero */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 object-cover w-full h-full -z-10"
        autoPlay
        loop
        muted={isMuted}
        playsInline
        preload="auto"
      >
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>

      {/* Overlay sombre pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-black/30 -z-10" />

      {/* Contrôle du volume */}
      <div 
        className="absolute z-50 flex items-center gap-3 p-3 rounded-full bottom-8 right-8 bg-black/50 backdrop-blur-sm"
        onMouseEnter={() => setShowVolumeSlider(true)}
        onMouseLeave={() => setShowVolumeSlider(false)}
      >
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={handleVolumeChange}
          className={`transition-all duration-300 ${
            showVolumeSlider ? 'w-24 opacity-100' : 'w-0 opacity-0'
          } h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer`}
          style={{ accentColor: '#00D1B2' }}
        />

        <button
          onClick={toggleMute}
          className="text-2xl transition-transform hover:scale-110"
        >
          {getVolumeIcon()}
        </button>

        <span className="text-white text-sm font-medium min-w-[35px]">
          {isMuted ? '0%' : `${volume}%`}
        </span>
      </div>
    </>
  );
};

export default VideoBackground;