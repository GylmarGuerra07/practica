import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook , faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Home() {
    return (
        <section className="home">
          <div>
            <h1>Soy Gylmar Guerra.</h1>
            <p>Soy un <strong>Diseñador gráfico y programador junior</strong> Especializado en Diseño Web y Textil, así como en programación Javascripts, PHP,CSS y Python</p>
            <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener nofererrer">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener nofererrer">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener nofererrer">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
            </div>
           </div>  
        </section>
    );
}

export default Home;