import "../Styles/Contact.css";
import { useState } from "react";

function Contact() {
  const [message, setMessage] = useState(null); 
  const [type, setType] = useState(""); 
  const handleContactForm = (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };
    const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));
    if (
      !registeredUser ||
      formData.name.trim().toLowerCase() !==
        registeredUser.username.trim().toLowerCase() ||
      formData.email.trim().toLowerCase() !==
        registeredUser.email.trim().toLowerCase()
    ) {
      setMessage("Name or Email does not match your registered account!");
      setType("error");
      return;
    }
    localStorage.setItem("contactMessage", JSON.stringify(formData));
    setMessage("Your message has been sent successfully");
    setType("success");
    setTimeout(() => {
      setMessage(null);
    }, 4000);
  };
  return (
    <section className="contact">
      <div className="container contactForm">
        <form
          className="contactUs-form"
          id="contact-form"
          onSubmit={handleContactForm}
        >
          <h3>Contact Us</h3>
          {message && (
            <p className={`formMessage ${type}`}>{message}</p>
          )}
          <div className="form-row">
            <div className="form-group">
              <label>User Name</label>
              <input type="text" name="name" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Message</label>
              <textarea name="message" required />
            </div>
          </div>
          <button className="btn-continue fw-bold" type="submit">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;





