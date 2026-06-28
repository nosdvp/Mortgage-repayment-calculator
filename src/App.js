import { useState } from 'react';
import './App.css';
import InputData from './screens/InputData/InputData.js'
import ShowData from './screens/ShowData/ShowData.js'

function App() {

  const [changeForm, setChangeForm] = useState(false)
  

  return (
    <div className="wrapper">
      <div className='wrapperBlock'>
        <div className='inputData'>
          <InputData
            change={setChangeForm}
          />
        </div>
        <div className='showData'>
          <ShowData
            form={changeForm}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
