import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);
  const [error, setError] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [message, setMessage] = useState(null);
  const [emailValid, setEmailValid] = useState(false);
  const [displayMessage, setDisplayMeesage] = useState(null);
  
  const isValidEmailAddress = (name, address, message) => {
    if(name && address && message){
      return !! address.match(/.+@.+/);
    }
    return false;    
}

  const sendEmail = (e) => {
    
    e.preventDefault();

    if(emailValid){
      console.log("################", emailValid);
      emailjs
      .sendForm(
        "service_xewgg3d",
        "template_zvzrauh",
        form.current,
        "88HoSaGFBMVrMt6Nd"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
      setEmail("");
      setName("");
      setMessage("");
      setDisplayMeesage("Thanks for Contacting me !")
    }
    else {
      setError(true);
      setDisplayMeesage("All fields are required")
    }
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': ''}}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onBlur={() => setEmailValid(isValidEmailAddress(name, email, message))} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
          
          <input type="email" name="user_email" className="user" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />

          <textarea name="message" className="user" placeholder="Message" value={message} onChange={e => setMessage(e.target.value)} />
          
          <input type="submit" value="Send" className="button" disabled={disableButton}/>
          <span style={{fontStyle: "italic"}}>{displayMessage}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
