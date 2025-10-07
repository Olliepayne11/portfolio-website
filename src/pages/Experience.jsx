import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";

export default function Experience() {
    return (
      <section id="experience" className="about--section">
        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">
            <p className="section--title">Experience</p>
            <h1 className="skills--section--heading">Summary</h1>
            <p id="summaryText" className="text-lg">Creative, proactive and hard-working Full-Stack Developer with over a year’s experience in the field. Highly skilled in HTML, CSS,
                                                    JavaScript, TypeScript, React, Node, PHP, SQL and Bootstrap. Passionate about building web applications to help solve real-world
                                                    problems, from developing websites for local communities to building creative solutions for industry-leading clients. Alongside my
                                                    technical expertise, I have gained excellent communication, organisation and interpersonal skills throughout my career to date.</p>
            <h1 className="skills--section--heading">Education</h1>
            <ul id="educationList" className="text-md">
              <li>Digital Marketing Level 3 <b>(2020)</b></li>
              <li>British Computer Society - Principles of Coding <b>(2019)</b></li>
              <li>British Computer Society - Principles of Marketing <b>(2019)</b></li>
              <li>Sound Engineering Extended Diploma <b>(2018)</b></li>
            </ul>
            <h1 className="skills--section--heading">Experience</h1>
            <div id="workExperience">
              <div className="workExperienceDiv m-2">
                <p className="text-lg">ArtBot - Junior Creative Developer <b>(Jul 2025 - Present)</b></p>
                <ul className="workExperienceList text-md">
                  <li>Develop and maintain creative templates for a range of industry-leading clients (Volkswagen, Porsche, Audi, British Airways, John
Lewis, Currys, etc.)</li>
                  <li>Contribute to back-end logic tasks using Apps Script to streamline the deployment of client advertisements based on dynamic
data, such as weather conditions</li>
                  <li>Collaborate alongside senior developers to gain industry knowledge and understand coding best practices</li>
                  <li>Partner with the Design and Accounts teams to deliver client campaigns to the highest standard</li>
                  <li>Thrive in a fast-paced environment, taking on a variety of technical tasks across multiple clients</li>
                </ul>
              </div>
              <div className="workExperienceDiv m-2">
                <p className="text-lg">Community Compass - Freelance Web Developer <b>(May 2025 - Jul 2025)</b></p>
                <ul className="workExperienceList text-md">
                  <li>Worked alongside a Not-for-Profit CEO to help develop a web application which allows users within parish councils across the
UK to find local services and events.</li>
                  <li>The application was built using the PERN stack (PostgreSQL, Express, React, Node). By using this stack, I could run spatial queries
directly to the database, returning the relevant parish council for coordinates passed through.</li>
                  <li>Attended bi-weekly meetings with the CEO to discuss next steps for the application.</li>
                  <li>Developed the application to a stage where the CEO could successfully showcase it to parish councilors, enabling them to see
an initial version of the app before they sign up.</li>
                </ul>
              </div>
            </div>
            <a className="text-decoration-none" href="./OliverPayneCV.pdf" download><button className="btn btn-contact">Download CV</button></a>
          </div>
        </div>
        <div id="cvIcon" className="about--section--img">
          <FontAwesomeIcon icon={faIdCard} size="10x" color="#3D52A0"/>
        </div>
      </section>
    )
}