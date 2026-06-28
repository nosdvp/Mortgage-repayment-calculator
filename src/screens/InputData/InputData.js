import React from 'react'

const InputData = ({change}) => {

  const changeFormShowData = () => {
    change(true)
  }

  const clearAll = () => {
    change(false)
  }

  return (
    <div>
      <button onClick={changeFormShowData}>Calculate Repaymants</button>
      <button onClick={clearAll}>ClearAll</button>
    </div>
  )
}

export default InputData