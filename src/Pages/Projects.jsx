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
					// flexDirection: { xs: "column", sm: "row" },
					flexWrap: "wrap",
					justifyContent: "space-evenly",
					alignItems: "center",
					mt: "1rem",
					mb: "2rem"
				}}
			>
				<Box>
					<div class="card lg:card-side bg-base-100 shadow-xl">
						<figure>
							<img src="https://placeimg.com/250/200/arch" alt="Album" />
						</figure>
						<div class="card-body">
							<h2 class="card-title">New album is released!</h2>
							<p>Click the button to listen on Spotiwhy app.</p>
							<div class="card-actions justify-end">
								<button class="btn btn-primary">Visit Me!</button>
							</div>
						</div>
					</div>
				</Box>
				<Box>
					<div class="card lg:card-side bg-base-100 shadow-xl">
						<figure>
							<img src="https://placeimg.com/250/200/arch" alt="Album" />
						</figure>
						<div class="card-body">
							<h2 class="card-title">New album is released!</h2>
							<p>Click the button to listen on Spotiwhy app.</p>
							<div class="card-actions justify-end">
								<button class="btn btn-primary">Visit Me!</button>
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
				direction="row"
				divider={<Divider orientation="vertical" flexItem />}
				spacing={4}
				sx={{ mt: "1rem" }}
			>
				<Box sx={{ ml: "2rem" }}>
					<div class="card w-96 bg-base-100 shadow-xl image-full">
						<figure>
							<img src="https://placeimg.com/400/225/arch" alt="Shoes" />
						</figure>
						<div class="card-body">
							<h2 class="card-title">Shoes!</h2>
							<p>If a dog chews shoes whose shoes does he choose?</p>
							<div class="card-actions justify-end">
								<button class="btn glass">Glass button</button>
							</div>
						</div>
					</div>
				</Box>
				<Box sx={{ ml: "2rem" }}>
					<div class="card w-96 bg-base-100 shadow-xl image-full">
						<figure>
							<img src="https://placeimg.com/400/225/arch" alt="Shoes" />
						</figure>
						<div class="card-body">
							<h2 class="card-title">Shoes!</h2>
							<p>If a dog chews shoes whose shoes does he choose?</p>
							<div class="card-actions justify-end">
								<button class="btn glass">Glass button</button>
							</div>
						</div>
					</div>
				</Box>
				<Box sx={{ ml: "2rem" }}>
					<div class="card w-96 bg-base-100 shadow-xl image-full">
						<figure>
							<img src="https://placeimg.com/400/225/arch" alt="Shoes" />
						</figure>
						<div class="card-body">
							<h2 class="card-title">Shoes!</h2>
							<p>If a dog chews shoes whose shoes does he choose?</p>
							<div class="card-actions justify-end">
								<button class="btn glass">Glass button</button>
							</div>
						</div>
					</div>
				</Box>
			</Stack>
			<Box></Box>
		</Box>
	);
}
