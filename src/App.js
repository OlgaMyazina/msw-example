import logo from './logo.svg';
import './App.css';

if (process.env.NODE_ENV === 'development') {
    const {worker} = require('./mocks/browser')
    worker.start()
}

function App() {

    const getResult = () => {
        fetch('/test').then(resp => resp.json()).then(data => console.log(data))
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <button onClick={getResult}>Click me!</button>
            </header>
        </div>
    );
}

export default App;
