import {
  interpolateBlues,
  interpolateGreens,
  interpolateGreys,
  interpolateRdYlGn,
} from 'd3'

const menuOptions = [
  { label: 'Blue', color: 'blue', keyValue: 'blueStyle' },
  { label: 'Green', color: 'green', keyValue: 'greenStyle' },
  { label: 'Gray', color: 'gray', keyValue: 'grayStyle' },
  {
    label: 'Red Green',
    color: 'green',
    gradient: ['red', 'green'],
    keyValue: 'darkStyle'
  },
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
function colorize(styleObject, interpolator) {
  const newStyleObject = JSON.parse(JSON.stringify(styleObject))
  const steps = 9
  let i = 0
  let j = 1
  for (const prop in newStyleObject) {
    if (prop !== 'graticule') {
      newStyleObject[prop].fill = interpolator(j)
    }
    if (prop !== 'city') {
      newStyleObject[prop].stroke = interpolator(i)
    }
    i += 1 / steps
    j -= 1 / steps
  }
  return newStyleObject
}
const blueStyle = colorize(defaultStyle, interpolateBlues)
const greenStyle = colorize(defaultStyle, interpolateGreens)
const grayStyle = colorize(defaultStyle, interpolateGreys)
const darkStyle = colorize(defaultStyle, interpolateRdYlGn)
const styles = {
  defaultStyle,
  styleB,
  blueStyle,
  greenStyle,
  grayStyle,
  darkStyle,
}
function themeFactory(themeName = 'defaultStyle') {
  return styles[themeName]
}
export { menuOptions }
export default themeFactory