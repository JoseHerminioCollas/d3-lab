import React from 'react';
import { schemeCategory10 } from 'd3'
const style = {
  container: {
    display: 'flex',
    flexDirection: 'row',
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
      onClick={setThemeColor}
    >
      {schemeCategory10.map(
        schemeElement => (
          <div
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