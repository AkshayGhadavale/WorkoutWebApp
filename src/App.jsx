import { useState } from 'react'
import Header from './Components/Header'
import Mainsec from './Components/Mainsec'
import './App.css'

function App() {
 const [show, setshow] = useState(false);

  const handleHeaderClick = () => {
   if(show==true){
setshow(false)
   }
   else{
    setshow(true)
   }
  };

  return (
    <>
    <div className="w-full h-screen bg-cover bg-center "
          style={{
            backgroundImage:
              "url('https://i.postimg.cc/c4Z8nLhq/flat-lay-sneakers-with-towel-weights.jpg')",
          }}>
 <Header handleHeaderClick={handleHeaderClick} />
      
     { show && (<Mainsec></Mainsec>)
     
     }
     </div>
    </>
  )
}

export default App
