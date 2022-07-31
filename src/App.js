import './App.css';
import Header from './components/Header';
import Cards from './components/Cards';
import { useState, useEffect, useRef } from 'react';


function App() {

  const [arrowID, setArrowID] = useState(2)
  const container = useRef()

  // you need to click outside manually :/
  const handleKey = (e) => {
    if(e.key === "ArrowLeft" && arrowID > 1)
      setArrowID(prev => prev - 1)
    else if(e.key === "ArrowRight" && arrowID < 3)
      setArrowID(prev => prev + 1)
  }

  useEffect(() => {
    container.current.click() // doesn't work? 
  }, [])

  return (
    <div className="container" ref={container} onKeyDown={handleKey} tabIndex='0'>
      <div className='wrapper'>
        <Header />
        <div className='card-container'>
          <Cards arrowID={arrowID}/>
        </div>
        
      </div>
    </div>
  );
}

export default App;
