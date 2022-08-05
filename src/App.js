import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/Home";
import ExperiencesPage from "./Pages/Experiences";
import SkillsPage from "./Pages/Skills";
import ProjectsPage from "./Pages/Projects";
import HackathonsPage from "./Pages/Hackathons";
import BlogsPage from "./Pages/Blog";
import NotFoundPage from "./Pages/404";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<HomePage />} />
				<Route path="experiences" element={<ExperiencesPage />} />
				<Route path="skills" element={<SkillsPage />} />
				<Route path="projects" element={<ProjectsPage />} />
				<Route path="hackathons" element={<HackathonsPage />} />
				<Route path="blogs" element={<BlogsPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
