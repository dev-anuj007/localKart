import { useContext } from "react";
import { ThemeContext } from "baseui/styles/theme-provider";
import { HeaderNavbar } from "../common/components/Header";

export const HomePage = () => {
    const theme = useContext(ThemeContext);
    return <><HeaderNavbar/></>
}
