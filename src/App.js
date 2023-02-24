import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@popperjs/core/dist/cjs/popper.js';
import Signup from './welcome';


function App() {
  return (
    <div className="App">
      <section className="App-header">
       <Signup/>
      </section>
    </div>
  );
}

export default App;
