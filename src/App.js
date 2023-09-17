import logo from './logo.svg';
import './App.css';
import UserSearch from './UserSearch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <UserSearch />
    </div>
  );
}

export default App;
