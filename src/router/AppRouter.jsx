import { HeroesRoutes } from "../heroes";
import { LoginPage } from "../auth/pages";
import { Route, Routes } from "react-router-dom";

export const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route path="login" element={<LoginPage />} />
				<Route path="/*" element={<HeroesRoutes />} />
			</Routes>
		</>
	);
};
