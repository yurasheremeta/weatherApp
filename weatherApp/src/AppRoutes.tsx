import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { SignUp } from "./pages/signUp/SignUp";
import { DashboardPage } from "./pages/dashboard/DashboardPage";
import { PrivateRoute } from "shared/components/PrivateRoute/PrivateRoute";

const routes = createRoutesFromElements([
  <Route>
    <Route element={<SignUp />} path="/sign-up" />
    <Route
      element={
        <PrivateRoute>
          <DashboardPage />
        </PrivateRoute>
      }
      path="/dashboard"
    />
  </Route>,
]);

const router = createBrowserRouter(routes);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
