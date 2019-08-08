import { useEffect, useState } from 'react';

function useInit(initCallBack) {
  const [layout, setLayout] = useState(0)
  useEffect(() => {
    initCallBack()
    setLayout(3)
  }, [])
  return [layout]
}

export default useInit
