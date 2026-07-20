import html from '../assets/html5.png'
import css from '../assets/css3.png'
import javascript from '../assets/javascript.png'
import php from '../assets/php.png'
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
import express from '../assets/express.png'
import postgresql from '../assets/postgresql.png'
import mysql from '../assets/mysql.png'
import mongodb from '../assets/mongodb.png'
import supabase from '../assets/supabase.png'
import stripe from '../assets/stripe.png'
import render from '../assets/render.png'

export default function Skills() {
    return (
        <section className="skills--section" id="skills">
            <div className="portfolio--container">
                <p className="section--title">Skills</p>
                <h1 className="skills--section--heading">Tech Stack</h1>
            </div>
            <div className="skills--section--container">

                <div className="skills--section--img m-1">
                    <img src={react} alt="Skills Image"/>
                </div>

                <div className="skills--section--img m-1">
                    <img src={typescript} alt="Skills Image"/>
                </div>

                <div className="skills--section--img m-1">
                    <img src={javascript} alt="Skills Image"/>
                </div>

                <div className="skills--section--img m-1">
                    <img src={html} alt="Skills Image"/>
                </div>

                <div className="skills--section--img m-1">
                    <img src={css} alt="Skills Image"/>
                </div>

                <div className="skills--section--img m-1">
                    <img src={sass} alt="Skills Image"/>
                </div>

                <div className="skills--section--img m-1">
                    <img src={jquery} alt="Skills Image"/>
                </div>

                <div className="skills--section--img m-1">
                    <img src={tailwind} alt="Skills Image"/>
                </div>

                <div className="skills--section--img m-1">
                    <img src={bootstrap} alt="Skills Image"/>
                </div>

                <div className="skills--section--img m-1">
                    <img src={jest} alt="Skills Image"/>
                </div>

                <div className="skills--section--img m-1">
                    <img src={node} alt="Skills Image"/>
                </div>

                <div className="skills--section--img m-1">
                    <img src={express} alt="Skills Image"/>
                </div>

                <div className="skills--section--img m-1">
                    <img src={php} alt="Skills Image"/>
                </div>

                <div className="skills--section--img m-1">
                    <img src={postgresql} alt="Skills Image"/>
                </div>

                <div className="skills--section--img m-1">
                    <img src={mysql} alt="Skills Image"/>
                </div>

                <div className="skills--section--img m-1">
                    <img src={mongodb} alt="Skills Image"/>
                </div>

                <div className="skills--section--img m-1">
                    <img src={git} alt="Skills Image"/>
                </div>

                <div className="skills--section--img m-1">
                    <img src={github} alt="Skills Image"/>
                </div>

                <div className="skills--section--img m-1">
                    <img src={figma} alt="Skills Image"/>
                </div>

                <div className="skills--section--img m-1">
                    <img src={supabase} alt="Skills Image"/>
                </div>

                <div className="skills--section--img m-1">
                    <img src={stripe} alt="Skills Image"/>
                </div>

                <div className="skills--section--img m-1">
                    <img src={render} alt="Skills Image"/>
                </div>

            </div>
        </section>
    );
}