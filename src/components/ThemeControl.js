import React from 'react';

function ThemeControl({ setThemeColor }) {
  return (
    <section className="control theme-control">
      {/* <h4>Theme</h4> */}
      <button
        className="material-icons"
        onClick={setThemeColor}
      >
        color_lens
      </button>
    </section>
  )
}

export default ThemeControl