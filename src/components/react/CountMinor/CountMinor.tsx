import React, { useEffect } from 'react'
import './count-minor.css'

const Countdown: React.FC = () => {
  useEffect(() => {
    const targetDate = new Date('2024-11-12T23:59:59').getTime()
    let previousValues = {
      days: { tens: 0, ones: 0 },
      hours: { tens: 0, ones: 0 },
      minutes: { tens: 0, ones: 0 },
      seconds: { tens: 0, ones: 0 },
    }

    const updateCountdown = () => {
      const now = new Date().getTime()
      const timeLeft = targetDate - now

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)

      updateDigits('days', days)
      updateDigits('hours', hours)
      updateDigits('minutes', minutes)
      updateDigits('seconds', seconds)
    }

    const updateDigits = (unit: string, newValue: number) => {
      const tens = Math.floor(newValue / 10)
      const ones = newValue % 10

      const elementTensOld = document.getElementById(`${unit}-tens`)
      const elementOnesOld = document.getElementById(`${unit}-ones`)
      const elementTensNew = document.getElementById(`${unit}-tens-new`)
      const elementOnesNew = document.getElementById(`${unit}-ones-new`)

      const previousTens =
        previousValues[unit as keyof typeof previousValues].tens
      const previousOnes =
        previousValues[unit as keyof typeof previousValues].ones

      if (tens !== previousTens) {
        if (elementTensOld && elementTensNew) {
          animateDigitChange(elementTensOld, elementTensNew, tens)
          previousValues[unit as keyof typeof previousValues].tens = tens
        }
      }
      if (ones !== previousOnes) {
        if (elementOnesOld && elementOnesNew) {
          animateDigitChange(elementOnesOld, elementOnesNew, ones)
          previousValues[unit as keyof typeof previousValues].ones = ones
        }
      }
    }

    const animateDigitChange = (
      elementOld: HTMLElement,
      elementNew: HTMLElement,
      newValue: number
    ) => {
      if (elementOld && elementNew) {
        elementNew.textContent = newValue.toString()
        elementOld.classList.add('slide-up-exit')
        elementNew.classList.remove('hidden')
        elementNew.classList.add('slide-up-enter')
        setTimeout(() => {
          elementOld.textContent = newValue.toString()
          elementOld.classList.remove('slide-up-exit')
          elementNew.classList.add('hidden')
          elementNew.classList.remove('slide-up-enter')
        }, 500)
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='flex flex-row gap-x-12 mx-auto max-sm:px-5 justify-center'>
      {['days', 'hours', 'minutes', 'seconds'].map((unit, index) => (
        <div
          key={index}
          className='text-center -skew-x-2 text-4xl flex flex-col items-center justify-center font-bold'
        >
          <div className='countdown-container'>
            <div className='countdown-digit-container'>
              <p id={`${unit}-tens`} className='countdown-number'>
                0
              </p>
              <p
                id={`${unit}-tens-new`}
                className='countdown-number hidden'
              ></p>
            </div>
            <div className='countdown-digit-container'>
              <p id={`${unit}-ones`} className='countdown-number'>
                0
              </p>
              <p
                id={`${unit}-ones-new`}
                className='countdown-number hidden'
              ></p>
            </div>
          </div>
          <div className='text-2xl font-bold text-center mt-5 opacity-80'>
            {unit.charAt(0).toUpperCase()}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Countdown
