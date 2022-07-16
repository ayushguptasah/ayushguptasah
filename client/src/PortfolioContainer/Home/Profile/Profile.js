import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import ScrollService from "../../../Utilities/ScrollService";
export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a
                href="https://www.linkedin.com/in/ayushguptasah/"
                target={`_blank`}
              >
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://github.com/ayushguptasah" target={`_blank`}>
                <i className="fa fa-github"></i>
              </a>
              <a
                href="https://www.facebook.com/ayushgupta.sahh/"
                target={`_blank`}
              >
                <i className="fa fa-facebook-square"></i>
              </a>
              <a
                href="https://www.instagram.com/ayushgupta.sah/"
                target={`_blank`}
              >
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://twitter.com/ayushguptasah" target={`_blank`}>
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm{" "}
              <span className="highlighted-text">Ayush Kumar Sah</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Web Developer",
                    1000,
                    "Salesforce Developer",
                    1000,
                    "MERN Stack Developer",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building application with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {""}
              Hire Me{" "}
            </button>
            <a href="ayush.pdf" download="Ayush Kumar Sah.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
