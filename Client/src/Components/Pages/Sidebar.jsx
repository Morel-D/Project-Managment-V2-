import { Link } from "react-router-dom";

const Sidebar = () => {
    return ( 
        <div className="Navsidebar">
             <h4 className="my-4">CHRONOS</h4>
            <ul className="list d-grid gap-4">
                <li className="list-group-item"><small className="p-3"><Link id="link" to="/" className="text-secondary"><i className="bi bi-columns-gap"></i> Dashboard</Link></small></li>
                <li className="list-group-item"><small className="p-3"><Link id="link" to="/Projects" className="text-secondary"><i className="bi bi-folder2-open"></i> Project</Link></small></li>
                <li className="list-group-item text-secondary"><small className="p-3"><i className="bi bi-calendar-event text-secondary"></i> Calendar</small></li>
                <li className="list-group-item"><small className="p-3"><Link id="link" to="/Teams" className="text-secondary"><i className="bi bi-people"></i> Team members</Link></small></li>
            </ul>
        </div>
     );
}
 
export default Sidebar;