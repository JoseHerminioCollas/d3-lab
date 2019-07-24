import React, { useEffect, useState } from 'react';
import './App.css';
import { hierarchy, tree, select } from 'd3'
import { hierarchyData } from './hierarchy'

const offset = [30, 30]
function drawHD() {
  const heirarchyRoot = hierarchy(hierarchyData)
  const treeLayout = tree()

  treeLayout.size([200, 100])
  treeLayout(heirarchyRoot)

  var chartDOM = select("#chart")
    .append("svg")
    .attr("width", 300)
    .attr("height", 200)
  chartDOM
    .append("rect")
    .attr("fill", "transparent")
    .attr("stroke", "green")
    .attr("width", 300)
    .attr("height", 200)

  chartDOM.selectAll(".bar")
    .data(heirarchyRoot.descendants())
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("width", "15")
    .attr("height", "15")
    .attr("fill", "red")
    .attr("x", (d) => d.x)
    .attr("y", d => d.y)
    .attr("transform", `translate(${offset[0]}, ${offset[1]})`)

  const g = chartDOM.append('g')
    .attr("width", 300)
    .attr("height", 200)
    .attr("transform", `translate(${offset[0]}, ${offset[1]})`)
  g.append('rect')
    .attr("fill", "transparent")
    .attr("width", 300)
    .attr("height", 200)
  g.selectAll('circle.node')
    .data(heirarchyRoot.descendants())
    .enter()
    .append('circle')
    .classed('node', true)
    .attr("fill", "darkgreen")
    .attr('cx', function (d) { return d.x; })
    .attr('cy', function (d) { return d.y; })
    .attr('r', 9);
    g.selectAll('line.link')
    .data(heirarchyRoot.links())
    .enter()
    .append('line')
    .classed('link', true)
    .attr("stroke", "darkblue")
    .attr('x1', function (d) { return d.source.x; })
    .attr('y1', function (d) { return d.source.y; })
    .attr('x2', function (d) { return d.target.x; })
    .attr('y2', function (d) { return d.target.y; });
}
function App() {
  const [s, setS] = useState(10)
  drawHD()
  useEffect((e) => {
    setS(30)
  }, [])
  return (
    <div className="App">
      <div id="chart"></div>
      {s}
    </div>
  );
}

export default App;
