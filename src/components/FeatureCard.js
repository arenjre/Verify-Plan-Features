import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Modal, Box, Button } from "@mui/material";

const FeatureCard = ({ FeatureComponent, featureName, hasAccess }) => {
  const [open, setOpen] = useState(false);


  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(false);
  };

  
  return (
    <>
      <Card
        sx={{
          width: 300,
          height: 200,
          textAlign: "center",
          m: 2,
          filter: hasAccess ? "none" : "blur(3px)",
          cursor: hasAccess ? "pointer" : "not-allowed",
        }}
        onClick={() => {
          if (!hasAccess) {
            setOpen(true);
          }
        }}
      >
        <CardContent>
          {hasAccess ? <FeatureComponent /> : <Typography variant="h6">{featureName}</Typography>}
        </CardContent>
      </Card>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,
            bgcolor: "white",
            p: 4,
            textAlign: "center",
            boxShadow: 24,
          }}
        >
          <Typography variant="h6">Upgrade Plan</Typography>
          <Typography variant="body1">Get access to {featureName} by upgrading your plan.</Typography>
          <Button
            variant="contained"
            sx={{ mt: 2 }}
            onClick={() => {
              handleClose();
            }}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default FeatureCard;
