import { useState } from 'react'
import { schemeCategory10, scaleOrdinal, schemeAccent } from 'd3'

const theme = {
  foreground: ['white'],
  background: ['black'],
  accent: ['red']
}
const themeColorDomain = [1, 2, 3, 4, 5, 6, 7, 8]
const themeColors = function createThemeColors() {
  return scaleOrdinal()
    .domain(themeColorDomain)
    .range(schemeAccent)
}()
theme.foreground.unshift(themeColors(1))
theme.background.unshift(themeColors(3))

function useThemeColor() {

  const [themeColor, setThemeColorInner] = useState(theme)
  const setThemeColor = (newColor = 'red') => {

    const themeColorDomain = [1, 2, 3, 4, 5, 6, 7, 8]
    const themeColors = function createThemeColors() {
      return scaleOrdinal()
        .domain(themeColorDomain)
        .range(schemeAccent)
    }()
    // setThemeColorInner.background = themeColorDomain
    const newTheme = Object.assign({}, themeColor, {
      foreground: [newColor],
      background: [themeColors(3)]
    })
    setThemeColorInner(newTheme)
  }
  return [themeColor, setThemeColor]
}

export default useThemeColor