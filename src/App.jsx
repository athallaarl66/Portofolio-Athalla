// App.jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Dashboard/Home";
import NotFound from "./pages/NotFound";
import ProjectsGallery from "./pages/Projects/ProjectGallery";
import ProjectDetail from "./pages/Projects/ProjectDetail"; // ← TAMBAH INI

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsGallery />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />{" "}
        {/* ← TAMBAH INI */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
