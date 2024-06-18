import { Avatar, Box } from "@mui/material"
import { IAvatarProps } from "./UserAvatar.model"
import { ReactElement, useMemo } from "react"

export const UserAvatar = ({ email }: IAvatarProps) : ReactElement  => {
    const initials = useMemo(() => {
        return email.charAt(0).toUpperCase();
    },[email])

    return (
        <Box>
            <Avatar>
                {initials}
            </Avatar>
        </Box>
    )
}