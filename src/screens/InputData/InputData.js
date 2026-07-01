import React from 'react'
import './InputData.css'
import calcImg from '../../img/icon-calculator.svg'

const InputData = ({change}) => {

  const changeFormShowData = () => {
    change(true)
  }

  const clearAll = () => {
    change(false)
  }

  return (
    <div className='InputData-wrapper'>
      <div className='InputData-header'>
        <div className='InputData-header-title'>Mortgage Calculator</div>
        <button className='InputData-header-clearAll' onClick={clearAll}>Clear All</button>
      </div>

      <div className='InputData-enterDataBlock'>
        <div className='InputData-enterDataBlock-title'>Mortgage Amount</div>
        <div className='InputData-enterDataBlock-inputBlock'>
          <div className='InputData-enterDataBlock-inputBlock-iconAmount'>
            <div className='InputData-enterDataBlock-inputBlock-iconAmount-icon'>£</div>
          </div>
          <input className='InputData-enterDataBlock-inputBlock-input' placeholder='0.00'></input>
        </div>
      </div>

      <div className='InputData-addDataBlock'>
        <div className='InputData-addDataBlock-term'>
          <div className='InputData-addDataBlock-term-title'>Mortgage Term</div>
          <div className='InputData-addDataBlock-term-inputBlock'>
            <input className='InputData-addDataBlock-term-inputBlock-input'></input>
            <div className='InputData-addDataBlock-term-inputBlock-years'>
              <div>years</div>
            </div>
          </div>
        </div>
        <div className='InputData-addDataBlock-int'>
          <div className='InputData-addDataBlock-int-title'>Interest Rate</div>
          <div className='InputData-addDataBlock-int-inputBlock'>
            <input className='InputData-addDataBlock-int-inputBlock-input'></input>
            <div className='InputData-addDataBlock-int-inputBlock-percent'>%</div>
          </div>
        </div>
      </div>

      <div className='InputData-type'>
        <div className='InputData-type-title'>Mortgage Type</div>
        <div className='InputData-type-selectBlock'>
          <div className='InputData-type-selectBlock-rep'>
            <div className='InputData-type-selectBlock-rep-circle'>
              <div className='circleInactive'></div>
            </div>
            <div className='InputData-type-selectBlock-rep-text'>Repayment</div>
          </div>
          <div className='InputData-type-selectBlock-int'>
            <div className='InputData-type-selectBlock-int-circle'>
              <div className='circleInactive'></div>
            </div>
            <div className='InputData-type-selectBlock-int-text'>Interest Only</div>
          </div>
        </div>
      </div>

      <div className='InputData-buttonBLock-wrapper'>
        <div className='InputData-buttonBLock'>
          <img src={calcImg}></img>
          <div className='InputData-buttonBLock-text' onClick={changeFormShowData}>Calculate Repayments</div>
        </div>
      </div>
      {/*<button >Calculate Repaymants</button>*/}
    </div>
  )
}

export default InputData