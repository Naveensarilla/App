import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
// import { UgIndex } from './egard MAIN page/images/Ug index/UgIndex';
import { UgHomePage } from './egard MAIN page/UG PAGES/UgHomePage';
import UGHOMEPAGE from './ug home page/UGHOMEPAGE';
import { Faq } from './ug home page/demoFaq/faq';
import { Neet } from './ug home page/Explore  exams/Neet';
import { LandingPage } from './LandingPage/LandingPage';
import { ContactsPage } from './ug home page/Countact/ContactsPage';
import { About } from './ug home page/About';
import { MbaHome } from './mba home page/MbaHome';
import { GateOts } from './ug home page/OTS/GateOts';
import { Ots } from './ug home page/OTS/Ots';


class App extends Component {
  render() {
    return (
      <div className="App">


{/* <UgHomePage />

<Routes>
<Route path='/' element={<NavbarCoureses/>} />
<Route path='/ugindex' element={<UgHomePage />}/>
</Routes> */}

{/* main cintant */}
{/* <UGHOMEPAGE /> */}
{/* main cintant */}


{/* contant of ug home page */}
{/* linking changes */}

{/* <LandingPage /> */}

{/* ................................... */}
{/* MBA */}
{/* <MbaHome /> */}



{/* ................................... */}

<UGHOMEPAGE />
<Routes>
<Route path='/neet' element={<Neet />} />
</Routes>



{/* ots */}
{/* <Ots/> */}

{/* ug home page contant */}


{/* lading page */}


</div>
    );
  }
}

export default App;




//<Router >