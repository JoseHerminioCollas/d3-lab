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
        option => {
          const newStyle = Object.assign(
            {},
            style.element,
            {
              background: option.color,
              textAlign: 'center',
            })
          if (option.gradient) {
            Object.assign(
              newStyle,
              {
                backgroundImage: `
              linear-gradient(to bottom, 
                ${option.gradient[0]}, ${option.gradient[1]})`
              }
            )
          }
          if (sheetName !== option.keyValue) {
            Object.assign(
              newStyle,
              {
                cursor: 'pointer'
              }
            )
          }

          return (
            <div
              onClick={() => setSheetName(option.keyValue)}
              key={option.keyValue}
              title={option.label}
              style={newStyle}>
            </div>
          )
        }
      )}
    </section>
  )
}

export default ThemeControl