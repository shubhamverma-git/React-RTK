import "./App.css";
import { NavLink } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <h1>HII</h1>
      <NavLink
        to="/messages"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Messages
      </NavLink>
      ;
    </div>
  );
}

export default App;
