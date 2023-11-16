import './HomePage.css';

import Header from "../../components/Header/Header";
import SideNav from "../../components/SideNav/SideNav";
import Carrousel from "../../components/Carrousel/Carrousel";
import Footer from "../../components/Footer/Footer";

function HomePage(){

  return (
    <>
      <Header />
      <SideNav />
      <main className="mainContainer">
        <Carrousel />
        <Carrousel />
        <Carrousel />
        <Carrousel />
        <Carrousel />
        <Carrousel />
        <Footer />
      </main>
    </>
  )
}


export default HomePage;