import React, { useState, useEffect } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import FeatureCard from "./FeatureCard";
import featureData from "../data/features.json";

const FeaturePage = ({ features }) => {
  const [featureAccess, setFeatureAccess] = useState([]);

  useEffect(() => {
    setFeatureAccess(featureData.access);
  }, []);

  return (
    <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", mt: 4 }}>
      {features.map(({ Component, name }) => (
        <FeatureCard
          key={name}
          FeatureComponent={Component}
          featureName={name}
          hasAccess={featureAccess.includes(name)}
        />
      ))}
    </Box>
  );
};

export default FeaturePage;
