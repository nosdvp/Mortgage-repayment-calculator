import React from 'react'
import './InputData.css'
import calcImg from '../../img/icon-calculator.svg'

const InputData = ({
  change,

  mortAmount,
  mortTerm,
  intRate,
  mortType,

  stateMortAmount,
  stateMortTerm,
  stateIntRate,
  stateMortType,
  stateError,

  stateMonthPay,
  stateTotalRepay,

  stateErrorAmount,
  stateErrorTerm,
  stateErrorInt,
  stateErrorType,

  errorAmount,
  errorTerm,
  errorInt,
  errorType,

}) => {

  const changeFormShowData = () => {

    const getMonth = mortTerm * 12 // получаю кол-во месяцев
    const getInt = (intRate / 12) / 100 // получаю процент в месяц

    if(mortType === 'Interest'){
      const getmothAmount = Number(mortAmount)
      console.log(getmothAmount)
      const getMonthPay = getmothAmount * getInt
      const getFullInt = getMonthPay * getMonth
      const getFullPay = getFullInt + getmothAmount
      stateMonthPay(getMonthPay)
      stateTotalRepay(getFullPay)
      change(true)
    }
    
    mortAmount === '' ? stateErrorAmount(true) : stateErrorAmount(false)
    mortTerm === '' ? stateErrorTerm(true) : stateErrorTerm(false)
    intRate === '' ? stateErrorInt(true) : stateErrorInt(false)
    mortType === '' ? stateErrorType(true) : stateErrorType(false)
    
  }

  const clearAll = () => {
    change(false)
    stateMortAmount('')
    stateMortTerm('')
    stateIntRate('')
    stateMortType('')
  }

  const chooseMortType = (type) => {
    stateMortType(type)
    stateErrorType(false)
  }

  const disable = () => {
    
  }

  return (
    <div className='InputData-wrapper'>
      <div className='InputData-header'>
        <div className='InputData-header-title'>Mortgage Calculator</div>
        <button className='InputData-header-clearAll' onClick={clearAll}>Clear All</button>
      </div>

      <div className='InputData-enterDataBlock'>
        {errorAmount === false ? <div className= 'InputData-enterDataBlock-title'>Mortgage Amount</div> : <div className='InputData-enterDataBlock-title-error'>Enter Amount</div>}
        <div className={errorAmount === false ? 'InputData-enterDataBlock-inputBlock' : 'InputData-enterDataBlock-inputBlock-error'}>
          <div className='InputData-enterDataBlock-inputBlock-iconAmount'>
            <div className={errorAmount === false ? 'InputData-enterDataBlock-inputBlock-iconAmount-icon' : 'InputData-enterDataBlock-inputBlock-iconAmount-icon-error'}>£</div>
          </div>
          <input 
            className='InputData-enterDataBlock-inputBlock-input' 
            placeholder='0.00'
            type='number'
            onChange={(e) => {
              stateMortAmount(e.target.value === '' ? '' : Number(e.target.value));
              stateErrorAmount(false);
            }}
            value={mortAmount}
          ></input>
        </div>
      </div>

      <div className='InputData-addDataBlock'>
        <div className='InputData-addDataBlock-term'>
          {errorTerm === false ? <div className='InputData-addDataBlock-term-title'>Mortgage Term</div> : <div className='InputData-addDataBlock-term-title-error'>Enter Period</div>}
          <div className={errorTerm === false ? 'InputData-addDataBlock-term-inputBlock' : 'InputData-addDataBlock-term-inputBlock-error'}>
            <input
              className='InputData-addDataBlock-term-inputBlock-input' 
              placeholder='0'
              type='number'
              onChange={(e) => {
                stateMortTerm(e.target.value === '' ? '' : Number(e.target.value))
                stateErrorTerm(false)
              }}
              value={mortTerm}
            ></input>
            <div className={errorTerm === false ? 'InputData-addDataBlock-term-inputBlock-years' : 'InputData-addDataBlock-term-inputBlock-years-error'}>
              <div>years</div>
            </div>
          </div>
        </div>
        <div className='InputData-addDataBlock-int'>
          {errorInt === false ? <div className='InputData-addDataBlock-int-title'>Interest Rate</div> : <div className='InputData-addDataBlock-int-title-error'>Enter Percent</div>}
          <div className={errorInt === false ? 'InputData-addDataBlock-int-inputBlock' : 'InputData-addDataBlock-int-inputBlock-error'}>
            <input
              className='InputData-addDataBlock-int-inputBlock-input' 
              placeholder='0'
              type='number'
              onChange={(e) => {
                stateIntRate(e.target.value === '' ? '' : Number(e.target.value))
                stateErrorInt(false)
              }}
              value={intRate}
            ></input>
            <div className={errorInt === false ? 'InputData-addDataBlock-int-inputBlock-percent' : 'InputData-addDataBlock-int-inputBlock-percent-error'}>%</div>
          </div>
        </div>
      </div>

      <div className='InputData-type'>
        {errorType === false ? <div className='InputData-type-title'>Mortgage Type</div> : <div className='InputData-type-title-error'>Chooise Mortgage Type</div>}
        <div className='InputData-type-selectBlock'>
          
          {mortType === 'Repayment' ? (
            <div 
              className='InputData-type-selectBlock-rep-active'
              onClick={disable}  
            >
              <div className='InputData-type-selectBlock-rep-circle-active'>
                <div className='circleActive'></div>
              </div>
              <div className='InputData-type-selectBlock-rep-text-active'>Repayment</div>
            </div>

          ) : (
            <div 
              className={errorType === false ? 'InputData-type-selectBlock-rep' : 'InputData-type-selectBlock-rep-error'}
              onClick={() => chooseMortType('Repayment')}
            >
            <div className='InputData-type-selectBlock-rep-circle'>
              <div className='circleInactive'></div>
            </div>
            <div className='InputData-type-selectBlock-rep-text'>Repayment</div>
          </div>
          )}

          {mortType === 'Interest' ? (
            <div 
              className='InputData-type-selectBlock-int-active' 
              onClick={disable}
            >
              <div className='InputData-type-selectBlock-int-circle-active'>
                <div className={'circleActive-active'}></div>
              </div>
              <div className='InputData-type-selectBlock-int-text-active'>Interest Only</div>
            </div>
          ) : (
            <div 
              className={errorType === false ? 'InputData-type-selectBlock-int' : 'InputData-type-selectBlock-int-error'} 
              onClick={() => chooseMortType('Interest')}
            >
            <div className='InputData-type-selectBlock-int-circle'>
              <div className='circleInactive'></div>
            </div>
            <div className='InputData-type-selectBlock-int-text'>Interest Only</div>
          </div>
          )}
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