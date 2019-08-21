import { scaleOrdinal, schemeAccent } from 'd3'

var accent = scaleOrdinal(schemeAccent);
console.log(accent(0.5))

const style = {
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
const styles = {
  default: style,
  styleA: style,
  styleB: Object.assign(
    {},
    style,
    {
      mapContainer: {
        fill: 'green',
        stroke: 'blue',
        width: '600px',
        height: '600px',
      },
      state: {
        stroke: 'green',
        fill: 'transparent',
        color: 'orange',
        strokeWidth: 3,
      },
    })
}
function themeFactory(themeName = 'default') {
  console.log(themeName)
  return styles[themeName]
}
export default themeFactory