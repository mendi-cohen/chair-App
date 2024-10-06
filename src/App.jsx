import './App.css';
import MyRouter from './Router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
        <MyRouter/>
        <ToastContainer/>
    </div>
  );
}

export default App;
