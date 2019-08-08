import React, { useEffect, useState } from 'react'
import { hierarchyData } from './hierarchy'
import HTree from './hierarchy-tree'
import HierTree from './components/HierTree'
import useInit from './hooks/use-init'
import useThemeColor from './hooks/use-theme-color'
import useTick from './hooks/use-tick'
import Map from './map'
import ScaleControl from './components/ScaleControl'
import ThemeControl from './components/ThemeControl'
import GeoMap from './components/GeoMap'

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
  const [setIsRunning, tick] = useTick(scaleMap, 20)

  return (
    <div className="d3-lab">
      <ThemeControl
        setThemeColor={setThemeColor}
      />
      <ScaleControl
        setIsRunning={setIsRunning}
        scaleMap={scaleMap}
        scaleLevel={scaleLevel}
      />
      <GeoMap 
        Map={Map}
        themeColor={themeColor}
      />
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
