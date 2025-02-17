import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/Routes";
import { Button, ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <>
      <ChakraProvider>
        <Router>
          <AppRoutes />
        </Router>
      </ChakraProvider>
    </>
  );
}

export default App;
