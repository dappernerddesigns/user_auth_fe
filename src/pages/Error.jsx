import { Box, Typography } from "@mui/material";

export const Error = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h1">404</Typography>
      <Typography variant="body1">There's nothing here I'm afraid</Typography>
    </Box>
  );
};
