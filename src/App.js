import React, { useEffect, useState } from 'react';
import { geoGraticule, geoPath, geoOrthographic } from 'd3'
import { hierarchyData } from './hierarchy'
import HTree from './hierarchy-tree'
import HierTree from './components/HierTree'
import cd2 from './geojson/5m/2018/state.json'
import earthData from './geojson/earth.json'
import seattleData from './geojson/seattle.json'
import useInit from './hooks/use-init'
import useThemeColor from './hooks/use-theme-color'
import useTick from './hooks/use-tick'

const hTree = HTree(hierarchyData)
const graticule = geoGraticule()
  .step([10, 10]);
const projection = geoOrthographic()
  .scale(250)
  .rotate([122, -45])
const path = geoPath(projection)

function App() {
  // call this only once, on load initLayout
  const [layout] = useInit(() => {
    hTree.setTree()
  })
  // theme color
  const [themeColor, setThemeColor] = useThemeColor('green')
  // scale the map
  const [scaleLevel, setScaleLevel] = useState(projection.scale())
  const scaleStep = 10
  function scaleIn(e) {
    if (projection.scale() < 100) return
    const sL = projection.scale() - scaleStep
    projection.scale(sL)
    setScaleLevel(sL)
  }
  function scaleOut() {
    if (projection.scale() > 2000) return
    setScaleLevel(projection.scale() + scaleStep)
    const sL = projection.scale() + scaleStep
    projection.scale(sL)
    setScaleLevel(sL)
  }
  const [isRunning, setIsRunning, tick, setMaxTicks] = useTick(scaleOut, 100)

  return (
    <div className="App">
      {tick}
      {isRunning ? 't' : 'f'}
      {scaleLevel}
      <div
        style={{ display: 'none' }}
      >
        {layout}
      </div>
      <button onClick={() => setMaxTicks(4)}>set max ticks</button>
      <button
        onClick={setThemeColor}
      >
        Color Theme
      </button>
      <div onClick={() => setIsRunning(false)}>
        <button
          onClick={scaleIn}
        >
          Scale In
        </button>
        <button
          onClick={scaleOut}
        >
          Scale Up
        </button>
      </div>
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
