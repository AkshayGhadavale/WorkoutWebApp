import { useState } from 'react'
import Header from './Components/Header'
import Mainsec from './Components/Mainsec'
import Loginpage from './Components/Loginpage'
import './App.css'

function App() {
 const [show, setshow] = useState(false);
 const [showbtn, setshowbtn] = useState(false);

  const handleHeaderClick = () => {
   if(show==true){
setshow(false)
   }
   else{
    setshow(true)
   }
  };
  const buttonHeaderClick = () => {
    if(showbtn==true){
 setshowbtn(false)
    }
    else{
     setshowbtn(true)
    }
   };

  return (
    <>
    <div className="w-full h-screen bg-cover bg-center "
          style={{
            backgroundImage:
              "url('https://i.postimg.cc/c4Z8nLhq/flat-lay-sneakers-with-towel-weights.jpg')",
          }}>
 <Header  buttonHeaderClick={buttonHeaderClick} />
 {/* <Loginpage></Loginpage> */}
     {/* { show && (<Mainsec></Mainsec>)
     
     } */}
     { showbtn && (<Loginpage></Loginpage>)
     
    }

     </div>
    </>
  )
}

export default App
