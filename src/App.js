import './App.css';
import Header from './components/Header';
import Cards from './components/Cards';


function App() {



  return (
    <div className="container">
      <div className='wrapper'>
        <Header />
        <div className='card-container'>
          <Cards />
        </div>
        
      </div>
    </div>
  );
}

export default App;
