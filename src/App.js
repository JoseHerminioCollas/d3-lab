import React, { useEffect, useState } from 'react';
import { hierarchyData } from './hierarchy'
import HTree from './hierarchy-tree'
import HierTree from './components/HierTree'
import cd2 from './geojson/5m/2018/state.json'
import earthData from './geojson/earth.json'
import seattleData from './geojson/seattle.json'
import useInit from './hooks/use-init'
import useThemeColor from './hooks/use-theme-color'
import useTick from './hooks/use-tick'
import Map from './map'

const hTree = HTree(hierarchyData)

function App() {
  // call this only once, on load initLayout
  const [layout] = useInit(() => hTree.setTree())
  // theme color
  const [themeColor, setThemeColor] = useThemeColor('green')
  // scale the map
  const [scaleLevel, setScaleLevel] = useState(Map.projection.scale())
  function scaleMap(scaleChange) {
    const m = Map.scale(scaleChange)
    setScaleLevel(m)
  }
  // animate the map
  const [isRunning, setIsRunning, tick, setMaxTicks] = useTick(scaleMap, 5)

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
          onClick={() => scaleMap(100)}
        >
          scaleM
        </button>
        <button
          onClick={() => scaleMap(-10)}
        >
          Scale In
        </button>
        <button
          onClick={() => scaleMap(10)}
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
            d={Map.path(Map.graticule())}
            stroke="#eee"
            fill="transparent"
            strokeWidth="3"
          />
          <path
            d={Map.path(earthData)}
            stroke="black"
            fill="#fff"
            strokeWidth="0"
          />
          <path
            d={Map.path(cd2)}
            stroke="#111"
            fill="#999"
            strokeWidth="2"
          />
          <path
            d={Map.path(seattleData)}
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
