import React from "react";
import "../styles/landingPage.css";
import hero from "../assets/hero-img.png";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <div className="div-landing">
        <div className="hero-frame">
          <div className="text-simple">Simple header</div>
          <div className="nav-pills">
            <div className="nav-tab">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                <div className="active">Home</div>
              </button>
            </div>
            <div className="nav-tab">
              <Link to="/CreateProduct">Create Product</Link>
            </div>
            <div className="nav-base-wrapper">
              <div className="nav-base-2">
                <div className="active-2">Features</div>
              </div>
            </div>
            <div className="nav-base-wrapper">
              <div className="nav-base-2">
                <div className="active-2">Pricing</div>
              </div>
            </div>
            <div className="nav-base-wrapper">
              <div className="nav-base-2">
                <div className="active-2">FAQs</div>
              </div>
            </div>
            <div className="nav-tab">
              <div className="nav-base-3">
                <div className="active-2">About</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-section">
        <div className="div">
          <div className="head">
            <p className="hero-header">Better Solutions For Your Business</p>
            <p className="hero-paragraph">
              We are team of talented designers making websites with Bootstrap
            </p>
            <div className="hero-div">
              <div className="a">
                <div className="text-get">Get Started</div>
              </div>
              <div className="a-2">
                <div className="text-watch">Watch Video</div>
              </div>
              <div className="i">
                <div className="blank"> </div>
              </div>
            </div>
          </div>
          <img src={hero} alt="hero" className="hero-img" />
        </div>
      </div>
      <div className="hero-footer">
        <div className="div-2">
          <div className="input">
            <div className="hero-join">Join Our Newsletter</div>
            <p className="hero-tamen">
              Tamen quem nulla quae legam multos aute sint culpa legam noster
              magna
            </p>
            <div className="form">
              <div className="input-subs" />
              <div className="input-2">
                <div className="text-subs">Subscribe</div>
              </div>
            </div>
          </div>
        </div>
        <div className="div-3">
          <div className="information">
            <div className="data">
              <div className="text-arsha">ARSHA</div>
              <p className="text-adam">
                <span className="span-address">
                  A108 Adam Street <br />
                  New York, NY 535022
                  <br />
                  United States <br />
                  <br />
                </span>
                <span className="text-contact">Phone:</span>
                <span className="span-address">
                  {" "}
                  +1 5589 55488 55
                  <br />
                </span>
                <span className="text-contact">Email:</span>
                <span className="span-address">
                  {" "}
                  info@example.com
                  <br />
                </span>
              </p>
            </div>
            <div className="data">
              <div className="text-useful">Useful Links</div>
              <div className="ul">
                <div className="li">
                  <div className="i-2">
                    <div className="blank-2"> </div>
                  </div>
                  <div className="text-link">Home</div>
                </div>
                <div className="li-2">
                  <div className="i-3">
                    <div className="blank-2"> </div>
                  </div>
                  <div className="text-link-2">About us</div>
                </div>
                <div className="li-2">
                  <div className="i-3">
                    <div className="blank-2"> </div>
                  </div>
                  <div className="text-link-2">Services</div>
                </div>
                <div className="li-2">
                  <div className="i-3">
                    <div className="blank-2"> </div>
                  </div>
                  <div className="text-link-2">Terms of service</div>
                </div>
                <div className="li-2">
                  <div className="i-3">
                    <div className="blank-2"> </div>
                  </div>
                  <div className="text-link-2">Privacy policy</div>
                </div>
              </div>
            </div>
            <div className="data">
              <div className="text-service">Our Services</div>
              <div className="ul">
                <div className="li">
                  <div className="i-2">
                    <div className="blank-2"> </div>
                  </div>
                  <div className="text-link">Web Design</div>
                </div>
                <div className="li-2">
                  <div className="i-3">
                    <div className="blank-2"> </div>
                  </div>
                  <div className="text-link-2">Web Development</div>
                </div>
                <div className="li-2">
                  <div className="i-3">
                    <div className="blank-2"> </div>
                  </div>
                  <div className="text-link-2">Product Management</div>
                </div>
                <div className="li-2">
                  <div className="i-3">
                    <div className="blank-2"> </div>
                  </div>
                  <div className="text-link-2">Marketing</div>
                </div>
                <div className="li-2">
                  <div className="i-3">
                    <div className="blank-2"> </div>
                  </div>
                  <div className="text-link-2">Graphic Design</div>
                </div>
              </div>
            </div>
            <div className="social">
              <div className="text-social">Our Social Networks</div>
              <p className="text-cras">
                Cras fermentum odio eu feugiat lide par naso tierra videa magna
                derita valies
              </p>
              <div className="div-4">
                <div className="a-3">
                  <div className="i-3">
                    <div className="blank-3"></div>
                  </div>
                </div>
                <div className="a-3">
                  <div className="i-3">
                    <div className="blank-3"></div>
                  </div>
                </div>
                <div className="a-3">
                  <div className="i-3">
                    <div className="blank-3"></div>
                  </div>
                </div>
                <div className="a-3">
                  <div className="i-3">
                    <div className="blank-3"></div>
                  </div>
                </div>
                <div className="a-4">
                  <div className="i-3">
                    <div className="blank-3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <p className="copyright-arsha">
            <span className="text-copy">© Copyright </span>
            <span className="text-nama">Arsha</span>
            <span className="text-copy">. All Rights Reserved</span>
          </p>
          <p className="designed-by">
            <span className="text-design">Designed by </span>{" "}
            <span className="text-bs">BootstrapMade</span>
          </p>
        </div>
      </div>
    </div>
  );
}
