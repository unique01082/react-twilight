import React from 'react'
import useStateCycling from './useStateCycling'

const CheckBox = () => {
  const { state, next, previous } = useStateCycling(Array.from('welcome'))
  console.log('state :>> ', state)
  return (
    <h1 onClick={next} onDoubleClick={previous}>
      {state}
    </h1>
  )
}

export default CheckBox
