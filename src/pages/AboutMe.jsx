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
                I’m a Frontend Developer based in London, currently working as a Junior Creative Developer at ArtBot. I enjoy bringing designs to life through thoughtful interfaces, clean code, and engaging user experiences.
            </p>

            <p className="hero--section-description">
                With a focus on frontend development, I work across the stack to create performant, accessible, and intuitive products that balance creativity with functionality.
            </p>
          </div>
        </div>
      </section>
    );
  }