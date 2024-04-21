import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import OffersPage from './pages/OffersPage';
import DrivingCourses from './pages/DrivingCourses';
import CategoryA from './pages/CategoryA';
import CategoryB from './pages/CategoryB';
import CategoryBE from './pages/CategoryBE';
import CategoryC from './pages/CategoryC';
import CategoryCE from './pages/CategoryCE';
import CategoryD from './pages/CategoryD';
import CategoryInvalid from './pages/CategoryInvalid';
import ProfQualSertificates from './pages/ProfQualSertificates';
import PreQualification from './pages/PreQualification';
import AcceleratedPreQual from './pages/AcceleratedPreQual';
import AdditionInitQual from './pages/AdditionInitQual';
import PeriodicEdu from './pages/PeriodicEdu';
import ADRCourses from './pages/ADRCourses';
import HDSCourses from './pages/HDSCourses';
import ForkliftOperatorCourse from './pages/ForkliftOperatorCourse';
import StudentZone from './pages/StudentZone';
import PriceList from './pages/PriceList';
import Contacts from './pages/Contacts';


const App = () => {
 
  return (
    <Router>
      <I18nextProvider i18n={i18n}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/offers" element={<OffersPage />} />
            <Route path="/driving-courses" element={<DrivingCourses />} />
            <Route path="/driving-courses/cat-a" element={<CategoryA />} />
            <Route path="/driving-courses/cat-b" element={<CategoryB />} />
            <Route path="/driving-courses/cat-be" element={<CategoryBE />} />
            <Route path="/driving-courses/cat-c" element={<CategoryC />} />
            <Route path="/driving-courses/cat-ce" element={<CategoryCE />} />
            <Route path="/driving-courses/cat-d" element={<CategoryD />} />
            <Route path="/driving-courses/cat-inv" element={<CategoryInvalid />} />
            <Route path="/professional-qualification-certificate" element={<ProfQualSertificates />} />
            <Route path="/professional-qualification-certificate/pre-qual" element={<PreQualification />} />
            <Route path="/professional-qualification-certificate/pre-qual-accelerated" element={<AcceleratedPreQual />} />
            <Route path="/professional-qualification-certificate/add-init-qual" element={<AdditionInitQual />} />
            <Route path="/professional-qualification-certificate/pereodic-edu" element={<PeriodicEdu />} />
            <Route path="/adr-courses" element={<ADRCourses />} />
            <Route path="/hds-courses" element={<HDSCourses />} />
            <Route path="/forklift-operator-course" element={<ForkliftOperatorCourse />} />
            <Route path="/student-zone" element={<StudentZone />} />
            <Route path="/price-list" element={<PriceList />} />
            <Route path="/contacts" element={<Contacts />} />
        </Routes> 
      </I18nextProvider>
    </Router>
  );
};

export default App;