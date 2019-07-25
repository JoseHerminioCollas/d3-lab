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
        width="340"
        height="340"
        style={{ position: 'absolute', top: '40px' }}>
        <rect x="0" y="0" width="340" height="340" fill="lightgray" />
        <g
          transform={`translate(${offset[0]} ${offset[1]})`}
        >
          <rect
            fill="lightgreen"
            x="0"
            y="0"
            width="320"
            height="320" />
          <g
            id="chart-group"
            transform={`translate(${offset[0]} ${50})`}
          >
            {heirarchyRoot && heirarchyRoot.descendants()
              .map(e => (
                <g
                  transform={`translate(${e.x} ${e.y})`}
                  width="100"
                  height="200">
                  <text x={12} y={7} fill="red">{e.data.name}</text>
                  <circle fill="darkblue" cx={0} cy={0} r="5" />
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
        </g>
      </svg>
      {s}
    </div>
  );
}

export default App;
