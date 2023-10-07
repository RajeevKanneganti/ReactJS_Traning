import { Suspense, lazy } from 'react';
import './App.css';
import { Toggle } from './components/Toggle';

const LazyDemo = lazy(() => import('./components/LazyDemo'));
function App() {
  return (
    <div className="App">
      <Toggle />
      <h1>I'm Lazy component</h1>
      <Suspense fallback={<div> Loading User ..... </div>}>
        <LazyDemo userId='1' />
      </Suspense>
    </div>
  );
}

export default App;
