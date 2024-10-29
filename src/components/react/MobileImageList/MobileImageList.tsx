import React, { useEffect, useRef } from 'react'
import './mobile-image-list.css'

const MobileImageList: React.FC = () => {
  const containerRef = useRef<HTMLUListElement | null>(null)

  useEffect(() => {
    const $listImgMovil = containerRef.current?.querySelectorAll('li')

    const observe = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting && $listImgMovil) {
          $listImgMovil.forEach((element, index) => {
            const $backdrop = element.querySelector('div')
            element.classList.add('transition-scale', 'animation-fade-in-up')
            element.style.animationDelay = `${index * 400}ms`

            element.onmouseenter = () => {
              element.style.scale = '1.05'
              if ($backdrop) {
                setTimeout(() => {
                  $backdrop.style.scale = '1.10'
                  $backdrop.classList.add('transition-scale')
                }, 100)
              }
            }

            element.onmouseleave = () => {
              element.style.scale = '1'
              if ($backdrop) {
                setTimeout(() => {
                  $backdrop.style.scale = '1'
                  $backdrop.classList.add('transition-scale')
                }, 100)
              }
            }
          })
        }
      },
      { threshold: 0.2, rootMargin: '10px' }
    )

    if (containerRef.current) {
      observe.observe(containerRef.current)
    }

    return () => observe.disconnect()
  }, [])

  return (
    <ul
      ref={containerRef}
      id='container-list'
      className='flex w-full flex-row max-sm:flex-wrap z-10 justify-center items-center gap-x-10 max-sm:gap-x-5 max-sm:gap-y-5 mt-10 max-sm:mt-2'
    >
      <li className='list-item'>
        <div className='backdrop left' />
        <img
          src='/image-movil/screen-register.webp'
          alt='Imagen de pantalla de registro'
          loading='lazy'
          className='z-10'
        />
        <p className='text-base max-sm:text-sm text-center font-bold max-sm:mt-1'>
          Regístrate
        </p>
      </li>
      <li className='list-item'>
        <img
          src='/image-movil/end-register.webp'
          alt='Imagen de pantalla de paso final de registro'
          loading='lazy'
        />
        <p className='text-base max-sm:text-sm text-center font-bold max-sm:mt-1'>
          Selecciona tu hobby
        </p>
      </li>
      <li className='list-item'>
        <img
          src='/image-movil/screen-publish.webp'
          alt='Imagen de pantalla de publicar contenido'
          loading='lazy'
        />
        <p className='text-base max-sm:text-sm text-center font-bold max-sm:mt-1'>
          Publica tu contenido
        </p>
      </li>
      <li className='list-item'>
        <div className='backdrop right' />
        <img
          className='z-10'
          src='/image-movil/screen-crown.webp'
          alt='Imagen de pantalla de sistema de ranking'
          loading='lazy'
        />
        <p className='text-base max-sm:text-sm text-center font-bold max-sm:mt-1'>
          Participa en el ranking
        </p>
      </li>
    </ul>
  )
}

export default MobileImageList
