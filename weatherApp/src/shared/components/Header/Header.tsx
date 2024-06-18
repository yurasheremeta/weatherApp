import { Box, Typography } from "@mui/material"
import useEmailStore from "feature/SignUp/hooks/useStore"
import { sxHeader } from "./Header.styles"
import { UserAvatar } from "../UserAvatar";
import { ReactElement } from "react";

export const Header = (): ReactElement => {

const email = useEmailStore(state => state.email);

    return (
        <Box sx={sxHeader}>
            <Box display={"flex"} alignItems={"center"} justifyContent={"end"}>
            <UserAvatar email={email}/>
            <Typography ml={1.5} color={"#5d3437"}>{email}</Typography>
            </Box>
        </Box>
    )
}