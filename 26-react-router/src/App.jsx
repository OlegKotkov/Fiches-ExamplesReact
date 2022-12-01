import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import MainLayout from "./layouts/MainLayout";
import Courses from "./components/Courses";
import SinglCourses from "./components/SinglCourses";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index={true} element={<Home />}></Route>
            <Route
              path="about"
              element={<About />}
              style={({ isActive }) => (isActive ? { color: "green" } : {})}
            ></Route>
            <Route path="contacts" element={<Contact />}></Route>
            <Route path="courses" element={<Courses />} />
            <Route path="courses/:slug" element={<SinglCourses />} />
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
