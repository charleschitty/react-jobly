import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from `react-router-dom`;


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
