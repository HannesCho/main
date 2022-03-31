import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { GlobalStyles } from "./styles";
import routes from "./routes";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import Home from "./screens/Home";
import Projects from "./screens/Projects";
import Blogs from "./screens/Blogs";
import Layout from "./components/Layout";
import About from "./screens/About";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
    >
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path={routes.about}
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route
            path={routes.projects}
            element={
              <Layout>
                <Projects />
              </Layout>
            }
          />
          <Route
            path={routes.blogs}
            element={
              <Layout>
                <Blogs />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
