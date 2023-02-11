import React from "react";

import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";

const ContactPage = () => {
  return(
    <>
      <Hero heading='Contact' message='Submit the form below for more work and quotes.' />
      <ContactForm />
    </>
  )
};

export default ContactPage;