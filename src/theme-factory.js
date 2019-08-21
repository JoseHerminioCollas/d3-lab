import { interpolateBlues } from 'd3'

const styleTypes = {
  GRAY: 'GRAY',
  BLUE: 'BLUE',
  GREEN: 'GREEN',
  LIGHT: 'LIGHT',
  DARK: 'DARK',
  RAINBOW: 'RAINBOW',
}
const menuOptions = [
  { label: 'Gray', color: 'gray', keyValue: 'defaultStyle' },
  { label: 'Blue', color: 'blue', keyValue: 'blueStyle' },
]
const defaultStyle = {
  mapContainer: {
    stroke: 'gray',
    fill: 'black',
    width: '600px',
    height: '600px',
  },
  graticule: {
    stroke: 'white',
    fill: 'transparent',
    strokeWidth: 3,
  },
  earth: {
    stroke: "black",
    fill: "gray",
    strokeWidth: 3,
  },
  state: {
    stroke: 'white',
    fill: 'transparent',
    strokeWidth: 3,
  },
  city: {
    stroke: 'red',
    fill: 'transparent',
    strokeWidth: 13,
  },
  accent: {
    fill: 'red',
    stroke: 'orange',
  },
}
const styleB = JSON.parse(JSON.stringify(defaultStyle))
for (const prop in styleB) {
  styleB[prop].fill = "red"
  styleB[prop].stroke = "blue"
}
// create the blueStyle option
const blueStyle = JSON.parse(JSON.stringify(defaultStyle))
const steps = 9
let i = 0
let j = 1
for (const prop in blueStyle) {
  if (prop !== 'graticule') {
    blueStyle[prop].fill = interpolateBlues(j)
  }
  if (prop !== 'city') {
    blueStyle[prop].stroke = interpolateBlues(i)
  }
  i += 1 / steps
  j -= 1 / steps
}

const styles = {
  defaultStyle,
  styleB,
  blueStyle,
}
function themeFactory(themeName = 'defaultStyle') {
  return styles[themeName]
}
export { styleTypes, menuOptions }
export default themeFactory