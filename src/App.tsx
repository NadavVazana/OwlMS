// @ts-nocheck
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import { Header } from "./components/header/header";
import { RecoilRoot } from "recoil";
import routes from "./routes";
import { Route, Routes } from "react-router-dom";
import Box from "@mui/material/Box";
import { AppWrapper } from "./components/app-wrapper";

export const App = () => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <AppWrapper />
        <Box
          sx={{
            height: "100vh",
            backgroundColor: "custom.background",
          }}
        >
          <Header />
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </Box>
      </ThemeProvider>
    </RecoilRoot>
  );
};
