import React from 'react'
import StatusBar from '../components/StatusBar'
import SemiCircleProgress from '../components/ProgressHalfCircle'

const Dirga = () => {
  return (
    <div className='flex'>
      <SemiCircleProgress
        title="Kesenangan"
        value= "18"
        color="#FFC107"
      />
      <SemiCircleProgress
        title="Pertemanan"
        value="18"
        color="#F44336"
      />
    </div>
  )
}

export default Dirga