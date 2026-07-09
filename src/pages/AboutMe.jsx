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
                I'm a Full-Stack Developer based in London, currently working as a Junior Creative Developer at ArtBot. While I enjoy working across the full development stack, my primary focus is front-end development, where I create responsive, accessible, and intuitive user experiences.
            </p>
          </div>
        </div>
      </section>
    );
  }