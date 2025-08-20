import React from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Permission from "../components/Permission";
import ContentManagement from "../components/ContentManagement";
import DiffComp from "../components/DiffComp";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Imagess from "../components/Imagess";

function Home() {
  return (
    <div className="container">
      <Navbar />
      <Main />
      <Permission />
      <Imagess />
      <ContentManagement />
      <DiffComp />
      <Cards />
      <Footer />
    </div>
  );
}

export default Home;
