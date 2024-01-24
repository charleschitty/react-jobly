import './App.css';
import { BrowserRouter} from 'react-router-dom';
import NavBar from './NavBar';
import RoutesList from "./RouteList";


/** Main App  Component
 *
 *  Props: None
 *
 *  State: None
 *
 * App -> {NavBar, RouteList}
 */

function App() {
  console.log("App is rendered");

  return (
    <BrowserRouter>
      <NavBar/>
      <RoutesList />
    </BrowserRouter>
  );
}

export default App;
