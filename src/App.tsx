import TableCNES from "./components/TableCNES";
import "./App.css";
import { Box } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import PageRoutes from "./routes";

function App() {

  return (
    <BrowserRouter>
      <PageRoutes />
    </BrowserRouter>
  );
}

export default App;
