import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import TicketsPage from "./pages/TicketPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tickets" element={<TicketsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
