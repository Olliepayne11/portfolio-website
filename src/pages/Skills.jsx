import html from '../assets/html5.png'
import css from '../assets/css3.png'
import javascript from '../assets/javascript.png'
import php from '../assets/php.png'
import python from '../assets/python.png'
import sql from '../assets/sql.png'
import react from '../assets/react.png'
import jquery from '../assets/jquery.png'
import typescript from '../assets/typescript.png'
import sass from '../assets/sass.png'
import bootstrap from '../assets/bootstrap.png'
import tailwind from '../assets/tailwind.png'
import node from '../assets/node-logo.png'
import git from '../assets/git-logo.png'
import github from '../assets/github-logo.png'
import jest from '../assets/jest.png'
import figma from '../assets/figma-logo.png'

export default function Skills() {
    return (
        <section className="skills--section" id="skills">
            <div className="portfolio--container">
                <p className="section--title">Skills</p>
                <h1 className="skills--section--heading">Tech Stack</h1>
            </div>
            <div className="skills--section--container">

                <div className="skills--section--img m-1">
                    <img src={html} alt="Language Image"/>
                </div>

                <div className="skills--section--img m-1">
                    <img src={css} alt="Language Image"/>
                </div>

                <div className="skills--section--img m-1">
                    <img src={javascript} alt="Language Image"/>
                </div>

                <div className="skills--section--img m-1">
                    <img src={typescript} alt="Framework Image"/>
                </div>

                <div className="skills--section--img m-1">
                    <img src={react} alt="Framework Image"/>
                </div>

                <div className="skills--section--img m-1">
                    <img src={node} alt="Framework Image"/>
                </div>

                <div className="skills--section--img m-1">
                    <img src={php} alt="Language Image"/>
                </div>

                <div className="skills--section--img m-1">
                    <img src={python} alt="Language Image"/>
                </div>

                <div className="skills--section--img m-1">
                    <img src={sql} alt="Language Image"/>
                </div>

                <div className="skills--section--img m-1">
                    <img src={jquery} alt="Framework Image"/>
                </div>

                <div className="skills--section--img m-1">
                    <img src={bootstrap} alt="Framework Image"/>
                </div>

                <div className="skills--section--img m-1">
                    <img src={tailwind} alt="Framework Image"/>
                </div>

                <div className="skills--section--img m-1">
                    <img src={sass} alt="Framework Image"/>
                </div>

                <div className="skills--section--img m-1">
                    <img src={git} alt="Framework Image"/>
                </div>

                <div className="skills--section--img m-1">
                    <img src={github} alt="Framework Image"/>
                </div>

                <div className="skills--section--img m-1">
                    <img src={jest} alt="Framework Image"/>
                </div>

                <div className="skills--section--img m-1">
                    <img src={figma} alt="Framework Image"/>
                </div>

            </div>
        </section>
    );
}