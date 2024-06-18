import useEmailStore from "feature/SignUp/hooks/useStore";
import { Navigate } from "react-router-dom";
import { IPrivateRouteProps } from "./PrivateRoute.model";
import { ReactElement } from "react";

export const PrivateRoute = ({ children }: IPrivateRouteProps): ReactElement => {
    const { email } = useEmailStore();

    if (!email) return <Navigate to={"/sign-up"} />;

    return children;
};