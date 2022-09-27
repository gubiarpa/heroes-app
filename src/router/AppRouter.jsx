import { DcPage, MarvelPage } from "../heroes";
import { Route, Routes } from "react-router-dom";

import { LoginPage } from "../auth";
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
	);
};
