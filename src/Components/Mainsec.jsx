import React from 'react'
import ListCompo from './ListCompo'
import Listcheckmarkcompo from './Listcheckmarkcompo'

const Mainsec = () => {
  return (
    
      <div className="w-full  h-4/6  flex justify-center items-center">

      <div className="w-5/6  h-full bg-slate-800 flex justify-center items-center rounded-lg 
      ">
        <div className="w-4/6  h-5/6 bg-slate-100 flex justify-center items-center rounded-lg flex-col mx-2 my-2
      ">
          <div className='w-full  h-1/6  flex justify-center items-center rounded-lg'>
    
    <div className="w-full h-full  flex items-center justify-around rounded-lg " >
      <h1 className='bg-red-300 text-slate-800 text-xl font-semibold py-3 px-3 rounded-lg'>Execercies name </h1>
      <h1 className='bg-red-300 text-slate-800 text-xl font-semibold py-3 px-3 rounded-lg'>Execercies details </h1>
    
      <h1 className='bg-red-300 text-slate-800 text-xl font-semibold py-3 px-3 rounded-lg'>Time/Count</h1>
    </div>


  </div>
  <div className="w-full  h-4/6  flex justify-start items-center  rounded-lg flex-col
      ">

      <ListCompo ></ListCompo>
      <ListCompo></ListCompo>
      </div>
      <div className="w-full h-1/6  flex items-start justify-around rounded-lg " >
    
    <h1 className='bg-red-300 text-slate-800 text-xl font-semibold py-3 px-3 rounded-lg'>Select ALL </h1>
    <h1 className='bg-red-300 text-slate-800 text-xl font-semibold py-3 px-3 rounded-lg'>ADD</h1>
  </div>
      
        </div>

        <div className="w-2/6  h-5/6 bg-slate-100 flex justify-start items-center rounded-lg mx-2 my-2 flex-col
      " >
           <div className='w-full  h-1/6  flex justify-start items-center rounded-lg py-2 flex-col'>
    
    <div className="w-full h-full  flex items-start justify-around rounded-lg " >
    <h1 className='bg-red-300 text-slate-800 text-xl font-semibold py-3 px-3 rounded-lg'>ALL</h1>
      <h1 className='bg-red-300 text-slate-800 text-xl font-semibold py-3 px-3 rounded-lg'>Execercies name </h1>
      <h1 className='bg-red-300 text-slate-800 text-xl font-semibold py-3 px-3 rounded-lg'>Time/Count</h1>
    </div>
   


  </div>
   <Listcheckmarkcompo></Listcheckmarkcompo>
   <Listcheckmarkcompo></Listcheckmarkcompo>
   <Listcheckmarkcompo></Listcheckmarkcompo>
   <Listcheckmarkcompo></Listcheckmarkcompo>
   <Listcheckmarkcompo></Listcheckmarkcompo>
   <Listcheckmarkcompo></Listcheckmarkcompo>
   <Listcheckmarkcompo></Listcheckmarkcompo>
   <div className='w-full  h-1/6  flex justify-start items-center rounded-lg py-2 flex-col'>
    
    <div className="w-full h-full  flex items-start justify-around rounded-lg " >
    
      <h1 className='bg-red-300 text-slate-800 text-xl font-semibold py-3 px-3 rounded-lg'>Select ALL </h1>
      <h1 className='bg-red-300 text-slate-800 text-xl font-semibold py-3 px-3 rounded-lg'>ADD</h1>
    </div>
   


  </div>
        </div>
        </div>

      </div>


   
  )
}

export default Mainsec
