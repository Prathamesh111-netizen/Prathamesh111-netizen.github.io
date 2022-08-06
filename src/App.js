import "./App.css";
import "./index.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import HomePage from "./Pages/Home";
import ExperiencesPage from "./Pages/Experiences";
import SkillsPage from "./Pages/Skills";
import ProjectsPage from "./Pages/Projects";
import HackathonsPage from "./Pages/Hackathons";
import BlogsPage from "./Pages/Blog";
import NotFoundPage from "./Pages/404";
import CommonModule from "./Pages/CommonModule";

function App() {
	const theme = createTheme({
		breakpoints: {
			values: {
				xs: 0,
				sm: 700,
				md: 900,
				lg: 1200,
				xl: 1536
			}
		},
		tr: {
			background: "#f1f1f1",
			"&:hover": {
				background: "#f00"
			}
		}
	});

	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<Routes>
					<Route path="" element={<CommonModule />}>
						<Route path="experiences" element={<ExperiencesPage />} />
						<Route path="skills" element={<SkillsPage />} />
						<Route path="projects" element={<ProjectsPage />} />
						<Route path="hackathons" element={<HackathonsPage />} />
						<Route path="blogs" element={<BlogsPage />} />
						<Route path="" element={<HomePage />} />
						<Route path="*" element={<NotFoundPage />} />
					</Route>
				</Routes>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
