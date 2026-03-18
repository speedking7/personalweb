import { useState, useRef, useEffect } from 'react';
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Repeat,
  Shuffle,
  Heart,
} from 'lucide-react';
import { songs } from '@/data/music';
import { Slider } from '@/components/ui/slider';

export function Music() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [likedSongs, setLikedSongs] = useState<Set<string>>(new Set());

  const audioRef = useRef<HTMLAudioElement>(null);
  const currentSong = songs[currentSongIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(() => {
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentSongIndex]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleEnded = () => {
    if (isRepeat) {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }
    } else {
      handleNext();
    }
  };

  const handleSeek = (value: number[]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value[0];
      setCurrentTime(value[0]);
    }
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    if (isShuffle) {
      const nextIndex = Math.floor(Math.random() * songs.length);
      setCurrentSongIndex(nextIndex);
    } else {
      setCurrentSongIndex((prev) => (prev + 1) % songs.length);
    }
  };

  const handlePrev = () => {
    setCurrentSongIndex((prev) => (prev - 1 + songs.length) % songs.length);
  };

  const toggleLike = (songId: string) => {
    setLikedSongs((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(songId)) {
        newSet.delete(songId);
      } else {
        newSet.add(songId);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-[#f0efe9] pt-24 pb-16">
      <audio
        ref={audioRef}
        src={currentSong.url}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
      />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-medium text-[#1a1a1a] mb-4">
            音乐馆
          </h1>
          <p className="text-[#6b6b6b]">享受音乐，放松心情</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Player */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              {/* Album Art */}
              <div className="flex justify-center mb-8">
                <div
                  className={`relative w-64 h-64 rounded-2xl overflow-hidden shadow-lg ${
                    isPlaying ? 'animate-pulse' : ''
                  }`}
                >
                  <img
                    src={currentSong.cover}
                    alt={currentSong.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Song Info */}
              <div className="text-center mb-8">
                <h2 className="text-2xl font-medium text-[#1a1a1a] mb-2">
                  {currentSong.title}
                </h2>
                <p className="text-[#6b6b6b]">{currentSong.artist}</p>
              </div>

              {/* Progress */}
              <div className="mb-6">
                <Slider
                  value={[currentTime]}
                  max={currentSong.duration}
                  step={1}
                  onValueChange={handleSeek}
                  className="w-full"
                />
                <div className="flex justify-between text-[#9ca3af] text-sm mt-2">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(currentSong.duration)}</span>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center gap-6 mb-6">
                <button
                  onClick={() => setIsShuffle(!isShuffle)}
                  className={`p-2 rounded-full transition-colors ${
                    isShuffle ? 'text-[#1a1a1a]' : 'text-[#9ca3af] hover:text-[#6b6b6b]'
                  }`}
                >
                  <Shuffle className="w-5 h-5" />
                </button>
                <button
                  onClick={handlePrev}
                  className="p-3 rounded-full bg-[#f0f0f0] text-[#1a1a1a] hover:bg-[#e5e5e5] transition-colors"
                >
                  <SkipBack className="w-6 h-6" />
                </button>
                <button
                  onClick={handlePlayPause}
                  className="p-4 rounded-full bg-[#1a1a1a] text-white hover:bg-[#1a1a1a]/85 transition-colors"
                >
                  {isPlaying ? (
                    <Pause className="w-8 h-8" />
                  ) : (
                    <Play className="w-8 h-8 ml-1" />
                  )}
                </button>
                <button
                  onClick={handleNext}
                  className="p-3 rounded-full bg-[#f0f0f0] text-[#1a1a1a] hover:bg-[#e5e5e5] transition-colors"
                >
                  <SkipForward className="w-6 h-6" />
                </button>
                <button
                  onClick={() => setIsRepeat(!isRepeat)}
                  className={`p-2 rounded-full transition-colors ${
                    isRepeat ? 'text-[#1a1a1a]' : 'text-[#9ca3af] hover:text-[#6b6b6b]'
                  }`}
                >
                  <Repeat className="w-5 h-5" />
                </button>
              </div>

              {/* Volume */}
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="text-[#9ca3af] hover:text-[#6b6b6b]"
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5" />
                  ) : (
                    <Volume2 className="w-5 h-5" />
                  )}
                </button>
                <Slider
                  value={[isMuted ? 0 : volume]}
                  max={1}
                  step={0.01}
                  onValueChange={(v) => setVolume(v[0])}
                  className="w-32"
                />
              </div>
            </div>
          </div>

          {/* Playlist */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-medium text-[#1a1a1a]">播放列表</h3>
              <span className="text-[#9ca3af] text-sm">{songs.length} 首</span>
            </div>
            <div className="space-y-2 max-h-[500px] overflow-y-auto">
              {songs.map((song, index) => (
                <div
                  key={song.id}
                  onClick={() => {
                    setCurrentSongIndex(index);
                    setIsPlaying(true);
                  }}
                  className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${
                    currentSongIndex === index
                      ? 'bg-[#f0f0f0]'
                      : 'hover:bg-[#f8f8f8]'
                  }`}
                >
                  <img
                    src={song.cover}
                    alt={song.title}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p
                      className={`font-medium truncate ${
                        currentSongIndex === index
                          ? 'text-[#1a1a1a]'
                          : 'text-[#6b6b6b]'
                      }`}
                    >
                      {song.title}
                    </p>
                    <p className="text-[#9ca3af] text-sm truncate">
                      {song.artist}
                    </p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(song.id);
                    }}
                    className={`p-2 rounded-full transition-colors ${
                      likedSongs.has(song.id)
                        ? 'text-red-500'
                        : 'text-[#d1d1d1] hover:text-[#9ca3af]'
                    }`}
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        likedSongs.has(song.id) ? 'fill-current' : ''
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
