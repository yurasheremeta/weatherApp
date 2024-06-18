import Box from "@mui/material/Box";
import { Dashboard } from "../../feature/Dashboard/components";
import { Header } from "shared/components/Header";

export const DashboardPage = () => {
  return (
    <Box>
       <Header/>
      <Dashboard />
    </Box>
  );
};
