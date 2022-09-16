import { Route, Routes } from "react-router-dom";
import { HomePage } from "./home";

export const MainRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>} />
        </Routes>
    );
}
