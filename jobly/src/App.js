import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from './Homepage';
import NavBar from './NavBar';
import CompanyDetails from './CompanyDetails';
import CompanyList from './CompanyList';
import JobList from './JobList';
import NotFound from './NotFound';


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
      <Routes>
        <Route element={<Homepage/>} path="/"/>
        <Route element={<CompanyList/>} path="/companies"/>
        <Route element={<CompanyDetails/>} path="/companies/:handle"/>
        <Route element={<JobList/>} path="/jobs"/>
        <Route element={<NotFound/>} path="/*"/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
