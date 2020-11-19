
import React, { useState, useEffect } from 'react'


const App = () => {
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(15)

  const timeRunner = () => {
    if (minutes == 0 && seconds == 0) {
      setSeconds(0)
      setMinutes(15)

    }
    else {
      if (seconds == 0) {
        setMinutes(minutes => minutes - 1)
        setSeconds(59)
      }
      else {
        setSeconds(seconds=>seconds-1)
      }
    }
  }

  useEffect(() => {
    const token = setTimeout(timeRunner, 1000)
    return function reset () {
      return clearTimeout(token)
    }
  })
  return (
    <div>

      <span>{minutes}:{seconds}</span>
    </div>
  )
}

export default App
