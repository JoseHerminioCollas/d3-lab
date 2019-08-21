import { scaleOrdinal, schemeAccent } from 'd3'
// var accent = scaleOrdinal(schemeAccent);
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
const styleB = JSON.parse(JSON.stringify(defaultStyle))
for (const prop in styleB) {
  styleB[prop].fill = "red"
  styleB[prop].stroke = "blue"
}
const blueStyle = JSON.parse(JSON.stringify(defaultStyle))
for (const prop in blueStyle) {
  blueStyle[prop].fill = "darkblue"
  blueStyle[prop].stroke = "blue"
}

const styles = {
  defaultStyle,
  styleB,
  blueStyle,
}
function themeFactory(themeName = 'defaultStyle') {
  console.log('AAA',styles['defaultStyle'])
  return styles[themeName]
}
export default themeFactory