import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './includes/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Footer from './includes/footer/Footer';
import Contact from './Pages/Contact/Contact';
import Profile from './Pages/Profile/Profile';
import CastTable from './Pages/Cast/CastTable';
import ReligionTable from './Pages/Religion/ReligionTable';
import SubCastTable from './Pages/SubCast/SubCastTable';
import CountryTable from './Pages/Country/CountryTable';
import StateTable from './Pages/State/StateTable';
import CityTable from './Pages/City/CityTable';
import UserTable from './Pages/User/User';
import EducationDetailsTable from './Pages/Education/Education';
import FamilyInfoTable from './Pages/Family/Family';
import PersonalInfoTable from './Pages/Personal/Personal';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main style={{ padding: '5em 20px', minHeight: '90vh' }}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/user' element={<UserTable />} />
          <Route path='/services' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/profile' element={<Profile />} />

          <Route path='/User' element={<UserTable />} />

          <Route path='/religion' element={<ReligionTable />} />
          <Route path='/cast' element={<CastTable />} />
          <Route path='/subcast' element={<SubCastTable />} />

          <Route path='/country' element={<CountryTable />} />
          <Route path='/state' element={<StateTable />} />
          <Route path='/city' element={<CityTable />} />

          <Route path='/education' element={<EducationDetailsTable />} />
          <Route path='/family' element={<FamilyInfoTable />} />
          <Route path='/personal' element={<PersonalInfoTable />} />

        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
