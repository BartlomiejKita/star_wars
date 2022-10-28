import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Navigation from "./pages/Navigation/Navigation";
import NotFound from "./pages/NotFound";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const FavoritePage = React.lazy(() => import("./pages/FavoritePage"));

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter basename="/star_wars/">
				<Routes>
					<Route path="/" element={<Navigation />}>
						<Route index element={<HomePage />} />
						<Route path="favorite" element={<FavoritePage />} />
					</Route>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);
