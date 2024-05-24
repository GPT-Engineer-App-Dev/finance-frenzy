import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import News from "./pages/News.jsx";
import Markets from "./pages/Markets.jsx";
import Opinion from "./pages/Opinion.jsx";
import More from "./pages/More.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/news" element={<News />} />
        <Route exact path="/markets" element={<Markets />} />
        <Route exact path="/opinion" element={<Opinion />} />
        <Route exact path="/more" element={<More />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;