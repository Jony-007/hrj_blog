import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { Dashboard } from "./pages/Dashboard";
import { Projects } from "./pages/Projects";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sing-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />

        <Route
          path="*"
          element={
            <div className="flex justify-center items-center text-6xl font-bold text-center h-auto">
              <h1>NO PAGE</h1>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
