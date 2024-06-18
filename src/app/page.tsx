import { IoMailOutline, IoMailSharp } from "react-icons/io5";
export default async function Home() {
  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            <img
              src="/imgs/Jeet.png"
              alt="Al Siam Profile"
              className="shadow-dark"
            />
            <h1>Jeet Majumder</h1>
            <p>Full Stack Developer</p>
            <div className="social-links">
              {/* <a href="https://twitter.com/" target="_blank">
                <i className="fa fa-twitter" />
              </a> */}
              {/* <a href="https://facebook.com/" target="_blank">
                <i className="io5 io5-mailSharp">
                  <IoMailSharp />
                </i>
              </a> */}
              <a href="https://github.com/jeet858" target="_blank">
                <i className="fa fa-github" />
              </a>
              {/* <a href="https://instagram.com/" target="_blank">
                <i className="fa fa-instagram" />
              </a> */}
              <a href="https://linkedin.com/in/jeet-m" target="_blank">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
