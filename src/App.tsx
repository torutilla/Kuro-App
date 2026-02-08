import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage.tsx";
import Home from "./pages/Home.tsx";
import SignupPage from "./pages/SignupPage.tsx";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
}

export default App;
