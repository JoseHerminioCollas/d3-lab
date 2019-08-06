import { hierarchy, tree } from 'd3'

const HTree = (hierarchyData) => {
  const data = hierarchyData
  let heirarchyTree

  return {
    getTree: () => {
      return heirarchyTree
    },
    setTree: () => {
      heirarchyTree = hierarchy(data)
      const treeLayout = tree()
      treeLayout.size([280, 180])
      treeLayout(heirarchyTree)    
    }
  }
}

export default HTree
