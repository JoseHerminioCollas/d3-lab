import React from 'react'
import cd2 from '../geojson/5m/2018/state.json'
import earthData from '../geojson/earth.json'
import seattleData from '../geojson/seattle.json'

function GeoMap({ Map, themeColor, clickHandler }) {
  return (
    <svg className="geo-map"
      width="600" height="600"
      onClick={clickHandler}
    >
      <rect width="660" height="600"
        fill="black" />
      <g
        width="960" height="500"
        transform="scale(0.6) translate(0, 150)"
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
          fill={themeColor.foreground[0]}
          strokeWidth="0"
        />
        <path
          d={Map.path(cd2)}
          stroke="#111"
          fill={themeColor.background[0]}
          strokeWidth="2"
        />
        <path
          d={Map.path(seattleData)}
          stroke={themeColor.accent[0]}
          fill="transparent"
          strokeWidth="21"
        />
      </g>
    </svg>

  )
}

export default GeoMap