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
import './iconfont/material-icons.css'
import jss from 'jss'
import preset from 'jss-preset-default'
import themeFactory, { menuOptions } from './theme-factory'

jss.setup(preset())

const hTree = HTree(hierarchyData)

function App() {
  // call this only once, on load initLayout
  const [layout] = useInit(() => hTree.setTree())
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

  // theme color useCssSheet()
  const [sheetName, setSheetName] = useState('blueStyle')
  let sheet = jss.createStyleSheet(themeFactory(sheetName))
  sheet.attach()
  const [cssSheet, setCssSheet] = useState(sheet)
  useEffect(() => {
    let newSheet = jss.createStyleSheet(themeFactory(sheetName))
    newSheet.attach()
    setCssSheet(newSheet)
  }, [sheetName])

  return (
    <div className={cssSheet.classes.main}>
      <section
        className="control-container">
        <section className="control rotate-control">
          <div style={{ display: 'none' }}>
            {rotatation[0].toFixed(0) + ', ' + rotatation[1].toFixed(0)}
          </div>
          <button className="material-icons" onClick={() => rotateMap(10)}>
            rotate_left
          </button>
          <button className="material-icons" onClick={() => rotateMap(-10)}>
            rotate_right
          </button>
        </section>
        <section className="control animate-control">
          {!isRunning &&
            <button className="material-icons" onClick={() => setIsRunning(true)}>play_arrow</button>
          }
          {isRunning &&
            <button className="material-icons" onClick={() => setIsRunning(false)}>pause</button>
          }
        </section>
        <ThemeControl
          sheetName={sheetName}
          setSheetName={setSheetName}
          menuOptions={menuOptions}
        />
        <ScaleControl
          setIsRunning={setIsRunning}
          scaleMap={scaleMap}
          scaleLevel={scaleLevel}
        />
      </section>
      <GeoMap
        clickHandler={() => {
          // toggle the value
          isRunning && setIsRunning(false)
          !isRunning && setIsRunning(true)
        }}
        Map={Map}
        cssClasses={cssSheet.classes}
      // themeColor={themeColor}
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
