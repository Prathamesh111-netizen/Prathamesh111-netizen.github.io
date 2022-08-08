import React from "react";
import { Box } from "@mui/material";

export default function HomePage() {
	return (
		<React.Fragment>
			<div class="hero">
				<div class="hero-content flex-col lg:flex-row-reverse">
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-evenly",
							flexDirection: { xs: "column", sm: "row" }
						}}
					>
						<div>
							<h1 class="text-5xl font-bold">I'm Prathamesh!</h1>
							<p class="py-6">
								I'm not sure what it is yet, but something about life seems
								really interesting.
							</p>
							{/* <button class="btn btn-primary">Get Started</button> */}
						</div>
						<img
							src={process.env.PUBLIC_URL + "/myphoto.png"}
							alt="Me"
							class="max-w-sm rounded-lg"
						/>
					</Box>
				</div>
			</div>
		</React.Fragment>
	);
}
