import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h2>
                    I am Jeet Majumder, <span>Full Stack Developer</span>
                  </h2>
                  <p>
                    Hi! My name is Jeet Majumder. As a passionate and ambitious
                    software developer with a diverse skill set,I bring a strong
                    foundation in programming languages and frameworks such as
                    Flutter and React.I am eager to apply my knowledge and
                    enthusiasm to contribute to innovative projects. With a keen
                    eye for detail and a drive for excellence,I thrive in
                    collaborative environments and enjoy tackling challenging
                    problems. My solid understanding of software development
                    principles, coupled with my ability to adapt to new quickly
                    technologies positions me as a valuable asset to any
                    development team.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>
                        Website : <span>www.urfolio.vercel.app</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Email : <span>jeetmajumder858@gmail.com</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Degree : <span>B.Tech in IT</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Phone : <span>+91 8617741681</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        City : <span>Kolkata</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Freelance : <span>Available</span>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="buttons padd-15">
                      <a
                        href="https://drive.google.com/file/d/1nsw9B1OO2NN-bte4k05H_FJB2DCzKBnc/view?usp=sharing"
                        target="_target"
                        className="btn"
                      >
                        Download CV
                      </a>
                      <a
                        href="mailto:jeetmajumder858@gmail.com"
                        data-section-index={0}
                        className="btn hire-me"
                      >
                        Hire Me
                      </a>
                    </div>
                  </div>
                </div>
                <div className="skills padd-15">
                  <div className="row">
                    <div className="skill-item padd-15">
                      <h5>Html5</h5>
                      <div className="progress">
                        <div
                          className="progress-in"
                          style={{ width: "100%" }}
                        />
                        <div className="skill-percent">100%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Css3</h5>
                      <div className="progress">
                        <div
                          className="progress-in"
                          style={{ width: "100%" }}
                        />
                        <div className="skill-percent">100%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Javascript</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Tailwind</h5>
                      <div className="progress">
                        <div
                          className="progress-in"
                          style={{ width: "100%" }}
                        />
                        <div className="skill-percent">100%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Next js</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>React</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Flutter</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>SQL</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>MongoDB</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Education and Certification</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2020 to 2024
                          </h6>
                          <h4 className="timeline-title">
                            B.Tech In (Information Technology)
                          </h4>
                          <p className="timeline-text">
                            I graduated from Guru Nanak Institute of Technology,
                            Kolkata, where I actively participated in numerous
                            hackathons and coding contests. Throughout my
                            academic journey, I consistently advanced to the
                            finals and achieved victory in one instance. These
                            experiences not only honed my technical skills but
                            also instilled in me a competitive spirit and a
                            passion for problem-solving.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2023 September to
                            2023 December
                          </h6>
                          <h4 className="timeline-title">
                            Android Development Using Flutter
                          </h4>
                          <p className="timeline-text">
                            Through this comprehensive program,I have gained
                            in-depth knowledge and hands-on experience in
                            developing dynamic and user-friendly mobile
                            applications for the Android platform. With a strong
                            focus on Flutter, an open-source UI framework
                            developed by Google,I have honed my skills in
                            building cross-platform apps with stunning visuals
                            and smooth performance.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2023 April to 2023
                            September
                          </h6>
                          <h4 className="timeline-title">
                            Mobile App Development with Kotlin
                          </h4>
                          <p className="timeline-text">
                            From mastering the fundamentals of Java and Kotlin
                            programming languages to understanding the
                            intricacies of Android Studio and its powerful
                            tools,I have honed my skills in developing
                            user-friendly and efficient mobile applications.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="experience padd-15">
                  <h3 className="title">Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2023 July to
                            Present
                          </h6>
                          <h4
                            className="timeline-title"
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            Full Stack Developer Intern
                            <span className="timeline-date-custom">
                              Mindstar Technology Solutions Pvt. Ltd.
                            </span>
                          </h4>
                          <p className="timeline-text">
                            Working as a full-stack developer responsible for
                            building high-quality web and cross-platform mobile
                            applications
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> January 2023 to
                            July 2023
                          </h6>
                          <h4
                            className="timeline-title"
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            Full Stack Developer Intern
                            <span className="timeline-date-custom">
                              Abchi Technologies Private Limited
                            </span>
                          </h4>
                          <p className="timeline-text">
                            I have worked on various projects to improve my
                            coding and software development skills.I am
                            responsible for developing and maintaining websites
                            and mobile applications and collaborating with my
                            team to deliver high-quality products.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> July 2022 to August
                            2022
                          </h6>
                          <h4 className="timeline-title">
                            Coding Instructor{" "}
                            <span className="timeline-date-custom">
                              Sikhatrhi Infotech
                            </span>
                          </h4>
                          <p className="timeline-text">
                            Worked as a coding Instructor and taught many topics
                            including App development and Competitive
                            Programming.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
