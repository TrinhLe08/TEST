import logo from './logo.svg';
import './App.css';

import Main from './Main/Main'

import { ThemeContext } from './Context/ThemContext'

function App() {
  return (
    <ThemeContext>
    <div className="App">
    <Main/>
    </div>
    </ThemeContext>
  );
}

export default App;
