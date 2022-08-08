import React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function srcset(image, size, rows = 1, cols = 1) {
	return {
		src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
		srcSet: `${image}?w=${size * cols}&h=${
			size * rows
		}&fit=crop&auto=format&dpr=2 2x`
	};
}

function QuiltedImageList() {
	return (
		<ImageList sx={{ width: 800 }} variant="quilted" cols={4} rowHeight={121}>
			{itemData.map((item) => (
				<ImageListItem
					key={item.img}
					cols={item.cols || 1}
					rows={item.rows || 1}
				>
					<img
						{...srcset(item.img, 121, item.rows, item.cols)}
						alt={item.title}
						loading="lazy"
					/>
				</ImageListItem>
			))}
		</ImageList>
	);
}

const itemData = [
	{
		img: process.env.PUBLIC_URL + "/cfg/team.png",
		title: "Breakfast",
		rows: 2,
		cols: 2
	},
	{
		img: process.env.PUBLIC_URL + "/cfg/trans.png",
		title: "Burger"
	},
	{
		img: process.env.PUBLIC_URL + "/cfg/win.jpg",
		title: "Camera"
	},
	{
		img: process.env.PUBLIC_URL + "/cfg/teamname.jpg",
		title: "Coffee",
		cols: 2
	},
	{
		img: process.env.PUBLIC_URL + "/cfg/jpmc.jpeg",
		title: "Hats",
		cols: 2
	},
	{
		img: process.env.PUBLIC_URL + "/cfg/banglorefoodbank.jpg",
		title: "Honey",
		author: "@arwinneil",
		rows: 2,
		cols: 2
	},
	{
		img: process.env.PUBLIC_URL + "/cfg/hack.jpg",
		title: "Bike",
		cols: 2
	}
];

export default function Hackathons() {
	return (
		<React.Fragment>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-evenly",
					flexDirection: { xs: "column", sm: "row" }
				}}
			>
				<Box sx={{ mb: { xs: "1rem", sm: "0" } }}>
					<div class="card w-96 bg-base-100 shadow-xl">
						<figure class="px-10 pt-10">
							<img
								src={process.env.PUBLIC_URL + "/cfg/codeforgood.png"}
								alt="Shoes"
								class="rounded-xl"
							/>
						</figure>
						<div class="card-body items-center text-center">
							<h2 class="card-title">First ever Hackathon Win</h2>
							<p>JP Morgan Chase & Co. Code for Good 2022</p>
							<div class="card-actions">
								<button
									class="btn btn-primary"
									onClick={() =>
										window.open(
											"https://www.linkedin.com/posts/prathameshrspawar_jpmchase-codeforgood-techforgood-activity-6947061049212698624-W4yp?utm_source=linkedin_share&utm_medium=member_desktop_web",
											"_blank"
										)
									}
								>
									See Complete Story
								</button>
								<button
									class="btn btn-secondary"
									onClick={() =>
										window.open(
											"https://github.com/Prathamesh111-netizen/Code-for-Good-22-Banglore-Food-Bank-Challenge",
											"_blank"
										)
									}
								>
									Project
								</button>
							</div>
						</div>
					</div>
				</Box>
				<QuiltedImageList />
			</Box>
		</React.Fragment>
	);
}
