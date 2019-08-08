import { geoGraticule, geoPath, geoOrthographic } from 'd3'

const graticule = geoGraticule()
  .step([10, 10]);
const projection = geoOrthographic()
  .scale(250)
  .rotate([122, -45])
const path = geoPath(projection)
const Map = {
  path,
  graticule,
  projection,
  scale: (scaleChange = 10) => {
    projection.scale(projection.scale() + scaleChange)
    return projection.scale()
  },
  rotate: (rotateChange = [10, 10]) => {
    const newLong = projection.rotate()[0] + 10
    projection.rotate([newLong, 20])
    return projection.rotate()
  }
}

export default Map