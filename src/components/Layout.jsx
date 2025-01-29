import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Container from "./Container";

const Layout = ({ children }) => {
  return (
    <div className="bg-gradient-to-b from-gray-600 to-gray-800 min-h-screen text-white">
      <Container>
        <Navbar />
        {children}
        <Footer />
      </Container>
    </div>
  );
};

export default Layout;
