import slime from "../Images/slime.jpg"
import happy from "../Images/happy.png"
import anya from "../Images/anya.jpg"

const Projects = () => {
    return ( 
        <div className="bg-body shadow-sm p-3">
            <div className="row">
                <div className="col col-5 mt-1"><h2 id="title">Projects</h2></div>
                <div className="col col-5 text-end"><input type="text" className="form-control" placeholder="Search for a project" /></div>
                <div className="col text-end"><button className="btn btn-warning text-white p-2">Add Project</button></div>
            </div>
            <hr />
            <div className="content">

                <div className="row">
                    <div className="col col-4">
                        <div className="card p-2">
                            {/* Titles and menu Icon  */}
                            <div className="row">
                                <div className="col text-start">
                                    <label className="text-secondary"><i>Ui Design</i></label>
                                </div>
                                <div className="col text-end">
                                 <div class="dropdown">
                                      <label class="text-secondary mx-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="bi bi-three-dots-vertical"></i>
                                      </label>
                                      <ul class="dropdown-menu">
                                            <li><button class="dropdown-item" type="button"> View</button></li>
                                            <li><button class="dropdown-item" type="button"> Edit</button></li>
                                            <li><button class="dropdown-item" type="button"> Delete</button></li>
                                      </ul>
                                    </div>
                                </div>
                            </div>
                                <h3 className="text-warning">Design Mockup</h3> 
                            {/* Images or/ Descrption */}
                            <p className="text-secondary py-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Quis repellat eligendi, aliquam tenetur et vel...
                            </p>

                            <div className="row">
                                <div className="col col-4 text-start">
                                    
                                    <div class="dropdown">
                                      <button class="btn text-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        3 Users
                                      </button>
                                      <ul class="dropdown-menu">
                                        <li><button class="dropdown-item" type="button"><img src={slime} id="user" className="mb-1 img-fluid rounded-circle" /> Limule</button></li>
                                        <li><button class="dropdown-item" type="button"><img src={anya} id="user" className="mb-1 img-fluid rounded-circle" /> Anya Forger </button></li>
                                        <li><button class="dropdown-item" type="button"><img src={happy} id="user" className="mb-1 img-fluid rounded-circle" /> Happy </button></li>
                                      </ul>
                                    </div>
                                </div>

                                <div className="col col-8 text-end mt-1">
                                    <small className="mx-2 text-secondary"><i class="bi bi-file-earmark-text"></i> 4</small>
                                    <small className="mx-2 text-secondary"><i class="bi bi-chat-text"></i> 6</small>
                                    <small className="mx-2 text-danger"><i class="bi bi-hourglass-split"></i> 3 days left</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
     );
}
 
export default Projects;

{/* <div className="col col-3"><img src={slime} id="user" className="mb-1 img-fluid rounded-circle" /></div>
<div className="col col-3"><img src={happy} id="user" className="mb-1 img-fluid rounded-circle"/></div> / */}
