import React, { useState, useEffect } from "react";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import "./Resume.css";

export default function Resume(props) {
  /* STATE */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATE FOR THE LABELS */
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Achievement/Certification", logoSrc: "success.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "Core Java", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 90 },
    { skill: "JavaScript", ratingPercentage: 90 },
    {
      skill: "Salesforce Developer",
      ratingPercentage: 90,
    },
    { skill: "SQL", ratingPercentage: 90 },
    { skill: "Express JS", ratingPercentage: 80 },
    { skill: "Node JS", ratingPercentage: 85 },
    { skill: "HTML", ratingPercentage: 95 },
    { skill: "CSS", ratingPercentage: 95 },
  ];

  const projectsDetails = [
    {
      title: "Online Food Ordering Website",
      duration: { fromDate: "Nov 2021", toDate: "Jan 2022" },
      description:
        "Design of a responsive restaurant website. It contains a header, home, about, services, menu, contact and a footer.",
      subHeading: "Technologies Used: HTML, CSS, JavaScript",
    },
    {
      title: "NewsGuides",
      duration: { fromDate: "Mar 2022", toDate: "Apr 2022" },
      description:
        "NewsGuides is a News app which can be used to grab quick daily news bites.",
      subHeading: "Technologies Used: React JS, Bootstrap (Using API)",
    },
    {
      title: "Cloud Space",
      duration: { fromDate: "Dec 2021", toDate: "Mar 2022" },
      description:
        "Cloud Space is a cloud computing model that stores data on the Internet through a cloud computing provider who manages and operates data storage as a service using API.",
      subHeading: "Technologies Used: React JS, CSS (Using API)",
    },
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "Mar 2022", toDate: "Apr 2022" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, CSS, Bootstrap, Node Js",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"LNCT & Science, Bhopal"}
        subHeading={"B.Tech (COMPUTER SCIENCE AND ENGINEERING)"}
        fromDate={"2019"}
        toDate={"2023"}
      />
      <ResumeHeading
        heading={"+2 High School Koilakh, Madhubani"}
        subHeading={"INTERMEDIATE IN SCIENCE"}
        fromDate={"2017"}
        toDate={"2019"}
      />
      <ResumeHeading
        heading={"Rajkrit High School Koilakh, Madhubani"}
        subHeading={"MATRICULATION"}
        fromDate={"2016"}
        toDate={"2017"}
      />
    </div>,

    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,
    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Intern at TheSmartBridge"}
          subHeading={"Salesforce Developer"}
          fromDate={"Apr 2022"}
          toDate={"June 2022"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Currently working as Salesforce Developer Catalyst.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Salesforce Supported Virtual Internship Program - Developer
            Catalyst.
          </span>
        </div>
      </div>
    </div>,

    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="NASSCOM's Build-A-Thon 2022 Winner 🏆"
        subHeading={
          "Top-Ranked champions of the NASSCOM FutureSkills Prime Build-A-Thon 2022."
        }
        description="I have cracked the final round and It is a tremendous honor to receive this award for being among the Top-ranked champions of the NASSCOM FutureSkills Prime Developer Build-A-Thon 2022."
      />
      <ResumeHeading
        heading="Salesforce Developer Catalyst Certification"
        description="This Certification by NASSCOM FutureSkills Prime, (Certificate ID: FSP/2022/2/2240037)."
      />
      <ResumeHeading
        heading="Big Data Analytics Gold Certification 🥇"
        description="By TalentNext and FutureSkills (WIPRO), 2022."
      />
      <ResumeHeading
        heading="Artificial Intelligence Silver Certification 🥈"
        description="By TalentNext and FutureSkills (WIPRO), 2022."
      />
      <ResumeHeading
        heading="Trailhead Ranger ⭐ (Salesforce Developer)"
        description="Achieved 100+ Badges, 2 Superbadges, 10+ Trails and 1 lakh+ points."
      />
    </div>,
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Listening Music"
        description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
      />
      <ResumeHeading
        heading="Travelling"
        description="I love discovering new cities and places around the world."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((resumeDetails) => resumeDetails)}
      </div>
    );
  };

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
}
