import React, { useEffect, useState } from 'react';
import { geoGraticule, geoEqualEarth, geoPath, geoOrthographic } from 'd3'
import { hierarchyData } from './hierarchy'
import HTree from './hierarchy-tree'
import HierTree from './components/HierTree'
import cd from './geojson/5m/2018/us.json'
import cd2 from './geojson/5m/2018/state.json'
import earthData from './geojson/earth.json'
import seattleData from './geojson/seattle.json'

const hTree = HTree(hierarchyData)
const graticule = geoGraticule()
  .step([10, 10]);
const projection = geoOrthographic()
  // .scale(100)
  .rotate([122, -45])
const path = geoPath(projection)

function App() {
  const [trigger, setTrigger] = useState(0)

  useEffect((e) => {
    hTree.setTree()
    setTrigger(1)
  }, [])

  return (
    <div className="App">
      <svg
        width="470" height="300"
      >
        <rect width="960" height="500"
          fill="lightgray" />
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
      <HierTree hTree={hTree} />
      <div style={{ display: 'none' }}>
        {trigger}
      </div>
    </div>
  );
}

export default App;
