import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import FeaturePage from "./components/FeaturePage";
import Feature1 from "./features/Feature1";
import Feature2 from "./features/Feature2";
import Feature3 from "./features/Feature3";
import Feature4 from "./features/Feature4";
import Feature5 from "./features/Feature5";
import Feature6 from "./features/Feature6";

const App = () => {
  return (
    <Router>
      <Box sx={{ textAlign: "center", mt: 2 }}>
        <Button component={Link} to="/feature1" variant="contained" sx={{ m: 1 }}>Feature 1</Button>
        <Button component={Link} to="/feature2-3" variant="contained" sx={{ m: 1 }}>Features 2 & 3</Button>
        <Button component={Link} to="/feature4-5-6" variant="contained" sx={{ m: 1 }}>Features 4, 5 & 6</Button>
      </Box>
      <Routes>
        <Route path="/feature1" element={<FeaturePage features={[{ Component: Feature1, name: "feature1" }]} />} />
        <Route path="/feature2-3" element={<FeaturePage features={[{ Component: Feature2, name: "feature2" }, { Component: Feature3, name: "feature3" }]} />} />
        <Route path="/feature4-5-6" element={<FeaturePage features={[{ Component: Feature4, name: "feature4" }, { Component: Feature5, name: "feature5" }, { Component: Feature6, name: "feature6" }]} />} />
      </Routes>
    </Router>
  );
};

export default App;
