import { Container } from "@mui/material";
import React from "react";
import Banner from "../Banner/Banner";
import ContactForm from "../contactForm/ContactForm";
import Header from "../Header/Header";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <Container>
      {/* <Header></Header> */}
      <Banner></Banner>
      <Projects></Projects>
      <Skills />
      <ContactForm></ContactForm>
    </Container>
  );
};

export default Home;
