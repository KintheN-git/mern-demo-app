import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.50", "gray.900")}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  );
};

export default App;
