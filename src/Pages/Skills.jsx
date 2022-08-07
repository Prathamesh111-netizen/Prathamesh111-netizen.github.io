import React from "react";
import Divider from "@mui/material/Divider";
import Stats from "../Components/Stats.js";
import SkillsSection from "../Components/SkillsSection.js";

export default function SkillsPage() {
	return (
		<React.Fragment>
			<Stats />
			<Divider sx={{ my: "2rem" }} />
			<SkillsSection />
		</React.Fragment>
	);
}
