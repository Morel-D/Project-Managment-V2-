import { useEffect } from "react";
import { useState } from "react";
import { json } from "react-router-dom";
import Content from "./Content";


const Projects = () => {

    const [records, setRecords] = useState(null);

    useEffect(() => {

        fetch('/Project')
            .then((resource) => {
                if (!resource.ok)
                {
                    throw Error('Something is wrong for sure')
                }
                return resource.json()
            }).then((data) => {
                setRecords(data)
        })

    }, [])


    return ( 
        <div className="bg-body shadow-sm p-3">
            <div className="row">
                <div className="col col-5 mt-1"><h2 id="title">Projects</h2></div>
                <div className="col col-5 text-end"><input type="text" className="form-control" placeholder="Search for a project" /></div>
                <div className="col text-end"><button className="btn btn-warning text-white p-2">Add Project</button></div>
            </div>
            <hr />
            <div className="content">
                {records && records.map((record) => ( <Content key={record._id} record={record} /> ) )  }
            </div>
        </div>
     );
}
 
export default Projects;

{/* <div className="col col-3"><img src={slime} id="user" className="mb-1 img-fluid rounded-circle" /></div>
<div className="col col-3"><img src={happy} id="user" className="mb-1 img-fluid rounded-circle"/></div> / */}
