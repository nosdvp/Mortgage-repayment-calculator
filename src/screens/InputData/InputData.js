import React from 'react'
import './InputData.css'
import calcImg from '../../img/icon-calculator.svg'

const InputData = ({
  change,

  mortAmount,
  mortType,
  mortTerm,
  intRate,

  stateMortAmount,
  stateMortTerm,
  stateIntRate,
  stateMortType,

  stateMonthPay,
  stateTotalRepay
}) => {

  const changeFormShowData = () => {

    const getMonth = mortTerm * 12 // получаю кол-во месяцев
    const getInt = (intRate / 12) / 100 // получаю процент в месяц

    if(mortType === 'Interest'){
      const getMonthPay = mortAmount * getInt
      const getFullInt = getMonthPay * getMonth
      const getFullPay = getFullInt + mortAmount
      stateMonthPay(getMonthPay)
      stateTotalRepay(getFullPay)
    }else if(mortType === 'Repayment'){
      const getMonthInt = mortAmount * getInt // месячная комиссия
      const getMonthAmount = mortAmount / getMonth
      const getMonthPay = getMonthInt + getMonthAmount
      const newMortAmount = mortAmount - getMonthAmount
      stateMonthPay(newMortAmount)
    }

    change(true)
  }

  const clearAll = () => {
    change(false)
  }

  const chooseRepayment = () => {
    stateMortType('Repayment')
  }

  const chooseInt = () => {
    stateMortType('Interest')
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
          <input 
            className='InputData-enterDataBlock-inputBlock-input' 
            placeholder='0.00'
            type='number'
            onChange={(e) => stateMortAmount(Number(e.target.value))}  
          ></input>
        </div>
      </div>

      <div className='InputData-addDataBlock'>
        <div className='InputData-addDataBlock-term'>
          <div className='InputData-addDataBlock-term-title'>Mortgage Term</div>
          <div className='InputData-addDataBlock-term-inputBlock'>
            <input 
              className='InputData-addDataBlock-term-inputBlock-input' 
              placeholder='0'
              type='number'
              onChange={(e) => stateMortTerm(Number(e.target.value))}
            ></input>
            <div className='InputData-addDataBlock-term-inputBlock-years'>
              <div>years</div>
            </div>
          </div>
        </div>
        <div className='InputData-addDataBlock-int'>
          <div className='InputData-addDataBlock-int-title'>Interest Rate</div>
          <div className='InputData-addDataBlock-int-inputBlock'>
            <input 
              className='InputData-addDataBlock-int-inputBlock-input' 
              placeholder='0'
              type='number'
              onChange={(e) => stateIntRate(Number(e.target.value))}
            ></input>
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
            <div 
              className='InputData-type-selectBlock-rep-text'
              onClick={() => chooseRepayment()}
            >Repayment</div>
          </div>
          <div className='InputData-type-selectBlock-int'>
            <div className='InputData-type-selectBlock-int-circle'>
              <div className='circleInactive'></div>
            </div>
            <div 
              className='InputData-type-selectBlock-int-text'
              onClick={chooseInt}  
            >Interest Only</div>
          </div>
        </div>
      </div>

      <div className='InputData-buttonBLock-wrapper'>
        <div className='InputData-buttonBLock' onClick={changeFormShowData}>
          <img src={calcImg}></img>
          <div className='InputData-buttonBLock-text' >Calculate Repayments</div>
        </div>
      </div>
    </div>
  )
}

export default InputData