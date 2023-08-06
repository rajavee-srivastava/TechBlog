import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Test from './pages/Test';
// import About from "./pages/About";
// import Blogs from "./pages/Blogs";
import BlogPost from "./components/BlogPost";
// import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />}></Route>
        <Route exact path="/test" element={<Test />}></Route>
        {/* <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/blog" element={<Blogs />}></Route> */}
        <Route exact path="/blog/:post_id" element={<BlogPost />}></Route>
        {/* <Route exact path="/projects" element={<Projects />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
