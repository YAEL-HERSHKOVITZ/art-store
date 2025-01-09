import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">צור קשר</h1>
      <p className="contact-description">אנא מלא את הפרטים הבאים ונחזור אליך בהקדם האפשרי:</p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">שם:</label>
          <input type="text" id="name" name="name" placeholder="הכנס את שמך" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">מספר טלפון:</label>
          <input type="tel" id="phone" name="phone" placeholder="הכנס מספר טלפון" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">דוא"ל:</label>
          <input type="email" id="email" name="email" placeholder="הכנס כתובת דוא&quot;ל" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">הודעה:</label>
          <textarea id="message" name="message" rows="5" placeholder="הכנס הודעה"></textarea>
        </div>
        <button type="submit" className="contact-submit">שלח</button>
      </form>
    </div>
  );
}

export default Contact;
