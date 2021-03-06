import logo from './logo.svg';
import './App.css';
import CardHolder from './components/CardHolder/CardHolder';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <CardHolder connect={false} />
    </div>
  );
}

export default App;
