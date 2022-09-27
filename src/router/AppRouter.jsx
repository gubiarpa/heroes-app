import { Route, Routes } from "react-router-dom";

import { DcPage } from "../heroes/pages/DcPage";
import { LoginPage } from "../auth/pages/LoginPage";
import { MarvelPage } from "../heroes/pages/MarvelPage";
import { Navbar } from "../ui";

export const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="marvel" element={<MarvelPage />} />
                <Route path="dc" element={<DcPage />} />

                <Route path="login" element={<LoginPage />} />
            </Routes>
        </>
    )
}