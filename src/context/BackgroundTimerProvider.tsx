import { getFormattedTime } from '@/utils/helper'
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

const BackgroundTimerContext = createContext({
  days: '',
  hours: '',
  minutes: '',
  seconds: '',
})

export const useBackgroundTimer = () => useContext(BackgroundTimerContext)

class TimerController {
  static timeRemaining = 23 * 60 * 60 * 1000
}

type BackgroundTimerProviderProps = {
  children: React.ReactNode
}

export const BackgroundTimerProvider = (
  props: BackgroundTimerProviderProps,
) => {
  const duration = 23 * 60 * 60 * 1000
  const [timer, setTimer] = useState(duration)

  const days = getFormattedTime(timer).days
  const hours = getFormattedTime(timer).hours
  const minutes = getFormattedTime(timer).minutes
  const seconds = getFormattedTime(timer).seconds

  useEffect(() => {
    let interval = setInterval(() => {
      setTimer(prevTime => {
        prevTime <= 1000 && clearInterval(interval)
        TimerController.timeRemaining = prevTime - 1000
        return prevTime - 1000
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const contextValue = useMemo(() => {
    return { days, hours, minutes, seconds }
  }, [timer])

  return (
    <BackgroundTimerContext.Provider value={contextValue}>
      {props.children}
    </BackgroundTimerContext.Provider>
  )
}
