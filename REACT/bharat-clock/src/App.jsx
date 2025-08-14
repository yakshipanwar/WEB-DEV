import AppName from './components/AppName';
import AppHeading from './components/AppHeading';
import AppTime from './components/AppTime';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return(
    <center className='container'>
      <AppName></AppName>
      <AppHeading />
      <AppTime/>
    </center>
  );
}


export default App
