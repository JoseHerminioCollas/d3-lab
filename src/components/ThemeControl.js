import React from 'react';

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

function ThemeControl({ sheetName, setSheetName, menuOptions }) {
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
                { background: option.color, textAlign: 'center' })
            }>
              {sheetName === option.keyValue ? '*' : ''}
          </div>
        )
      )}
    </section>
  )
}

export default ThemeControl