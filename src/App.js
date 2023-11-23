import { BrowserRouter as Router } from "react-router-dom";
import MyRoutes from "./setup/routes/myRoutes";
import "./App.css";

function App() {
  return (
    <Router>
      <MyRoutes />
    </Router>
  );
}

export default App;
