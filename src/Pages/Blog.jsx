import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export default function Blog() {
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
				<Typography sx={{ mb: { xs: "2rem", sm: "0" } }} variant="h5">
					Coming Soon . . .
				</Typography>
				<img
					src={process.env.PUBLIC_URL + "/coming_soon.svg"}
					alt="coming soon"
				></img>
			</Box>
		</React.Fragment>
	);
}
