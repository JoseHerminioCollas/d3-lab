import React, { useEffect, useState } from 'react';
import { hierarchyData } from './hierarchy'
import HTree from './hierarchy-tree'
import HierTree from './components/HierTree'

const hTree = HTree(hierarchyData)

function App() {
  const [trigger, setTrigger] = useState(0)
  useEffect((e) => {
    hTree.setTree()
    setTrigger(1)
  }, [])

  return (
    <div className="App">
      <HierTree hTree={hTree} />
      {trigger}
    </div>
  );
}

export default App;
