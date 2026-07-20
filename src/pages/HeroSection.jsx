import ollie from "../assets/Ollie.jpg"
import { Link } from "react-scroll"
import { motion } from "motion/react"

export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hi, I'm Ollie</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">Frontend Developer</span>{" "}
                    </h1>

                    <p className="hero--section-description">
                        I build responsive digital experiences and web applications.
                    </p>

                    <Link
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="portfolio"
                        className="btn btn-contact"
                    >
                        See My Projects
                    </Link>
                </div>
            </div>
            <motion.div className="hero--section--img"
                        animate={{scale: 1}}
                        initial={{scale: 0}}
                        transition={{type: 'tween', duration: 1, ease: 'easeInOut'}}>
                <img src={ollie} alt="Hero Section"/>
            </motion.div>
        </section>
    )
}