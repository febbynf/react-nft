import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import CollectionCard from './components/CollectionCard';

function App() {
  return ( 
    <div className='app'>
      <Header />
      <CollectionCard id={0} name={'Bandana Punk'} traits={[{'value' : 7}]} image={'../assets/eth.png'}/>
    </div>
  )
}

export default App;
