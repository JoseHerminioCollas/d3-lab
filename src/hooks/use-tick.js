import { useEffect, useState } from 'react'

function useTick(callBack, maximumTicks = 10) {
  const [maxTicks] = useState(maximumTicks)
  const [isRunning, setIsRunning] = useState(true)
  const [tick, setTick] = useState(0)
  useEffect(() => {
    callBack(tick)
    if (tick >= maxTicks) setIsRunning(false)
    else if (isRunning) setTimeout(() => {
      setTick(tick + 1)
    }, 500)
  }, [tick, isRunning, maxTicks])
  return [setIsRunning, tick]
}

export default useTick