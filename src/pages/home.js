import React from "react";
import toggleMenu from "./script.js";

// function toggleMenu() {
//     const menu = document.querySelector(".menu-links");
//     const icon = document.querySelector(".hamburger-icon");
//     menu.classList.toggle("open");
//     icon.classList.toggle("open");
//   }

class Home extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <nav id="desktop-nav">
                        <div className="logo">Anurag Behura</div>
                        <div>
                            <ul className="nav-links">
                                <li><a href="#about">About</a></li>
                                <li><a href="#experience">Experience</a></li>
                                <li><a href="#projects">Projects</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                    </nav>
                    <nav id="hamburger-nav">
                        <div className="logo">Anurag Behura</div>
                        <div className="hamburger-menu">
                            <div className="hamburger-icon" onClick={toggleMenu}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className="menu-links">
                                <li><a href="#about" onclick="toggleMenu()">About</a></li>
                                <li><a href="#experience" onclick="toggleMenu()">Experience</a></li>
                                <li><a href="#projects" onclick="toggleMenu()">Projects</a></li>
                                <li><a href="#contact" onclick="toggleMenu()">Contact</a></li>
                            </div>
                        </div>
                    </nav>
                    <section id="profile">
                        <div className="section__pic-container">
                            <img src="./assets/AB.png" alt="Anurag Behura profile picture" />
                        </div>
                        <div className="section__text">
                            <p className="section__text__p1">Hi, I'm</p>
                            <h1 className="title">Anurag Behura</h1>
                            <p className="section__text__p2">FullStack Developer</p>
                            <div className="btn-container">
                                <button
                                    className="btn btn-color-2"
                                    onclick="window.open('./assets/resume-example.pdf')"
                                >
                                    Download CV
                                </button>
                                <button className="btn btn-color-1" onclick="location.href='./#contact'">
                                    Contact Info
                                </button>
                            </div>
                            <div id="socials-container">
                                <img
                                    src="./assets/linkedin.png"
                                    alt="My LinkedIn profile"
                                    className="icon"
                                    onclick="location.href='https://linkedin.com/in/anuragbehura'"
                                />
                                <img
                                    src="./assets/github.png"
                                    alt="My Github profile"
                                    className="icon"
                                    onclick="location.href='https://github.com/anuragbehura'"
                                />
                            </div>
                        </div>
                    </section>
                    <section id="about">
                        <p className="section__text__p1">Get To Know More</p>
                        <h1 className="title">About Me</h1>
                        <div className="section-container">
                            <div className="section__pic-container">
                                <img src="./assets/AB.png" alt="Profile picture" className="about-pic" />
                            </div>
                            <div className="about-details-container">
                                <div className="about-containers">
                                    <div className="details-container">
                                        <img
                                            src="./assets/experience.png"
                                            alt="Experience icon"
                                            className="icon"
                                        />
                                        <h3>Experience</h3>
                                        <p>2+ years <br />FullStack Development<br />Programming Languages<br />AI & ML</p>
                                    </div>
                                    <div className="details-container">
                                        <img
                                            src="./assets/education.png"
                                            alt="Education icon"
                                            className="icon"
                                        />
                                        <h3>Education</h3>
                                        <p>B.Tech. Bachelors Degree<br />In Computer Scienc & Engineering</p>
                                    </div>
                                </div>
                                <div className="text-container">
                                    <p>
                                        I'm a dynamic full-stack developer with a passion for crafting seamless web solutions. With a strong foundation in both front-end and back-end technologies, I excel in creating user-friendly interfaces and robust, scalable backend systems. My diverse skill set includes expertise in JavaScript, Python, HTML/CSS, and various frameworks. I thrive in collaborative environments, leveraging agile methodologies to deliver exceptional products. Constantly staying updated with the latest industry trends, I bring innovation to every project. Whether it's building responsive websites or optimizing server performance, I'm dedicated to delivering efficient, user-centric solutions that drive digital success.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <img
                            src="./assets/arrow.png"
                            alt="Arrow icon"
                            className="icon arrow"
                            onclick="location.href='./#experience'"
                        />
                    </section>
                    <section id="experience">
                        <p className="section__text__p1">Explore My</p>
                        <h1 className="title">Experience</h1>
                        <div className="experience-details-container">
                            <div className="about-containers">
                                <div className="details-container">
                                    <h2 className="experience-sub-title">FullStack Development</h2>
                                    <div className="article-container">
                                        <article>
                                            <img
                                                src="./assets/checkmark.png"
                                                alt="Experience icon"
                                                className="icon"
                                            />
                                            <div>
                                                <h3>HTML</h3>
                                                <p>Experienced</p>
                                            </div>
                                        </article>
                                        <article>
                                            <img
                                                src="./assets/checkmark.png"
                                                alt="Experience icon"
                                                className="icon"
                                            />
                                            <div>
                                                <h3>CSS</h3>
                                                <p>Experienced</p>
                                            </div>
                                        </article>
                                        <article>
                                            <img
                                                src="./assets/checkmark.png"
                                                alt="Experience icon"
                                                className="icon"
                                            />
                                            <div>
                                                <h3>React</h3>
                                                <p>Intermediate</p>
                                            </div>
                                        </article>
                                        <article>
                                            <img
                                                src="./assets/checkmark.png"
                                                alt="Experience icon"
                                                className="icon"
                                            />
                                            <div>
                                                <h3>JavaScript</h3>
                                                <p>Basic</p>
                                            </div>
                                        </article>
                                        <article>
                                            <img
                                                src="./assets/checkmark.png"
                                                alt="Experience icon"
                                                className="icon"
                                            />
                                            <div>
                                                <h3>Material UI</h3>
                                                <p>Intermediate</p>
                                            </div>
                                        </article>
                                        <article>
                                            <img
                                                src="./assets/checkmark.png"
                                                alt="Experience icon"
                                                className="icon"
                                            />
                                            <div>
                                                <h3>Node JS</h3>
                                                <p>Intermediate</p>
                                            </div>
                                        </article>
                                        <article>
                                            <img
                                                src="./assets/checkmark.png"
                                                alt="Experience icon"
                                                className="icon"
                                            />
                                            <div>
                                                <h3>Express JS</h3>
                                                <p>Intermediate</p>
                                            </div>
                                        </article>
                                        <article>
                                            <img
                                                src="./assets/checkmark.png"
                                                alt="Experience icon"
                                                className="icon"
                                            />
                                            <div>
                                                <h3>Git</h3>
                                                <p>Intermediate</p>
                                            </div>
                                        </article>
                                        <article>
                                            <img
                                                src="./assets/checkmark.png"
                                                alt="Experience icon"
                                                className="icon"
                                            />
                                            <div>
                                                <h3>MongoDB</h3>
                                                <p>Intermediate</p>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                                <div className="details-container">
                                    <h2 className="experience-sub-title">Programming Languages</h2>
                                    <div className="article-container">
                                        <article>
                                            <img
                                                src="./assets/checkmark.png"
                                                alt="Experience icon"
                                                className="icon"
                                            />
                                            <div>
                                                <h3>C++</h3>
                                                <p>Intermediate</p>
                                            </div>
                                        </article>
                                        <article>
                                            <img
                                                src="./assets/checkmark.png"
                                                alt="Experience icon"
                                                className="icon"
                                            />
                                            <div>
                                                <h3>Java</h3>
                                                <p>Intermediate</p>
                                            </div>
                                        </article>
                                        <article>
                                            <img
                                                src="./assets/checkmark.png"
                                                alt="Experience icon"
                                                className="icon"
                                            />
                                            <div>
                                                <h3>Python</h3>
                                                <p>Intermediate</p>
                                            </div>
                                        </article>
                                        <article>
                                            <img
                                                src="./assets/checkmark.png"
                                                alt="Experience icon"
                                                className="icon"
                                            />
                                            <div>
                                                <h3>JavaScript</h3>
                                                <p>Basic</p>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img
                            src="./assets/arrow.png"
                            alt="Arrow icon"
                            className="icon arrow"
                            onclick="location.href='./#projects'"
                        />
                    </section>
                    <section id="projects">
                        <p className="section__text__p1">Browse My Recent</p>
                        <h1 className="title">Projects</h1>
                        <div className="experience-details-container">
                            <div className="about-containers">
                                <div className="details-container color-container">
                                    <div className="article-container">
                                        <img
                                            src="./assets/project-1.png"
                                            alt="Project 1"
                                            className="project-img"
                                        />
                                    </div>
                                    <h2 className="experience-sub-title project-title">Projects</h2>
                                    <div className="btn-container">
                                        <button
                                            className="btn btn-color-2 project-btn"
                                            onclick="location.href='https://github.com/anuragbehura?tab=repositories'"
                                        >
                                            Github
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img
                            src="./assets/arrow.png"
                            alt="Arrow icon"
                            className="icon arrow"
                            onclick="location.href='./#contact'"
                        />
                    </section>
                    <section id="contact">
                        <p className="section__text__p1">Get in Touch</p>
                        <h1 className="title">Contact Me</h1>
                        <div className="contact-info-upper-container">
                            <div className="contact-info-container">
                                <img
                                    src="./assets/email.png"
                                    alt="Email icon"
                                    className="icon contact-icon email-icon"
                                />
                                <p><a href="mailto:behura960@gmail.com">Email</a></p>
                            </div>
                            <div className="contact-info-container">
                                <img
                                    src="./assets/linkedin.png"
                                    alt="LinkedIn icon"
                                    className="icon contact-icon"
                                />
                                <p><a href="https://www.linkedin.com/in/anuragbehura">LinkedIn</a></p>
                            </div>
                        </div>
                    </section>
                    <footer>
                        <nav>
                            <div className="nav-links-container">
                                <ul className="nav-links">
                                    <li><a href="#about">About</a></li>
                                    <li><a href="#experience">Experience</a></li>
                                    <li><a href="#projects">Projects</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                </ul>
                            </div>
                        </nav>
                        <p>Crafted with ❤️ || Anurag Behura All Rights Reserved</p>
                    </footer>
                </div>
            </div>
        );
    }
}

export default Home;