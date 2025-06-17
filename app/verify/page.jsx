import { Box, Typography } from "@mui/material";
import React from "react";

export default function Verify() {
  return (
    <Box component={"main"}>
      <Box>
        <Typography component={"h1"} variant="h3">
          Verify Email
        </Typography>
        <Typography>Your account has been successfully created.</Typography>
        <Typography>
          We have sent a verification email to your email address. Please check
          your inbox and click the link in the email to activate your account.
        </Typography>
      </Box>
    </Box>
  );
}
