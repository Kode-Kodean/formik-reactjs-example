import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

import customTheme from "./theme.js";
import { cssResetConfig } from "./utils/chakra-ui";

import Login from "./pages/login";
import Register from "./pages/register";

function App() {
  return (
    <Router>
      <ThemeProvider theme={customTheme}>
        <CSSReset config={cssResetConfig} />
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/" component={Login} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
