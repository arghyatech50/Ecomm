import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="page-title">Contact Us</h1>

      <div className="contact-box">
        <div className="contact-info">
          <h2>We're here to help!</h2>
          <p>Email: support@shopnow.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: Kolkata, West Bengal, India</p>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
