import project from "../assets/placeholder2.png"

function Projects() {
    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">My Projects</h2>
            <div className="row">
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="card">
                        <img src={project} className="card-img-top" alt="projects" />
                        <h5 className="card-title">Memory Game</h5>
                        <p className="card-text">JavaScript memory game built with vanilla JS.</p>
                        <a href="#" className="btn btn-primary">View Project</a>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="card">
                        <img src={project} className="card-img-top" alt="projects" />
                        <h5 className="card-title">Another Project</h5>
                        <p className="card-text">JavaScript memory game built with vanilla JS.</p>
                        <a href="#" className="btn btn-primary">View Project</a>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="card">
                        <img src={project} className="card-img-top" alt="projects" />
                        <h5 className="card-title">Another Project</h5>
                        <p className="card-text">JavaScript memory game built with vanilla JS.</p>
                        <a href="#" className="btn btn-primary">View Project</a>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="card">
                        <img src={project} className="card-img-top" alt="projects" />
                        <h5 className="card-title">Another Project</h5>
                        <p className="card-text">JavaScript memory game built with vanilla JS.</p>
                        <a href="#" className="btn btn-primary">View Project</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;