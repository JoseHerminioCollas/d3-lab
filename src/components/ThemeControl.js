import React from 'react';

function ThemeControl({ setThemeColor }) {
  return (
    <section className="control theme-control">
      <fieldset>
        <legend>Theme</legend>
        <button onClick={setThemeColor}>Color Theme</button>
      </fieldset>
    </section>
  )
}

export default ThemeControl