import React from "react";

const GoogleMap = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235526.94958115128!2d75.69903088758055!3d22.724205001592413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1744577875428!5m2!1sen!2sin"
      width="100%"
      height="450"
      style={{ border: "0", marginBottom: "-4px" }}
      loading="lazy"
       data-aos="fade-up"  data-aos-delay="70" data-aos-duration="600"
    ></iframe>
  );
};

export default GoogleMap;
