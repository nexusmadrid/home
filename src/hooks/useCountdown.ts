import { useState, useEffect } from 'react'

/**
 * Hook that calculates time difference between targetDate and now
 * Returns {days, hours, minutes, seconds}
 */
export function useCountdown(targetDate: Date) {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const updateTime = () => {
      const now = new Date().getTime()
      const diff = targetDate.getTime() - now

      if (diff <= 0) {
        setTimeRemaining({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        })
        return
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)

      setTimeRemaining({ days, hours, minutes, seconds })
    }

    // Initial run
    updateTime()

    // Update every second
    const timer = setInterval(updateTime, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return timeRemaining
}