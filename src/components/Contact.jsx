import React, { useState } from 'react';
import '../Css/Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true); // הצגת הפופ-אפ
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
  };

  const closePopup = () => {
    setShowPopup(false); // סגירת הפופ-אפ
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">צור קשר</h1>
      <p className="contact-description">אנא מלא את הפרטים הבאים ונחזור אליך בהקדם האפשרי:</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">שם:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="הכנס את שמך"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">מספר טלפון:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="הכנס מספר טלפון"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">דוא"ל:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="הכנס כתובת דואל"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">הודעה:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="5"
            placeholder="הכנס הודעה"
          />
        </div>
        <button className="contact-submit" type="submit">שלח</button>
      </form>

      {/* פופ-אפ */}
      <div className={`contact-popup ${showPopup ? 'show' : ''}`}>
        <div className="contact-popup-content">
          <h2>ההודעה נשלחה בהצלחה!</h2>
          <p>תודה שפנית אלינו. נחזור אליך בהקדם.</p>
          <button onClick={closePopup}>סגור</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;

