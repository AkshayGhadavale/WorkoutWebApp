import React from 'react'
import ListCompo from './ListCompo'

const Mainsec = () => {
  return (
    
      <div className="w-full  h-4/6  flex justify-center items-center">

      <div className="w-5/6  h-full bg-slate-800 flex justify-center items-center rounded-lg flex-col
      ">
          <div className='w-full  h-1/6  flex justify-center items-center rounded-lg'>
    <div className="w-1/5 h-full flex items-center justify-around  "><h1 className='bg-red-300 text-slate-800 text-xl font-semibold py-3 px-3 rounded-lg'>Demo</h1>
  </div>
    <div className="w-4/5 h-full  flex items-center justify-around rounded-lg " >
      <h1 className='bg-red-300 text-slate-800 text-xl font-semibold py-3 px-3 rounded-lg'>Execercies name </h1>
      <h1 className='bg-red-300 text-slate-800 text-xl font-semibold py-3 px-3 rounded-lg'>Time/Count</h1>
    </div>


  </div>
  <div className="w-full  h-5/6 bg-slate-800 flex justify-start items-center rounded-lg flex-col
      ">

      <ListCompo ></ListCompo>
      <ListCompo></ListCompo>
      </div>
        </div>




      </div>


   
  )
}

export default Mainsec
