import React from 'react';

function ScaleControl({ setIsRunning, scaleMap, scaleLevel }) {
  return (
    <section className="control scale-control">
      <fieldset>
        <legend>Scale: {scaleLevel}</legend>
        <button onClick={() => {
          setIsRunning(false)
          scaleMap(100)
        }}>
          scaleM
        </button>
        <button
          onClick={() => {
            setIsRunning(false)
            scaleMap(-30)
          }}>
          Scale In
        </button>
        <button
          onClick={() => {
            setIsRunning(false)
            scaleMap(30)
          }}>
          Scale Up
        </button>
      </fieldset>
    </section>
  )
}

export default ScaleControl