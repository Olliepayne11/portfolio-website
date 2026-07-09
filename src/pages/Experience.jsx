import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";

export default function Experience() {
    return (
      <section id="experience" className="about--section">
        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">
            <p className="section--title">Experience</p>
            <h1 className="skills--section--heading">Summary</h1>
            <p id="summaryText" className="text-lg">Frontend-focused Full-Stack Developer with over one year of commercial experience developing interactive web solutions and applications. Experienced with HTML5, CSS3, JavaScript, TypeScript, React, Node.js, PHP, and SQL. Passionate about creating web applications that solve real-world problems. Brings strong communication, organisation, and interpersonal skills developed through working with clients, designers, and cross-functional teams.</p>
            <h1 className="skills--section--heading">Experience</h1>
            <div id="workExperience">
              <div className="workExperienceDiv m-2">
                <p className="text-lg">ArtBot - Junior Creative Developer <b>(Jul 2025 - Present)</b></p>
                <ul className="workExperienceList text-md">
                  <li>Develop and maintain creative templates for brands such as British Airways, Volkswagen, Porsche, Harley-Davidson, and John Lewis. Build the templates with HTML5, CSS3 & JavaScript, ensuring responsiveness across desktop and mobile devices.</li>
                  <li>Implement interactive functionality for the templates by manipulating the DOM with JavaScript to make the templates dynamic.</li>
                  <li>Use Git for version control and collaborate with developers on shared code repositories.</li>
                  <li>Debug and optimise frontend code using browser DevTools, technical documentation, and problem-solving techniques to resolve issues.</li>
                  <li>Collaborate with senior developers, designers, and accounts teams to deliver client campaigns to the highest standard.</li>
                </ul>
              </div>
              <div className="workExperienceDiv m-2">
                <p className="text-lg">Community Compass - Freelance Web Developer <b>(May 2025 - Jul 2025)</b></p>
                <ul className="workExperienceList text-md">
                  <li>Developed a full-stack web application for a Not-For-Profit organisation, enabling parish councils within the UK to discover local services and events.</li>
                  <li>Built the application using the PERN stack (PostgreSQL, Express.js, React, Node.js), creating a responsive web application and implementing database functionality.</li>
                  <li>Built reusable React components using Hooks to manage application state and improve code maintainability.</li>
                  <li>Delivered a working prototype that was successfully demonstrated to parish councillors and potential users.</li>
                </ul>
              </div>
            </div>
            {/* <h1 className="skills--section--heading">Education</h1>
            <ul id="educationList" className="text-md">
              <li>Full-Stack Developer Coding Traineeship <b>(Jul 2024 - Feb 2025)</b></li>
              <li>Digital Marketing Level 3 Apprenticeship <b>(Mar 2019 - Jun 2020)</b></li>
              <li>Sound Engineering Extended Diploma <b>(Sep 2016 - Jul 2018)</b></li>
            </ul> */}
            <a className="text-decoration-none" href="./OliverPayneCV.pdf" download><button className="btn btn-contact">Download CV</button></a>
          </div>
        </div>
        <div id="cvIcon" className="about--section--img">
          <FontAwesomeIcon icon={faIdCard} size="10x" color="#3D52A0"/>
        </div>
      </section>
    )
}