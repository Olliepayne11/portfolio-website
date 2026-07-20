import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";

export default function Experience() {
    return (
      <section id="experience" className="about--section">
        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">
            <p className="section--title">Experience</p>
            <h1 className="skills--section--heading">Summary</h1>
            <p id="summaryText" className="text-lg">Frontend Developer with 1-2 years of commercial experience developing responsive digital advertising templates and full-stack web applications. Proficient in React, TypeScript, JavaScript, HTML, CSS, Node.js, Express, and PostgreSQL. Combines technical development skills with a strong background in client communication and digital campaigns, enabling effective collaboration with designers, developers, and stakeholders. Commended for being proactive, efficient, and detail-oriented.</p>
            <h1 className="skills--section--heading">Experience</h1>
            <div id="workExperience">
              <div className="workExperienceDiv m-2">
                <p className="text-lg">Junior Creative Developer, Artbot <b>(Jul 2025 - Present)</b></p>
                <ul className="workExperienceList text-md">
                  <li>Develop and maintain responsive HTML, CSS, and JavaScript advertising templates for globally recognised brands, including British Airways, Volkswagen, Porsche, Harley-Davidson, and John Lewis.</li>
                  <li>Translate Figma designs into production-ready advertising templates, ensuring accuracy and consistency with design specifications.</li>
                  <li>Implement interactive functionality using JavaScript to manipulate the DOM, creating dynamic advertising experiences that meet client campaign requirements.</li>
                  <li>Use Git for version control and collaborate with developers on shared code repositories.</li>
                  <li>Debug and optimise frontend code using Chrome DevTools, technical documentation, and problem-solving techniques to resolve issues efficiently.</li>
                  <li>Collaborate closely with senior developers, designers, and accounts teams to deliver client campaigns to the highest standard.</li>
                </ul>
              </div>
              <div className="workExperienceDiv m-2">
                <p className="text-lg">Freelance Web Developer, Community Compass <b>(May 2025 - Jul 2025)</b></p>
                <ul className="workExperienceList text-md">
                  <li>Independently designed, developed, and delivered a full-stack web application for a not-for-profit organisation, enabling parish councils within the UK to discover local services and events.</li>
                  <li>Built a responsive web application using the PERN stack (PostgreSQL, Express, React, Node.js), implementing backend APIs, database functionality, and spatial queries.</li>
                  <li>Developed reusable React components using Hooks, reducing duplicated code and simplifying future feature development.</li>
                  <li>Utilised TypeScript to create strongly typed interfaces for application data and component props, improving code maintainability.</li>
                  <li>Researched and evaluated third-party APIs, selecting Supabase for user authentication and Stripe for secure payment processing based on the application's requirements.</li>
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
            <a className="text-decoration-none" href="./Oliver Payne - CV.pdf" download><button className="btn btn-contact">Download CV</button></a>
          </div>
        </div>
        <div id="cvIcon" className="about--section--img">
          <FontAwesomeIcon icon={faIdCard} size="10x" color="#3D52A0"/>
        </div>
      </section>
    )
}