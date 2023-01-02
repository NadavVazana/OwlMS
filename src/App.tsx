// @ts-nocheck
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import { Header } from "./components/header";
import { RecoilRoot } from "recoil";
import routes from "./routes";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/system";

export const App = () => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Header />
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </ThemeProvider>
    </RecoilRoot>
  );
};
