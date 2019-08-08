import React, { useEffect, useState } from 'react';
import { geoGraticule, geoPath, geoOrthographic } from 'd3'
import { hierarchyData } from './hierarchy'
import HTree from './hierarchy-tree'
import HierTree from './components/HierTree'
import cd2 from './geojson/5m/2018/state.json'
import earthData from './geojson/earth.json'
import seattleData from './geojson/seattle.json'
import useInit from './hooks/use-init'

const hTree = HTree(hierarchyData)
const graticule = geoGraticule()
  .step([10, 10]);
const projection = geoOrthographic()
  .scale(200)
  .rotate([122, -45])
const path = geoPath(projection)

function App() {
  // call this only once, on load initLayout
  const [layout] = useInit(() => {
    hTree.setTree()
  })

  const [isRunning, setIsRunning] = useState(true)
  // set the scale of the map
  const [scaleLevel, setScaleLevel] = useState(projection.scale())
  const scaleStep = 80
  function zoomIn(e) {
    if (projection.scale() < 200) return
    const sL = projection.scale() - scaleStep
    projection.scale(sL)
    setScaleLevel(sL)
  }
  function zoomOut() {
    if (projection.scale() > 2000) return
    setScaleLevel(projection.scale() + scaleStep)
    const sL = projection.scale() + scaleStep
    projection.scale(sL)
    setScaleLevel(sL)
  }
  const onScaleUp = () => {
    setIsRunning(false)
    zoomIn()
  }
  const onScaleDown = () => {
    setIsRunning(false)
    zoomOut()
  }
  // use a deleyed function call to create an animation
  useEffect((e) => {
    if (isRunning) setTimeout(zoomOut, 1000)
  }, [scaleLevel])

  // theme color
  const [themeColor, setThemeColor] = useState('green')
  const onSetThemeColor = () => {
    const colors = ['red', 'yellow', 'green']
    const index = Math.round(Math.random() * 3)
    const color = colors[index]
    setThemeColor(color)
  }

  return (
    <div className="App">
      <div
        style={{ display: 'none' }}
      >
        {layout}
      </div>
      <button
        onClick={onSetThemeColor}
      >Color Theme
      </button>
      <button
        onClick={onScaleUp}
      >zoom in</button>
      <button
        onClick={onScaleDown}
      >zoom out</button>
      {scaleLevel}

      <svg
        width="470" height="300"
      >
        <rect width="960" height="500"
          fill={themeColor} />
        <g
          width="960" height="500"
          transform="scale(0.5) translate(0, 20)"
        >
          <path
            d={path(graticule())}
            stroke="#eee"
            fill="transparent"
            strokeWidth="3"
          />
          <path
            d={path(earthData)}
            stroke="black"
            fill="#fff"
            strokeWidth="0"
          />
          <path
            d={path(cd2)}
            stroke="#111"
            fill="#999"
            strokeWidth="2"
          />
          <path
            d={path(seattleData)}
            stroke="red"
            fill="transparent"
            strokeWidth="21"
          />
        </g>
      </svg>
      <HierTree
        color={themeColor}
        hTree={hTree} />
    </div>
  );
}

export default App;
