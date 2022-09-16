import { BrowserRouter } from 'react-router-dom';
import { MainRouter } from './main-router';
import { ThemeContext } from 'baseui/styles/theme-provider';
import { ThemeValues } from './theme-values';

export const App = () => {
    return <>
    <ThemeContext.Provider value={ThemeValues}>
        <BrowserRouter>
            <MainRouter />
        </BrowserRouter>
    </ThemeContext.Provider>
    </>
}
