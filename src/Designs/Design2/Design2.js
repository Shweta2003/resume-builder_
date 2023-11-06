import { useState, useEffect } from "react";
import "./Template2.css";

export const Template2 = () => {
  const query = "(min-width: 968px)";
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches]);

  return (
    <>
      <main className="l-main bd-container" id="bd-container">
        <div className="resume" id="area-cv">
          <div className="resume__left">
            {/* Profile */}
            <section className="home" id="home">
              <div className="home__container section bd-grid">
                <div className="home__data bd-grid">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt="profile_image"
                    className="home__img"
                  />
                  <h1 className="home__title">
                    <strong>Tim Young</strong>
                  </h1>
                  <h3 className="home__profession">Software Engineer</h3>
                </div>

                <div className="home__address bd-grid">
                  <span className="home__information">
                    <i className="bx bx-map home__icon" /> London, UK
                  </span>
                  <span className="home__information">
                    <i className="bx bx-envelope home__icon" /> abc123@gmail.com
                  </span>
                  <span className="home__information">
                    <i className="bx bx-phone home__icon" /> 9811568940
                  </span>
                </div>
              </div>
            </section>

            {/* <AboutMe {...aboutMe} /> */}

            <section className="profile section" id="profile">
              <h2 className="section-title">Introduction</h2>
              <p className="profile__description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorum exercitationem deleniti natus minus tempora recusandae
                quod aperiam animi ullam quibusdam, voluptatibus quasi delectus
                quia nobis modi! Est obcaecati commodi laboriosam?
              </p>
            </section>

            {/* <Skills {...skills} /> */}
            <section className="technical-skills section" id="skills">
              <h2 className="section-title">Technical skills</h2>
              <div className="skills__content bd-grid">
                <ul className="skills__data">
                  <li>Java</li>
                  <li>Python</li>
                  <li>MERN</li>
                  <li>SQL</li>
                </ul>
              </div>
            </section>
            <section className="soft-skills section">
              <h2 className="section-title">Soft Skills</h2>
              <div className="skills__content bd-grid">
                <ul className="skills__data">
                  <li>Hardworking</li>
                  <li>Motivated</li>
                </ul>
              </div>
            </section>

            {/* <SocialMedia {...socialMedia} /> */}

            <section className="social section">
              <h2 className="section-title">Social Media Links</h2>
              <div className="social__container bd-grid">
                <li>Github</li>
                <li>Linkedin</li>
                <li>Dribble</li>
              </div>
            </section>
          </div>

          <div className="resume__right">
            {/* <Works {...experience} /> */}

            <section className="work-experience section" id="experience">
              <h2 className="section-title">Experience</h2>
              <div className="experience__container bd-grid">
                <div className="experience__content">
                  <div className="experience__time">
                    <span className="experience__rounder"></span>
                    <span className="experience__line"></span>
                  </div>
                  <div className="experience__data bd-grid">
                    <h3 className="experience__title">Software Intern</h3>
                    <span className="experience__company">6 | ABC Company</span>
                    <div>
                      <ul>
                        <li>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. A, velit!
                        </li>
                        <li>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. A, velit!
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="experience__content">
                  <div className="experience__time">
                    <span className="experience__rounder"></span>
                    <span className="experience__line"></span>
                  </div>
                  <div className="experience__data bd-grid">
                    <h3 className="experience__title">Software Intern</h3>
                    <span className="experience__company">6 | ABC Company</span>
                    <div>
                      <ul>
                        <li>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. A, velit!
                        </li>
                        <li>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. A, velit!
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="experience__content">
                  <div className="experience__time">
                    <span className="experience__rounder"></span>
                    <span className="experience__line"></span>
                  </div>
                  <div className="experience__data bd-grid">
                    <h3 className="experience__title">Software Intern</h3>
                    <span className="experience__company">6 | ABC Company</span>
                    <div>
                      <ul>
                        <li>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. A, velit!
                        </li>
                        <li>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. A, velit!
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* <Academic {...experience} /> */}

            <section className="academic-experience section" id="education">
              <h2 className="section-title">Education</h2>
              <div className="education__container bd-grid">
                <div className="education__content">
                  <div className="education__time">
                    <span className="education__rounder"></span>
                    <span className="education__line"></span>
                  </div>
                  <div className="education__data bd-grid">
                    <h3 className="education__title">ABC University</h3>
                    <span className="education__year">2017-2020</span>
                    <h3 className="education__studies">Computer Science</h3>
                  </div>
                </div>
              </div>
            </section>

            {/* <Projects {...experience} /> */}

            <section className="proyects-experience section" id="proyects">
              <h2 className="section-title">Projects</h2>
              <div className="experience__container bd-grid">
                <div className="experience__content">
                  <div className="experience__time">
                    <span className="experience__rounder"></span>
                    <span className="experience__line"></span>
                  </div>
                  <div className="experience__data bd-grid">
                    <h3 className="experience__title">Project 1 - ABC</h3>
                    <span className="experience__proyect">
                      Oct. 2019 - Oct. 2021
                    </span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam, eius.
                  </div>
                </div>
                <div className="experience__content">
                  <div className="experience__time">
                    <span className="experience__rounder"></span>
                    <span className="experience__line"></span>
                  </div>
                  <div className="experience__data bd-grid">
                    <h3 className="experience__title">Project 2 - EFG</h3>
                    <span className="experience__proyect">
                      Oct. 2019 - Oct. 2021
                    </span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam, eius.
                  </div>
                </div>
                <div className="experience__content">
                  <div className="experience__time">
                    <span className="experience__rounder"></span>
                    <span className="experience__line"></span>
                  </div>
                  <div className="experience__data bd-grid">
                    <h3 className="experience__title">Project 3 - XYZ</h3>
                    <span className="experience__proyect">
                      Oct. 2019 - Oct. 2021
                    </span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam, eius.
                  </div>
                </div>
                <div className="experience__content">
                  <div className="experience__time">
                    <span className="experience__rounder"></span>
                    <span className="experience__line"></span>
                  </div>
                  <div className="experience__data bd-grid">
                    <h3 className="experience__title">Project 4 - PQR</h3>
                    <span className="experience__proyect">
                      Oct. 2019 - Oct. 2021
                    </span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam, eius.
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default Template2;