import { useRef, useState } from 'react'
import PlayIcon from './Play'
import ArtHobby from '../icons/hobbies/ArtHobby'
import MusicHobby from '../icons/hobbies/MusicHobby'
import GamerHobby from '../icons/hobbies/GamerHobby'

interface VideoProps {
  src: string
  description: string
  icon: 'ART' | 'MUSIC' | 'GAMER'
}

export default function VideoPlayer({ description, icon, src }: VideoProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current?.pause()
      setIsPlaying(false)
    } else {
      videoRef.current?.play()
      setIsPlaying(true)
    }
  }
  return (
    <div className='relative w-[22%] max-sm:w-[40%] flex flex-col items-center justify-center gap-y-5 max-sm:gap-y-3'>
      <video
        ref={videoRef}
        onClick={handlePlayPause}
        className='w-full rounded-3xl'
        src={src}
      ></video>
      {!isPlaying && (
        <PlayIcon className='transition-all absolute top-[40%] w-10 h-10 opacity-50' />
      )}
      <span className='w-full h-12 max-sm:h-8 flex flex-row gap-x-4 max-sm:gap-x-2 items-center justify-center text-xl max-sm:text-lg rounded-tl-lg rounded-b-lg bg-[#B48F13]'>
        {icon === 'ART' && <ArtHobby className='size-10 max-sm:size-7' />}
        {icon === 'MUSIC' && <MusicHobby className='size-10 max-sm:size-7' />}
        {icon === 'GAMER' && <GamerHobby className='size-10 max-sm:size-7' />}
        {description}
      </span>
    </div>
  )
}
