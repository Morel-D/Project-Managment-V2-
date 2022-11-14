const Sidebar = () => {
    return ( 
        <div className="Navsidebar">
             <h4 className="my-4">CHRONOS</h4>
            <ul className="list d-grid gap-4">
                <li className="list-group-item text-secondary"><small className="p-3"><i className="bi bi-columns-gap text-secondary"></i> Dashboard</small></li>
                <li className="list-group-item text-secondary"><small className="p-3"><i className="bi bi-folder2-open text-secondary"></i> Project</small></li>
                <li className="list-group-item text-secondary"><small className="p-3"><i className="bi bi-calendar-event text-secondary"></i> Calendar</small></li>
                <li className="list-group-item text-secondary"><small className="p-3"><i className="bi bi-people text-secondary"></i> Team members</small></li>
            </ul>
        </div>
     );
}
 
export default Sidebar;