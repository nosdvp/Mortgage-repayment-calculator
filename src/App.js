import { useState } from 'react';
import './App.css';
import InputData from './screens/InputData/InputData.js'
import ShowData from './screens/ShowData/ShowData.js'

function App() {

  const [changeForm, setChangeForm] = useState(false)

  const [mortgageAmount, setMortgageAmount] = useState('')
  const [mortgageTerm, setMortgageTerm] = useState('')
  const [interestRate, setInterestRate] = useState('')
  const [mortgageType, setMortgageType] = useState('')

  const [monthPay, setMonthPay] = useState(0)
  const [totalRepay, setTotalRepay] = useState(0)

  const [errorAmount, setErrorAmount] = useState(false)
  const [errorTerm, setErrorTerm] = useState(false)
  const [errorInt, setErrorInt] = useState(false)
  const [errorType, setErrorType] = useState(false)

  return (
    <div className="wrapper">
      <div className='wrapperBlock'>
        <div className='inputData'>
          <InputData
            change={setChangeForm}
            stateMortAmount={setMortgageAmount}
            stateMortTerm={setMortgageTerm}
            stateIntRate={setInterestRate}
            stateMortType={setMortgageType}

            mortAmount={mortgageAmount}
            mortType={mortgageType}
            mortTerm={mortgageTerm}
            intRate={interestRate}

            stateMonthPay={setMonthPay}
            stateTotalRepay={setTotalRepay}

            stateErrorAmount={setErrorAmount}
            stateErrorTerm={setErrorTerm}
            stateErrorInt={setErrorInt}
            stateErrorType={setErrorType}
      
            errorAmount={errorAmount}
            errorTerm={errorTerm}
            errorInt={errorInt}
            errorType={errorType}
          />
        </div>
        <div className='showData'>
          <ShowData
            form={changeForm}
            monthPay={monthPay}
            fullPay={totalRepay}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
