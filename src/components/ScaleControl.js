import React from 'react';

function ScaleControl({ setIsRunning, scaleMap, scaleLevel }) {
  return (
    <section className="control scale-control">
      {/* <h4>Scale</h4> */}
      <div style={{ display: 'none' }}>
        {scaleLevel}
      </div>
      <button
        className="material-icons"
        onClick={() => {
          setIsRunning(false)
          scaleMap(-30)
        }}>
        zoom_out
        </button>
      <button
        className="material-icons"
        onClick={() => {
          setIsRunning(false)
          scaleMap(30)
        }}>
        zoom_in
        </button>
    </section>
  )
}

export default ScaleControl