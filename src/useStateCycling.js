import { useCallback, useState } from 'react'

export default (states = [], initialIndex = 0) => {
  const [current, setCurrent] = useState(initialIndex)

  const next = useCallback(() => {
    setCurrent((current + 1) % states.length)
  }, [current, setCurrent])

  const previous = useCallback(() => {
    setCurrent((current - 1 + states.length) % states.length)
  }, [current, setCurrent])

  console.log('object :>> ', {
    state: states[current],
    index: current
  })

  return {
    state: states[current],
    index: current,
    next,
    previous,
    setState: setCurrent
  }
}
