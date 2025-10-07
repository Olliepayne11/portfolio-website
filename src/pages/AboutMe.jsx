import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";

export default function AboutMe() {
    return (
      <section id="AboutMe" className="about--section">
        <div id="aboutIcon" className="about--section--img">
          <FontAwesomeIcon icon={faAddressCard} size="10x" color="#3D52A0"/>
        </div>
        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">
            <p className="section--title">Profile</p>
            <h1 className="skills--section--heading">About Me</h1>
            <p className="hero--section-description">
                I am a Full-Stack Developer from London, currently working as a Junior Creative Developer at ArtBot, where i'm building my experience within the industry.
            </p>
            <p className="hero--section-description">
                I find great joy in the creative and problem-solving elements of coding, using my expertise to develop a range of applications. 
                Please see the portfolio section below to view the range of applications I have created.
            </p>
          </div>
        </div>
      </section>
    );
  }