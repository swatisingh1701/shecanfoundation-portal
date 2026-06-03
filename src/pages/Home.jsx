import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";

function Home({ darkMode, setDarkMode }) {
  return (
    <>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <div className="home-container">

        <div className="hero-section">

          <h1>
            She Can Foundation
          </h1>

          <p>
            Empowering women through education,
            opportunities and community support.
          </p>

        </div>

        <ContactForm />

      </div>
    </>
  );
}

export default Home;
