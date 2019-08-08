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
import ScaleControl from './components/ScaleControl'
import ThemeControl from './components/ThemeControl';

const hTree = HTree(hierarchyData)

function App() {
  // call this only once, on load initLayout
  const [layout] = useInit(() => hTree.setTree())
  // theme color
  const [themeColor, setThemeColor] = useThemeColor('green')
  // scale the map
  const [scaleLevel, setScaleLevel] = useState(Map.projection.scale())
  function scaleMap(scaleChange = 3) {
    const m = Map.scale(scaleChange)
    setScaleLevel(m)
  }
  // animate the map
  const [setIsRunning, tick] = useTick(scaleMap, 50)

  return (
    <div>
      <ThemeControl
        setThemeColor={setThemeColor}
      />
      <ScaleControl
        setIsRunning={setIsRunning}
        scaleMap={scaleMap}
        scaleLevel={scaleLevel}
      />
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
      {/* <HierTree
        color={themeColor}
        hTree={hTree} /> */}
      <div style={{ display: 'none' }}>
        {layout}
        {tick}
      </div>
    </div>
  );
}

export default App;
