import { DcPage, HeroPage, MarvelPage, SearchPage } from "../pages";
import { Navbar } from "../../ui";
import { Route, Routes } from "react-router-dom";

export const HeroesRoutes = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="marvel" element={<MarvelPage />} />
				<Route path="dc" element={<DcPage />} />

				<Route path="search" element={<SearchPage />} />
				<Route path="hero" element={<HeroPage />} />
			</Routes>
		</>
	);
};
