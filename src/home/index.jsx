import { useContext } from "react";
import { ThemeContext } from "baseui/styles/theme-provider";

export const HomePage = () => {
    const theme = useContext(ThemeContext);
    return <div height={theme.sizing.spacingMedium}>"HomePage"</div>
}
