import { Breakpoint, useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

export enum Breakpoints {
    lg = "lg",
    md = "md",
    sm = "sm",
    xl = "xl",
    xs = "xs",
}

export function useScreen(breakpoint: Breakpoint = Breakpoints.md): boolean {
    const theme = useTheme();

    return useMediaQuery(theme.breakpoints.up(breakpoint));
}
