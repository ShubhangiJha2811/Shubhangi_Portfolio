import React from 'react';
import SEO from '../components/SEO';
import Contact from '../components/Contact';
import ContactInfo from '../components/contact/ContactInfo';
import SocialLinks from '../components/contact/SocialLinks';

const ContactPage = () => {
  return (
    <div className="pt-20">
      <SEO 
        title="Contact Me - Shubhangi Jha"
        description="Get in touch with Shubhangi Jha. Email: shubhangijha2811@gmail.com | Phone: +91 9142438639 | Connect on LinkedIn and GitHub."
        url="https://your-domain.com/contact"
      />
      <Contact />
      <ContactInfo />
      <SocialLinks />
    </div>
  );
};

export default ContactPage;