import React from 'react';

function ScaleControl({setIsRunning, scaleMap, scaleLevel}) {
  return (
    <section className="control scale-control">
      <fieldset>
        <legend>Scale: {scaleLevel}</legend>
        <button onClick={() => setIsRunning(true)}>start</button>
        <button onClick={() => setIsRunning(false)}>stop</button>
        <button onClick={() => {
          setIsRunning(false)
          scaleMap(100)
        }}>
          scaleM
      </button>
        <button onClick={() => {
          setIsRunning(false)
          scaleMap(-10)
        }}>
          Scale In
    </button>
        <button
          onClick={() => scaleMap(10)}
        >
          Scale Up
    </button>
      </fieldset>
    </section>
  )
}

export default ScaleControl