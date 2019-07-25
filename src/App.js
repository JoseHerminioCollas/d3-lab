import React, { useEffect, useState } from 'react';
import { hierarchy, tree, select } from 'd3'
import { hierarchyData } from './hierarchy'

const offset = [10, 10]
let heirarchyRoot
function drawHD() {
  heirarchyRoot = hierarchy(hierarchyData)
  const treeLayout = tree()
  treeLayout.size([280, 180])
  treeLayout(heirarchyRoot)
}
function App() {
  const [s, setS] = useState(10)
  useEffect((e) => {
    drawHD()
    console.log(heirarchyRoot.descendants())
    setS(30)
  }, [])
  return (
    <div className="App">
      <svg
        width="300"
        height="300"
        fill="lightgreen"
        style={{ position: 'absolute', top: '40px' }}>
        <rect x="0" y="0" width="300" height="200" fill="lightgray"/>
        <g
          transform={`translate(${offset[0]} ${offset[1]})`}
          >
          <rect x="0" y="0" width="300" height="200" />
          {heirarchyRoot && heirarchyRoot.descendants()
            .map(e => (
              <g>
                <text x={e.x} y={e.y}>{e.data.name}</text>
                <circle fill="darkblue" cx={e.x} cy={e.y} r="5" />
              </g>
            ))
          }
          {heirarchyRoot && heirarchyRoot.links()
            .map(e => (
              <g>
                <line
                  fill="blue"
                  stroke="darkgreen"
                  x1={e.source.x}
                  y1={e.source.y}
                  x2={e.target.x}
                  y2={e.target.y}
                />
              </g>
            ))
          }
        </g>
      </svg>
      {s}
    </div>
  );
}

export default App;
