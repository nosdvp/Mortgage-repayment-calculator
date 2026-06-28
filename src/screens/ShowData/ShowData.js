import React from 'react'
import imgCalc from '../../img/illustration-empty.svg'
import './ShowData.css'

const ShowData = ({form}) => {
  return (
    <div className='ShowData-wrapper'>
      {form === false ? (
        <>
          <div className='ShowData-wrapper-Inactive'>
            <div>
              <img src={imgCalc}/>
            </div>
            <div className='ShowData-title'>Result show here</div>
            <div className='ShowData-text'>Complete the form and click "calculate repayments" to see what your monthly repayments would be.</div>
          </div>
        </>
      ) : (
        <>
          <div>
            <div className='ShowData-title'>Your results</div>
            <div className='ShowData-text-afterRepay'>Your results are shown below based on the information you provided. To adjust the results, edit the form and click "calculate repayments" again.</div>
            <div className='ShowData-resultWrapper'>
              <div className='ShowData-resultWrapper-indoorBlock'>
                <div className='ShowData-resultWrapper-indoorBlock-monthlyRep'>
                  <div className='ShowData-resultWrapper-indoorBlock-monthlyRep-title'>Your monthly perayments</div>
                  <div className='ShowData-resultWrapper-indoorBlock-monthlyRep-amount'>£</div>
                </div>
                <div className='ShowData-resultWrapper-indoorBlock-totalRep'>
                  <div className='ShowData-resultWrapper-indoorBlock-totalRep-title'>Total you'll repay over the term</div>
                  <div className='ShowData-resultWrapper-indoorBlock-totalRep-amount'>£</div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default ShowData