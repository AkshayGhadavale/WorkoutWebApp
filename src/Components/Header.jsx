import React from 'react'
import logo from './images/logo.svg'

const Header = ({handleHeaderClick}) => {
  return (
    <>
    
    <div className="w-full h-40 flex justify-center items-center">
    <div className="w-5/6  h-14 bg-red-300 flex justify-center items-center rounded-lg">
        
        <div className="h-full w-1/6  flex justify-center items-center ">
        <h1 className='text-xl font-semibold text-white-300/75 dark:text-white-300/75'>WorkOUt MaTE</h1>
        </div>
        
        <div className="h-full w-5/6 bg-slate-800 flex justify-around items-center rounded-lg ">
        <div className="h-full w-5/6 bg-slate-800 flex justify-around items-center rounded-lg ">
    
        <h1 className='text-xl font-semibold text-red-300'onClick={handleHeaderClick} >Exercise</h1>
        <h1 className='text-xl font-semibold text-red-300' >Shecudel</h1>
        <h1 className='text-xl font-semibold text-red-300'>About</h1>
        </div>

        <div className="h-full w-1/6 bg-slate-800 flex justify-around items-center rounded-lg ">
    
        <button className="bg-transparent hover:bg-red-300 text-red-300 font-semibold hover:text-white py-1 px-3 border border-red-300 hover:border-transparent rounded-lg">
  Login
</button>
</div>

</div>
        </div>
        
        
        </div>
   
    
    </>
  )
}



export default Header
