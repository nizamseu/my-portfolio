import React from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PersonIcon from "@mui/icons-material/Person";
import ReactJotformEmbed from "react-jotform-embed";
const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_02znmdm",
        "template_ezq1y5l",
        form.current,
        "oDNYXMoZmRvGJ_h97"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contract">
      <h1 style={{ textAlign: "center", margin: "30px 0" }}>Contact</h1>
      <div className="contact">
        <div className=" childContact">
          <PhoneIcon style={{ fontSize: "3rem" }} />
          <p className="title">Phone</p>
          <p className=" sub-title">+8801827612791</p>
        </div>
        <div className=" childContact">
          <AlternateEmailIcon style={{ fontSize: "3rem" }} />
          <p className="title">Email</p>
          <p className=" sub-title">nizamcse.seu@gmail.com</p>
        </div>
        <div className=" childContact">
          <PlaceIcon style={{ fontSize: "3rem" }} />
          <p className="title">Address</p>
          <p className=" sub-title">Middle Badda, Dhaka, Bangladesh</p>
        </div>
        <div className=" childContact">
          <PersonIcon style={{ fontSize: "3rem" }} />
          <p className="title">Freelance Available</p>
          <p className=" sub-title">I am available for Freelance hire</p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
