import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import Home from "./screens/Home";
import Projects from "./screens/Projects";
import Layout from "./components/Layout";
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
            path={routes.projects}
            element={
              <Layout>
                <Projects />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
