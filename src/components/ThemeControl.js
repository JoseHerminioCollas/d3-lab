import React from 'react';
import { schemeCategory10 } from 'd3'
const style = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    color: 'white',
    height: '30px',
    padding: '9px',
  },
  element: {
    cursor: 'pointer',
    background: 'black',
    width: '20px',
  }
}

function ThemeControl({ setSheetName, menuOptions }) {
  return (
    <section
      className="control"
      style={style.container}
    >
      {menuOptions.map(
        option => (
          <div
            onClick={() => setSheetName(option.keyValue)}
            key={option.keyValue}
            title={option.label}
            style={
              Object.assign(
                {},
                style.element,
                { background: option.color })
            }>
          </div>
        )
      )}
    </section>
  )
}

export default ThemeControl