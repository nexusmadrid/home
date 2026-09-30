import { useCountdown } from '../hooks/useCountdown'
import { FaClock } from 'react-icons/fa'
import { Container } from 'react-bootstrap'

/**
 * Countdown component that shows animated time remaining until a target date
 * Accepts targetDate as a prop (Date object or ISO string)
 */
interface CountdownProps {
  targetDate: string | Date
  className?: string
}

export function Countdown({ targetDate, className }: CountdownProps) {
  const date = new Date(targetDate)
  const { days, hours, minutes, seconds } = useCountdown(date)

  return (
    <Container className={className}>
      <div className="d-flex align-items-center gap-3">
        <FaClock className="text-primary" />
        <span className="fw-bold">
          {days}d {hours}h {minutes}m {seconds}s
        </span>
      </div>
    </Container>
  )
}