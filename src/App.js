import React, { useEffect, useState } from 'react';
import { geoEqualEarth, geoPath } from 'd3'
import { hierarchyData } from './hierarchy'
import HTree from './hierarchy-tree'
import HierTree from './components/HierTree'

const hTree = HTree(hierarchyData)

const geoJson = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122,
          43.32517767999296
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "A Shape"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [0.0, 0.0],
            [100.0, 0.0],
            [100.0, 45.0],
            [0.0, 45.0]
            [0.0, 0.0]
          ]
        ]
      }
    },
  ]
}
const projection = geoEqualEarth()
  .scale(120)
  // .translate([550, 450])
  // .center([-20, 20])
const path = geoPath(projection)

const projection2 = geoEqualEarth()
  .fitWidth([300], geoJson)
const path2 = geoPath(projection2)

function App() {
  const [trigger, setTrigger] = useState(0)
  useEffect((e) => {
    hTree.setTree()
    setTrigger(1)
  }, [])

  return (
    <div className="App">
      x
      <svg width="960" height="500">
        <rect width="960" height="500" fill="blue" />
        <circle cx="10" cy="10" r="5" fill="red" />
        <g transform="translate(30, 30)">
          <path
            d={path2(geoJson)}
            stroke="red"
            fill="green"
            strokeWidth="2"
          />
        </g>
        <path
          // transform="scale(0.4)"
          d={path(geoJson)}
          stroke="white"
          fill="transparent"
          strokeWidth="4"
        />
      </svg>
      <HierTree hTree={hTree} />
      <div style={{ display: 'none' }}>
        {trigger}
      </div>
    </div>
  );
}

export default App;
