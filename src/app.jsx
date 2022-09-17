import { BrowserRouter } from 'react-router-dom';
import { MainRouter } from './main-router';
import { ThemeContext } from 'baseui/styles/theme-provider';
import { ThemeValues } from './theme-values';
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import {BaseProvider} from 'baseui';

export const App = () => {
    const engine = new Styletron();

    return <>
    <ThemeContext.Provider value={ThemeValues}>
        <StyletronProvider value={engine}>
                <BrowserRouter>
                    <MainRouter />
                </BrowserRouter>
        </StyletronProvider>
    </ThemeContext.Provider>
    </>
}
