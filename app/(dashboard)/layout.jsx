import { Box, Container, Stack, Typography } from "@mui/material";
import Navbar from "../components/navbar";
export const metadata = {
  title: "Dashboard",
  description: "Dashboard app",
};

export default function DashBoardLayout({ children }) {
  return (
    <>
      <Container maxWidth={"lg"} sx={{ minHeight: "100vh" }}>
        <Box component={"main"}>
          <Navbar />
          {children}
        </Box>
      </Container>
      <footer className="py-3 bg-gray-700 text-white text-center">
        <Container maxWidth={"lg"}>
          <Typography>© 2025 Copyright: Hello</Typography>
        </Container>
      </footer>
    </>
  );
}
