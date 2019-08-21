import { scaleOrdinal, schemeAccent } from 'd3'

var accent = scaleOrdinal(schemeAccent);
console.log(accent(0.5))

const defaultStyle = {
  main: {
    display: 'flex',
    color: 'white',
    background: 'gray',
  },
  accent: {
    color: 'red',
  },
  graticule: {
    stroke: 'white',
    fill: 'transparent',
    color: 'blue',
    strokeWidth: 3,
  },
  state: {
    stroke: 'white',
    fill: 'transparent',
    color: 'blue',
    strokeWidth: 3,
  },
  seattle: {
    stroke: 'red',
    fill: 'transparent',
    color: 'blue',
    strokeWidth: 13,
  },
  earth: {
    color: 'green',
    stroke: "black",
    fill: "gray",
    strokeWidth: 3,
  },
  mapContainer: {
    fill: 'black',
    stroke: 'blue',
    width: '600px',
    height: '600px',
  }
}
// const styleB = Object.assign({}, defaultStyle)
const styleB = JSON.parse(JSON.stringify(defaultStyle))
console.log('XXX', styleB)

for (const prop in styleB) {
  console.log(prop)
  styleB[prop].fill = "red"
  styleB[prop].stroke = "blue"
}

const styles = {
  defaultStyle,
  styleB,
}
function themeFactory(themeName = 'defaultStyle') {
  console.log('AAA',styles['defaultStyle'])
  return styles[themeName]
}
export default themeFactory