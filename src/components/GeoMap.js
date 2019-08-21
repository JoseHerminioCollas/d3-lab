import React from 'react'
import stateData from '../geojson/5m/2018/state.json'
import earthData from '../geojson/earth.json'
import seattleData from '../geojson/seattle.json'

function GeoMap({ Map, themeColor, clickHandler, cssClasses }) {
  return (
    <svg
      className={cssClasses.mapContainer}
      onClick={clickHandler}
    >
      <rect
        className={cssClasses.mapContainer}
      />
      <g
        width="960" height="500"
        transform="scale(0.6) translate(0, 150)"
      >
        <path
          d={Map.path(Map.graticule())}
          className={cssClasses.graticule}
        />
        <path
          d={Map.path(earthData)}
          className={cssClasses.earth}
        />
        <path
          d={Map.path(stateData)}
          className={cssClasses.state}
        />
        <path
          d={Map.path(seattleData)}
          className={cssClasses.city}
        />
      </g>
    </svg>

  )
}

export default GeoMap