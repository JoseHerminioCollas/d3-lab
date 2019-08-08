import { useState } from 'react'

function useThemeColor(color = 'green') {
  const [themeColor, setThemeColorInner] = useState(color)
  const setThemeColor = () => {
    const colors = ['red', 'yellow', 'green', 'purple']
    const index = Math.round(Math.random() * 3)
    const color = colors[index]
    setThemeColorInner(color)
  }
  return [themeColor, setThemeColor]
}

export default useThemeColor