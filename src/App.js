import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./styles";
import routes from "./routes";
import { ThemeProvider } from "styled-components";
import Home from "./screens/Home";
import Projects from "./screens/Projects";
import Blogs from "./screens/Blogs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={routes.projects} element={<Projects />} />
        <Route path={routes.blogs} element={<Blogs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
