import React from 'react'

const HierTree = ({ hTree }) => {
  const offset = [10, 10]
  return (
    <svg
      width="340"
      height="340">
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
          {hTree.getTree() && hTree.getTree().descendants()
            .map(e => (
              <g
                key={e.data.name + e.x}
                transform={`translate(${e.x} ${e.y})`}
                width="100"
                height="200">
                <text x={12} y={7} fill="red">{e.data.name}</text>
                <circle fill="darkblue" cx={0} cy={0} r="5" />
              </g>
            ))
          }
          {hTree.getTree() && hTree.getTree().links()
            .map(e => (
              <g
              key={Math.random() + e.source.x}
              >
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
  )
}

export default HierTree
