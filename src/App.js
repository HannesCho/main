import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./styles";
import routes from "./routes";
import { ThemeProvider } from "styled-components";
import Home from "./screens/Home";
import Projects from "./screens/Projects";
import Blogs from "./screens/Blogs";
import Layout from "./components/Layout";

function App() {
  const theme = {
    main: "mediumseagreen",
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
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
          <Route path={routes.projects} element={<Projects />} />
          <Route path={routes.blogs} element={<Blogs />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
