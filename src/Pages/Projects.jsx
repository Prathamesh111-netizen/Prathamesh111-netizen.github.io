import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";

export default function Projects() {
	return (
		<Box>
			<Breadcrumbs aria-label="breadcrumb">
				<Typography underline="hover" color="inherit" href="/">
					Prathamesh Pawar
				</Typography>
				<Typography
					underline="hover"
					color="inherit"
					href="/material-ui/getting-started/installation/"
				>
					Projects
				</Typography>
				<Typography color="text.primary">Technical</Typography>
			</Breadcrumbs>
			<Stack
				direction="row"
				sx={{
					height: "100%",
					display: "flex",
					flexDirection: { xs: "column", sm: "row" },
					justifyContent: "space-evenly",
					alignItems: "center",
					my: "1rem"
				}}
			>
				<Box sx={{ mb: { xs: "1rem", sm: "0" } }}>
					<div class="card lg:card-side bg-base-100 shadow-xl">
						<figure>
							<img
								src={process.env.PUBLIC_URL + "/projects/blockchain.png"}
								width="200px"
								alt="Album"
							/>
						</figure>
						<div class="card-body">
							<h2 class="card-title">Project Zeno</h2>
							<p>Supply Chain Management & Asset Tracking </p>
							<div class="card-actions justify-end">
								<button
									class="btn btn-primary"
									onClick={() =>
										window.open(
											"https://github.com/Prathamesh111-netizen/Supply-Chain-and-Logistics-Blockchain",
											"_blank"
										)
									}
								>
									Visit Me!
								</button>
							</div>
						</div>
					</div>
				</Box>
				<Box>
					<div class="card lg:card-side bg-base-100 shadow-xl">
						<figure>
							<img
								src={process.env.PUBLIC_URL + "/projects/enron.jpg"}
								width="200px"
								alt="Album"
							/>
						</figure>
						<div class="card-body">
							<h2 class="card-title">Project Enron</h2>
							<p>Enron Case investigation for fraud detection</p>
							<div class="card-actions justify-end">
								<button class="btn btn-primary">Under Progress!</button>
							</div>
						</div>
					</div>
				</Box>
			</Stack>

			<Breadcrumbs aria-label="breadcrumb">
				<Typography underline="hover" color="inherit" href="/">
					Prathamesh Pawar
				</Typography>
				<Typography
					underline="hover"
					color="inherit"
					href="/material-ui/getting-started/installation/"
				>
					Projects
				</Typography>
				<Typography color="text.primary">Fun</Typography>
			</Breadcrumbs>
			<Stack
				divider={<Divider orientation="vertical" flexItem />}
				sx={{
					height: "100%",
					display: "flex",
					flexDirection: { xs: "column", sm: "row" },
					justifyContent: "space-evenly",
					alignItems: "center",
					my: "1rem"
				}}
			>
				<Box sx={{ mb: { xs: "1rem", sm: "0" } }}>
					<div class="card w-96 bg-base-100 shadow-xl image-full">
						<figure>
							<img
								src={process.env.PUBLIC_URL + "/projects/gameoflife.png"}
								alt="Shoes"
							/>
						</figure>
						<div class="card-body">
							<h2 class="card-title">Game of Life</h2>
							<p>Prof. John Conways 1 and 2 Dimensional cellular simutlation</p>
							<div class="card-actions justify-end">
								<button
									class="btn glass"
									onClick={() =>
										window.open(
											"https://prathamesh111-netizen.github.io/Game-of-Life-Simulation/",
											"_blank"
										)
									}
								>
									Visit Us
								</button>
							</div>
						</div>
					</div>
				</Box>
				<Box sx={{ mb: { xs: "1rem", sm: "0" } }}>
					<div class="card w-96 bg-base-100 shadow-xl image-full">
						<figure>
							<img
								src={process.env.PUBLIC_URL + "/projects/dsa.png"}
								width="150px"
								alt="Shoes"
							/>
						</figure>
						<div class="card-body">
							<h2 class="card-title">Data Structures Visualiser</h2>
							<p>Primary data structures learning Tool for universiy grads</p>
							<div class="card-actions justify-end">
								<button
									class="btn glass"
									onClick={() =>
										window.open(
											"https://prathamesh111-netizen.github.io/Data-Structures-visualizer/",
											"_blank"
										)
									}
								>
									Visit Us
								</button>
							</div>
						</div>
					</div>
				</Box>
				<Box>
					<div class="card w-96 bg-base-100 shadow-xl image-full">
						<figure>
							<img
								src={process.env.PUBLIC_URL + "/projects/nyc.jpg"}
								height="200px"
								alt="Shoes"
							/>
						</figure>
						<div class="card-body">
							<h2 class="card-title">New year!</h2>
							<p>Waiting for new year! always keep the countdown</p>
							<div class="card-actions justify-end">
								<button
									class="btn glass"
									onClick={() =>
										window.open(
											"https://prathamesh111-netizen.github.io/Project---New-Year-CountDown/",
											"_blank"
										)
									}
								>
									Visit Us
								</button>
							</div>
						</div>
					</div>
				</Box>
			</Stack>
			<Box></Box>
		</Box>
	);
}
