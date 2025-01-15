import '../Css/Home.css';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <>
      <div className="home-container">
        {/* מבוא עם תמונה ורקע טקסט */}
        <section className="intro-section">
          <div className="image-overlay"></div>
          <div className="intro-overlay">
            <h1 className="dynamic-title">ברוכים הבאים לעולם של יצירתיות ויופי</h1>
            <h2>הגלריה שלך ליצירות אומנות מדהימות</h2>
            <p>אנחנו מציגים אומנות יוקרתית בעבודת יד שתוסיף נשמה לכל חלל.</p>
            <div className="cta-buttons">
              <Link to="/about">
                <button className="cta-btn secondary">קרא עוד עלינו</button>
              </Link>
            </div>
          </div>
        </section>

        {/* תמונות גלריה  */}
        <section className="gallery">
          <div className="gallery-item">
            <img src="Images/Horses.png" alt="ציורים בשמן" />
          </div>
          <div className="gallery-item">
            <img src="Images/guitar.png" alt="אקריליק" />
          </div>
          <div className="gallery-item">
            <img src="Images/Birds.png" alt="גרפיטי" />
          </div>
        </section>

        {/* כפתור לכל הגלריה */}
        <div className="button-container">
          <Link to="/Products" className="cta-btn primary">
            לכל הגלריה
          </Link>
        </div>

        <div className="footer-spacer"></div>

      </div>
    </>
  );
}

export default Home;



