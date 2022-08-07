import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export default function HomePage() {
	return (
		<React.Fragment>
			<div class="hero">
				<div class="hero-content flex-col lg:flex-row-reverse">
					<img
						src={process.env.PUBLIC_URL + "/myphoto.png"}
						alt="Me"
						class="max-w-sm rounded-lg"
					/>
					<div>
						<h1 class="text-5xl font-bold">I'm Prathamesh!</h1>
						<p class="py-6">
							I'm not sure what it is yet, but something about life seems really
							interesting.
						</p>
						<button class="btn btn-primary">Get Started</button>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
