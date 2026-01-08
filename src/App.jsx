import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import PageNotFound from "./pages/404";

import "./style.css";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />

            <Route path="*" element={<PageNotFound/>} />
        </Routes>
    )
}