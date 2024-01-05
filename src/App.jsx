import { useState } from 'react'
import './App.css'
import Header from './Header'
import CartSection from './CartSection'
import { useGlobalContext } from './userContext'
 


function App() {
  const {loading} = useGlobalContext()
  if(loading){
    return(
      <div className='text-center mt-10'>
        <h1 className='text-[6rem] font-bold text-slate-600'>Loading.....</h1>
      </div>
    )
  }

  return (
    <>
     <Header />
     <CartSection />
     
    </>
  )
}

export default App