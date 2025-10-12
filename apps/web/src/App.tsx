import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import TicketsPage from "./pages/TicketPage";
import OfficerPage from "./pages/OfficerPage";
import ManagerPage from "./pages/ManagerPage";
import AdministratorPage from "./pages/AdministratorPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tickets" element={<TicketsPage />} />
        <Route path="/officer" element={<OfficerPage />} />
        <Route path="/manager" element={<ManagerPage />} />
        <Route path="/administrator" element={<AdministratorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
