import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home.js'
import RegistraionPage from './components/Registration.js'
import MLandingPage from './components/MLandingPage.js';
import TLandingPage from './components/TLandingPage.js';
function App() {
  return (
   <>
   <Router >
    <Routes> 
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/Registration" element={<RegistraionPage/>}/>
      <Route exact path="/MLandingPage" element={<MLandingPage/>}/>
      <Route exact path="/TLandingPage" element={<TLandingPage/>}/>
    </Routes>
   </Router>
   </>
  );
}

export default App;
