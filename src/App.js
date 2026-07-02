import { useState } from 'react';
import './App.css';
import InputData from './screens/InputData/InputData.js'
import ShowData from './screens/ShowData/ShowData.js'

function App() {

  const [changeForm, setChangeForm] = useState(false)

  const [mortgageAmount, setMortgageAmount] = useState(0) //сумма ипотеки
  const [mortgageTerm, setMortgageTerm] = useState(0) //срок ипотеки в месяцах которые будете переведены из годов
  const [interestRate, setInterestRate] = useState(0) //процентная ставка
  const [mortgageType, setMortgageType] = useState('') //тип расчета кредита

  const [monthPay, setMonthPay] = useState(0)
  const [totalRepay, setTotalRepay] = useState(0)

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
