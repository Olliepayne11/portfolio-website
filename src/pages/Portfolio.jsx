import gazetteer from '../assets/Gazetteer-Screenshot.png'
import companyDirectory from '../assets/CompanyDirectory-Screenshot.png'
import communityCompass from '../assets/community-compass-screenshot.png'

export default function Portfolio() {
    return (
        <section id="portfolio" className="portfolio--section">
            <div className="portfolio--container--box">
                <div className="portfolio--container">
                    <p className="section--title">Portfolio</p>
                    <h1 className="skills--section--heading">My Projects</h1>
                </div>
                <div className="portfolio--github--div">
                    <a href="https://github.com/Olliepayne11" target="_blank"><button className="btn btn-contact">
                        Visit my github
                    </button></a>
                </div>
            </div>
            <div className="portfolio--section--container">
                <div className="portfolio--section--card">
                    <div className="portfolio--section--img">
                        <a href="https://communitycompass.net" target="_blank"><img id="communityCompass-image" className="rounded" src={communityCompass} alt="Project 3 Image"/></a>
                    </div>
                    <div className="portfolio--section--card--content">
                        <div>
                            <h3 className="portfolio--section--title">Community Compass</h3>
                            <br></br>
                            <p className="text-md"><b>The Community Compass</b> application helps people within Parish Councils in the UK to find local support (Organisations and Events), relating to a variety of needs. These include: Mental Health, Debt, Housing, Finances, Youth Work, etc.</p>
                            <br></br>
                            <p className="text-md">The tech stack I utilised for this application:</p>
                            <ul id="projectList" className="text-md">
                                <li id="projectListItem"><b>P</b>ostgreSQL</li>
                                <li id="projectListItem"><b>E</b>xpress</li>
                                <li id="projectListItem"><b>R</b>eact</li>
                                <li id="projectListItem"><b>N</b>ode</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="portfolio--section--card">
                    <div className="portfolio--section--img">
                        <a href="https://gazetteer.oliverrpayne.co.uk/" target="_blank"><img id="gazetteer-image" className="rounded" src={gazetteer} alt="Project 1 Image"/></a>
                    </div>
                    <div className="portfolio--section--card--content">
                        <div>
                            <h3 className="portfolio--section--title">Gazetteer</h3>
                            <br></br>
                            <p className="text-md"><b>Gazetteer</b> is a web app designed to work across mobile & desktop devices.
                                                     The app allows users to choose any country, to discover relevant information, such as: <b>Weather Forecast, Local News, Population, Capital City, Airports, Earthquakes etc. </b></p><br></br>
                            <p className="text-md">The tech stack I utilised for this application:</p>
                            <ul id="projectList" className="text-md">
                                <li id="projectListItem"><b>HTML & CSS (Bootstrap 5 Framework)</b></li>
                                <li id="projectListItem"><b>Javascript (AJAX, jQuery, Leafletjs)</b></li>
                                <li id="projectListItem"><b>PHP</b></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="portfolio--section--card">
                    <div className="portfolio--section--img">
                        <a href="https://companydirectory.oliverrpayne.co.uk/" target="_blank"><img id="companyPortfolio-image" className="rounded" src={companyDirectory} alt="Project 2 Image"/></a>
                    </div>
                    <div className="portfolio--section--card--content">
                        <div>
                            <h3 className="portfolio--section--title">Company Directory</h3>
                            <br></br>
                            <p className="text-md"><b>Company Directory</b> is an application designed to allow users to manipulate a database, following the rules of CRUD operations.
                                                      Information is displayed in the form of modals, to which the user can add, update, filter or remove data.</p>
                            <br></br>
                            <p className="text-md">The tech stack I utilised for this application:</p>
                            <ul id="projectList" className="text-md">
                                <li id="projectListItem"><b>HTML & CSS (Bootstrap 5 Framework)</b></li>
                                <li id="projectListItem"><b>Javascript (AJAX, jQuery)</b></li>
                                <li id="projectListItem"><b>PHP</b></li>
                                <li id="projectListItem"><b>SQL</b></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}