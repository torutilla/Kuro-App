import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage.tsx";
import Home from "./pages/Home.tsx";
import SignupPage from "./pages/SignupPage.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
