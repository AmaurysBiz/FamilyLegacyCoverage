import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import FinalExpenseInfo from "./pages/FinalExpenseInfo";
import AffordableBurialKY from "./pages/AffordableBurialKY";
import IssueComparison from "./pages/IssueComparison";
import SeniorMistakes from "./pages/SeniorMistakes";
import HealthConditions from "./pages/HealthConditions";
import AvoidScams from "./pages/AvoidScams";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";
import Terms from "./pages/Terms";
import Disclaimer from "./pages/Disclaimer";


// Layout
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Main */}
        <Route path="/" element={<Home />} />

        {/* Blog Pages */}
        <Route path="/final-expense-info" element={<FinalExpenseInfo />} />
        <Route path="/affordable-burial-ky" element={<AffordableBurialKY />} />
        <Route path="/issue-comparison" element={<IssueComparison />} />
        <Route path="/senior-mistakes" element={<SeniorMistakes />} />
        <Route path="/health-conditions" element={<HealthConditions />} />
        <Route path="/avoid-scams" element={<AvoidScams />} />
        <Route path="/disclaimer" element={<Disclaimer />} />


        {/* Legal Pages */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />

        {/* 404 fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
