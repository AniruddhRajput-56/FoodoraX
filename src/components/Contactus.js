const Contactus = () => {
  return (
    <div className="contact-page">
      <h1 className="page-title">Contact Us</h1>

      <div className="contact-box">
        <form className="contact-form">
          <input
            type="text"
            className="form-input"
            placeholder="Your Name"
          />

          <input
            type="text"
            className="form-input"
            placeholder="Your Message"
          />

          <button className="form-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contactus;
