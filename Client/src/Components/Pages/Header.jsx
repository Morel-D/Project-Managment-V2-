import shoto from "../Images/shoto.jpg"

const Header = () => {
    return ( 
        <div className="Header text-end p-3">
            <div className="profile-view">
                <div class="dropdown-center">
                    <button id="pro-btn" className="col-3  text-end btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" type="button">
                    <label htmlFor="btn" > <img id="profile-img" src={shoto} className="img-fluid rounded-circle" /> <b id="text">Shoto Todoroki </b> </label> 
                    </button>
                    <ul class="dropdown-menu">
                       <li><a class="dropdown-item text-secondary" href="#"><i class="bi bi-person"></i> View Profile</a></li>
                       <li><a class="dropdown-item text-secondary" href="#"><i class="bi bi-unlock"></i> Logout</a></li>
                       <li><a class="dropdown-item text-secondary" href="#"><i class="bi bi-gear"></i> Setting</a></li>
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default Header;

{/* <label htmlFor="btn" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" type="button"> <img id="profile-img" src={shoto} className="img-fluid rounded-circle" /> <b id="text">Shoto Todoroki </b> </label>     */}

{/* <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
Dropdown button
</button> */}