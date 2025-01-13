import './Home.css'; // קישור לקובץ CSS

function Home() {
  return (
    <>
      <div className="home-container">
        {/* מבוא עם גרדיאנט ואפקטים */}
        <section className="intro-section">
          <div className="intro-overlay">
            <h1 className="dynamic-title">ברוכים הבאים לעולם של יצירתיות ויופי</h1>
            <h2>הגלריה שלך ליצירות אומנות מדהימות</h2>
            <p>אנחנו מציגים אומנות יוקרתית בעבודת יד שתוסיף נשמה לכל חלל.</p>
            <div className="cta-buttons">
              <button className="cta-btn secondary">קרא עוד עלינו</button>
            </div>
          </div>
        </section>

        {/* גלריה אינטראקטיבית */}
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
          <div className="cta-buttons">
            <button className="cta-btn primary">לכל הגלריה</button>
          </div>
        </section>



      </div>
    </>
  );
}

export default Home;



