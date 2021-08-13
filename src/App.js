import {BrowserRouter, Route} from 'react-router-dom'
import App1 from './components/App1.js';
import Data from './components/Data.js';
import Home1 from './components/Home1.js';
import Stack from './components/Stack.js';
import View from './components/View.js';
function App() {
  return (
          <>
            
            <BrowserRouter>
             <Route exact path='/' component={Home1} />
            <Route path='/view/:id' component={View} />
            <Route path='/app1' component={App1} />
            </BrowserRouter>
          </>
  );
}

export default App;
