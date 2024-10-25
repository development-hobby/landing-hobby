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
    <article
      onClick={handlePlayPause}
      className='relative w-[22%] max-sm:w-[37%] flex flex-col items-center justify-center gap-y-5 max-sm:gap-y-2'
    >
      <video
        ref={videoRef}
        onClick={handlePlayPause}
        className='w-full rounded-2xl'
        src={src}
      ></video>
      {!isPlaying && (
        <PlayIcon className='transition-all absolute top-[40%] w-10 h-10 opacity-50' />
      )}
      <span
        aria-label='tipo de hobby'
        role='log'
        className='w-full h-12 max-sm:h-8 flex flex-row gap-x-4 max-sm:gap-x-2 items-center justify-center text-xl max-sm:text-sm rounded-tl-lg rounded-b-lg bg-[#B48F13]'
      >
        {icon === 'ART' && <ArtHobby className='size-10 max-sm:size-6' />}
        {icon === 'MUSIC' && <MusicHobby className='size-10 max-sm:size-6' />}
        {icon === 'GAMER' && <GamerHobby className='size-10 max-sm:size-6' />}
        {description}
      </span>
    </article>
  )
}
