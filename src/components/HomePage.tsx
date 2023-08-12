import React, { useState } from 'react';
import './HomePage.css'

const HomePage = () => {


    return (
        <div>
        <section className="hero">
            <nav>
                <div></div>
                <ul>
                    <li><a
                        href="https://drive.google.com/file/d/15qIPBOASuLralfsUAyMB5LCwtVoi0wlL/view?usp=sharing">Resume</a>
                    </li>
                    <li><a href="#about-me">About me</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contacts">Contact me</a></li>
                </ul>
            </nav>
            <div className="hero-area">

                <div className="hero-text">
                    <h1>Gary Gao</h1>
                    <p>Hello! Welcome to my site!</p>
                    <div className="button"><a href="#about-me">About me</a></div>
                </div>

                <div className="socials">
                    <div>
                        <a href="mailto: mgao041@uottawa.ca" className="social">
                            <svg width="50" height="50" fill="#ffffff" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 24 24">
                                <path
                                    d="M19 24h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5v14c0 2.761-2.238 5-5 5zm-.141-6.333c.63 0 1.141-.512 1.141-1.142v-9.05c0-.63-.511-1.142-1.141-1.142h-13.718c-.63 0-1.141.512-1.141 1.142v9.05c0 .63.511 1.142 1.141 1.142h13.718zm-6.859-4.058l-6.228-4.321-.014 7.712h12.457v-7.712l-6.215 4.321zm5.913-6.609c-1.745 1.215-5.913 4.153-5.913 4.153l-5.947-4.153h11.86z"/>
                            </svg>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/gary-gao-869a8b239/" className="social">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="50" height="50"
                                 viewBox="0 0 24 24">
                                <path
                                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/JohnWick08" className="social">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="50" height="50"
                                 viewBox="0 0 24 24">
                                <path
                                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section className="sub-section" id="about-me">
            <div className="information">
                <h2>About Me</h2>
                <p>Hello, my name is Gary, I am a 4th year computer science student at University of Ottawa.
                    I am extremly interseted in software & web development. I enjoy coding and always ready to
                    learn new things!
                </p>
            </div>
            <div className="headshot-container">
                <img className="headshot" src="/photo.jpeg" alt="Gary's photo"/>
            </div>
        </section>

        <section className="sub-section-alternative" id="projects">

            <h2>Projects</h2>

            <div className="project-container">

                <div className="project-card">
                    <img className="project-image"
                         src="https://d1aogsfjmxwtup.cloudfront.net/images/article_images/_inlineArticleImage/Pharmacy-Management-Software-1.jpg"
                         alt="project One Image"/>
                    <h3>Prescription Management System</h3>
                    <p className="subtext">A Web Application that allows the users to register patients & workers,
                        generate drug report,
                        create & retrieves prescriptions. Built using Spring, PostgreSQL and Docker, follows the clean
                        architecture.
                    </p>
                    <hr/>
                    <p className="subtext"><a
                        href="https://github.com/JohnWick08/Pharmarcy-Prescription-Management-System">View here</a></p>
                </div>

                <div className="project-card">
                    <img className="project-image"
                         src="https://www.cdc.gov/poxvirus/monkeypox/images/monkeypox.jpg?_=66117"
                         alt="project Two Image"/>
                    <h3>Monkeypox Prediction AI</h3>
                    <p className="subtext">developed a machine learning-based prediction system for monkeypox outbreaks.
                        The model is designed to capture patterns in the data and identify risk factors that are
                        associated with the emergence of monkeypox cases.</p>
                    <hr/>
                    <p className="subtext"><a
                        href="https://colab.research.google.com/drive/1_RsToJ-aAusxv9xxngHbL00Zv88Ph9FD#scrollTo=zDNYOSsNsdu9">View
                        here</a></p>
                </div>

                <div className="project-card">
                    <img className="project-image" src="/proj1.png" alt="project Three Image"/>
                    <h3>JIA Option Map</h3>
                    <p className="subtext">My honors project that uses react to build a website that takes real-life
                        patients through a five-step process where they describe their pain, express their preferences,
                        and learn about
                        more than 30 pain treatments.</p>
                    <hr/>
                    <p className="subtext"><a href="https://jia-project.herokuapp.com/home">View here</a></p>
                </div>

                <div className="project-card">
                    <img className="project-image"
                         src="https://previews.123rf.com/images/jirsak/jirsak1604/jirsak160400006/56357274-corporate-data-management-system-dms-and-document-management-system-concept-businessman-publish-docu.jpg"
                         alt="project Four Image"/>
                    <h3>Customer Management System</h3>
                    <p className="subtext">Local web application using Spring MVC, Hibernate and MySQL that performs the
                        CRUD operations.
                        Stimulated the standard functions of a management system that allows users to perform functions
                        in a manager’s
                        perspective.</p>
                    <hr/>
                    <p className="subtext"><a href="https://github.com/JohnWick08/Customer-Management-System">View
                        here</a></p>
                </div>
            </div>
        </section>

        <footer id="contacts">
            <h2>Contact me</h2>
            <p>mgao041@uottawa.ca</p>
            <p>647-703-6258</p>
        </footer>
        <script src="src/app.js"></script>
        </div>
    );
}

export default HomePage;