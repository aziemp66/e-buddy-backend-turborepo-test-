"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Box, Button, Typography } from "@mui/material";

const HomePage = () => {
  const router = useRouter();

  const navigateToUserPage = () => {
    router.push("/user"); // Navigate to the User Page
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        gap: 2,
      }}
    >
      <Typography color="primary" variant="h2" component="h1">
        Welcome to E-Buddy
      </Typography>
      <Typography color="secondary" variant="body1" sx={{ marginBottom: 4 }}>
        Manage your account seamlessly with E-Buddy!
      </Typography>
      <Button variant="contained" size="large" onClick={navigateToUserPage}>
        Go to User Page
      </Button>
    </Box>
  );
};

export default HomePage;
