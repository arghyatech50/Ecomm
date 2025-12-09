import "./Email.css";

function Email() {
  return (
    <div className="email-container">
      <h1 className="page-title">Email Support</h1>

      <div className="email-box">
        <p>For assistance, email us directly:</p>
        <h2>support@shopnow.com</h2>

        <button className="email-btn">Send an Email</button>

        <p className="help-text">
          Our support team will respond within 24 hours.
        </p>
      </div>
    </div>
  );
}

export default Email;
