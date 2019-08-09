import React from 'react';
import { schemeCategory10, scaleOrdinal, schemeAccent } from 'd3'
const style = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    color: 'white',
    height: '30px',
    padding: '9px',
  },
  element: {
    background: 'black',
    width: '20px',
  }
}

function ThemeControl({ setThemeColor }) {
  return (
    <section
      className="control"
      style={style.container}
    >
      {schemeAccent.map(
        schemeElement => (
          <div
            onClick={() => setThemeColor(schemeElement)}
            key={schemeElement}
            style={
              Object.assign(
                {},
                style.element,
                { background: schemeElement })
            }>
          </div>
        )
      )}
    </section>
  )
}

export default ThemeControl