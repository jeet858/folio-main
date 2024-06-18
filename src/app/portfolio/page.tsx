import type { NextPage } from "next";

const Portfolio: NextPage = () => {
  return (
    <div>
      <section className="portfolio section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Portfolio</h2>
            </div>
          </div>
          {/* <div className="row">
            <div className="portfolio-filter padd-15">
              <button type="button" className="active" data-filter="all">
                All
              </button>
              <button type="button" data-filter="graphics-design">
                Graphics Design
              </button>
              <button type="button" data-filter="web-design">
                Web Design
              </button>
              <button type="button" data-filter="wordpress">
                Wordpress
              </button>
            </div>
          </div> */}
          <div className="row">
            {/* Portfolio Item */}

            {/* Portfolio Item End*/}
            {/* Portfolio Item */}

            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/1.png" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>Crimson Paints</h4>
                  <p style={{ color: "white" }}>
                    A inventory management system
                  </p>
                  <div className="icon">
                    <a href="https://crimson-paints858.vercel.app">
                      <i className="fa fa-search" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/2.png" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>Prescription Generate</h4>
                  <p style={{ color: "white" }}>
                    A system to generate prescriptions online and organize
                    patients data
                  </p>
                  <div className="icon">
                    <a href="https://prescriptiongenerate.vercel.app/">
                      <i className="fa fa-search" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="wordpress">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/3.png" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>CSIWB</h4>
                  <p style={{ color: "white" }}>
                    A website for Cardiological Society of India, West Bengal
                  </p>
                  <div className="icon">
                    <a href="https://csiwb.vercel.app/">
                      <i className="fa fa-search" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="wordpress">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/4.png" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>Proiq Academy</h4>
                  <p style={{ color: "white" }}>
                    A website for a childrens academy called Proiq Academy
                  </p>
                  <div className="icon">
                    <a href="https://proiqacademy.in/">
                      <i className="fa fa-search" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
