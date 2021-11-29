import React from "react";
import Banner from "../Banner/Banner";
import ContactForm from "../contactForm/ContactForm";
import Header from "../Header/Header";
import Projects from "../Projects/Projects";

const Home = () => {
  return (
    <div>
      {/* <Header></Header> */}
      <Banner></Banner>
      <Projects></Projects>
      <ContactForm></ContactForm>
    </div>
  );
};

export default Home;
