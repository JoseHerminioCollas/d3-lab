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
  // rotate the map
  const [rotatation, setRotation] = useState(Map.projection.rotate())
  function rotateMap(rotatationChange = 10) {
    const rLng = Map.projection.rotate()[0] + rotatationChange
    const r = Map.projection.rotate([rLng, Map.projection.rotate()[1]])
    setRotation(r)
  }
  // animate the map
  const [isRunning, setIsRunning, tick] = useTick(() => {
    if (tick < 10) scaleMap(2)
    rotateMap(1)
  }, 1000)

  return (
    <div className="d3-lab">
      <section className="control rotate-control">
        <fieldset>
          <legend>Rotatation &nbsp;
            <small>
              {rotatation[0].toFixed(0) + ', ' + rotatation[1].toFixed(0)}
            </small>
          </legend>
          <button onClick={() => rotateMap(10)}>right</button>
          <button onClick={() => rotateMap(-10)}>left</button>
        </fieldset>
      </section>
      <section className="control animate-control">
        <fieldset>
          <legend>Animate</legend>
          {!isRunning &&
            <button onClick={() => setIsRunning(true)}>start</button>
          }
          {isRunning &&
            <button onClick={() => setIsRunning(false)}>stop</button>
          }
        </fieldset>
      </section>
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
