import React from "react";
import "./App.css";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Alexander Chacchi</h1>
        <p>Ingeniero de Software Senior | +10 años de experiencia</p>
      </header>
      <main className="main">
        <section className="about">
          <h2>Sobre mí</h2>
          <p>
            Hola, soy Alexander Chacchi, un apasionado ingeniero de software con
            más de una década de experiencia en el desarrollo de aplicaciones
            escalables y de alto rendimiento.
          </p>
        </section>
        <section className="contact">
          <h2>Contacto</h2>
          <p>
            <FaEnvelope /> <a href="mailto:alexander@gmail.com">alexander@gmail.com</a>
          </p>
          <p>
            <FaGithub />{" "}
            <a href="https://github.com/Scorpion" target="_blank" rel="noopener noreferrer">
              github.com/Scorpion
            </a>
          </p>
        </section>
        <section className="social">
          <h2>Conecta conmigo</h2>
          <a
            href="https://linkedin.com/in/Scorpion"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Alexander Chacchi</p>
      </footer>
    </div>
  );
}

export default App;