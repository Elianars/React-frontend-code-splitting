import logo from './logo.svg';
import './App.css';

// import {lazy} from 'react';
import {lazy, Suspense} from 'react';

const Slogan = lazy( () => import('./Slogan') );
const Rodape = lazy( () => import('./Rodape') );


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

          <Suspense fallback={ <p>Carregando...</p> }>
            <Slogan />
          </Suspense>

          <Suspense fallback={ <p>Carregando...</p> }>
            <Rodape />
          </Suspense>

        
      </header>
    </div>
  );
}

export default App;
