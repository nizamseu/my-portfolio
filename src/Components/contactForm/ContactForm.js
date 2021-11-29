import React from "react";
// import "./contact.css";
import JotformEmbed from "react-jotform-embed";

const ContactForm = () => {
  return (
    <div className="contract">
      <div className="contactForm">
        <JotformEmbed src="https://form.jotform.com/213322644789462" />
      </div>
    </div>
  );
};

export default ContactForm;
