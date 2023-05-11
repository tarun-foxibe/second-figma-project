import React from 'react'
import Navbar from "./components/navbar/navbar.jsx";
import Header from "./components/header/header.jsx";
import Testfile from "./components/testfile/testfile.jsx";
import Cards from "./components/cards/cards.jsx";
import Findtest from "./components/findtest/findtest.jsx";
import Schedule from "./components/schedule/schedule.jsx";
import Cpathlabs from "./components/cpathlabs/cpathlabs.jsx";
import Accrediations from "./components/accrediations/accrediations.jsx";
import Details from "./components/details/details.jsx";
import About from "./components/about/about.jsx";
import Footer from "./components/footer/footer.jsx";

const App = () => {
  return (
    <>
    <Navbar />
    <Header />
    <Testfile />
    <Cards/>
    <Findtest/>
    <Schedule/>
    <Cpathlabs/>
    <Accrediations/>
    <Details/>
    <About/>
    <Footer/>
    </>
  )
}

export default App