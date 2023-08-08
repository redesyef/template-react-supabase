import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./utils/ProtectedRoute";
import { protectedRoutes } from "./routes/ProtectedRoutes";
import DemoHome from "./components/DemoHome";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<DemoHome />} />
          <Route element={<ProtectedRoute />}>
            {protectedRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
