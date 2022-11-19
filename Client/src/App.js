import Header from "./Components/Pages/Header";
import Sidebar from "./Components/Pages/Sidebar";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from "./Components/Dashboard/Dashboard";
import Projects from "./Components/Projects/Projects";
import Team from "./Components/Teams/Teams";


// col col-2 bg-white shadow-sm p-3 bg-body
function App() {
  return (
    <BrowserRouter>
      <div className="App px-3">
        <div id="row" className="row">
          <div id="Sidebar" className="col-md-2 sidebar bg-body shadow-sm h-100">
            <div className="Sidebar">
              <Sidebar />
             </div>
          </div>
          <div className="col">
            <div className="Header">
              <Header />
            </div>

            <div className="Content">
              <Routes>
                <Route exact path="/" element={<Dashboard />} />
                <Route exact path="/Projects" element={<Projects />} />
                <Route exact path="/Teams" element ={<Team />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
