import React from 'react';
import Error from './MainPages/Error';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Main from './MainPages/Main';
import Faq from './MainPages/faq';
import Footer from './components/Footer';
import Items from './MainPages/Items';
import Centre from './Pages/cs-help-centre';
import Contact from './Pages/cs-contact-us';
import About from './Pages/abr-about-us';
import Term from './Pages/abr-tos';
import Landing from './MainPages/landing';
import Team from './Pages/abr-team';
import Asked from './Pages/cs-faq';

function App() {
  return (
    <div className="App">  
    <Router>
      {/* <Navbar />
        <Main />
          <Items />
            <Faq />
              <Footer /> */}
              {/* <Asked/> */}



      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='main' element={<Main/>}/>
        <Route path='items' element={<Items/>}/>
        <Route path='frequently-asked-questions' element={<Faq/>}/>
        <Route path='footer' element={<Footer/>}/>
        <Route path='help-centre' element={<Centre />} />
        <Route path='contact-us' element={<Contact />} />
        <Route path='faq' element={<Asked />} />
        <Route path='about-us' element={<About />} />
        <Route path='team' element={<Team />} />
        <Route path='term-of-service' element={<Term />} />
        <Route path='*' element={<Error/>}/>
        
      
      </Routes>
    </Router>
    </div>
  );
}

export default App;
