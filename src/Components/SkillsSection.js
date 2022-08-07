import { Box, Typography } from "@mui/material";
import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";

export default function SkillsSection() {
	return (
		<React.Fragment>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-evenly",
					alignItems: "center"
				}}
			>
				<Card sx={{ maxWidth: 345 }}>
					<CardActionArea>
						<CardContent>
							<Typography gutterBottom variant="h5" component="div">
								Langauges
							</Typography>
							<Box sx={{ display: "flex", wrap: "wrap", mt: "1rem" }}>
								<Grid
									container
									rowSpacing={6}
									columnSpacing={{ xs: 1, sm: 2, md: 3 }}
								>
									<Grid item xs={3}>
										<img
											src={process.env.PUBLIC_URL + "/lang/c.svg"}
											alt="csvg"
										></img>
									</Grid>
									<Grid item xs={3}>
										<img
											src={process.env.PUBLIC_URL + "/lang/cpp.svg"}
											alt="csvg"
										></img>
									</Grid>
									<Grid item xs={3}>
										<img
											src={process.env.PUBLIC_URL + "/lang/java.svg"}
											alt="csvg"
										></img>
									</Grid>
									<Grid item xs={3}>
										<img
											src={process.env.PUBLIC_URL + "/lang/python.svg"}
											alt="csvg"
										></img>
									</Grid>
									<Grid item xs={3}>
										<img
											src={process.env.PUBLIC_URL + "/lang/html.svg"}
											alt="csvg"
										></img>
									</Grid>
									<Grid item xs={3}>
										<img
											src={process.env.PUBLIC_URL + "/lang/css.svg"}
											alt="csvg"
										></img>
									</Grid>
									<Grid item xs={3}>
										<img
											src={process.env.PUBLIC_URL + "/lang/javascript.svg"}
											alt="csvg"
										></img>
									</Grid>
									<Grid item xs={3}>
										<img
											src={process.env.PUBLIC_URL + "/lang/solidity.svg"}
											alt="csvg"
										></img>
									</Grid>
									<Grid item xs={3}>
										<img
											src={process.env.PUBLIC_URL + "/lang/nodejs.svg"}
											alt="csvg"
										></img>
									</Grid>
									<Grid item xs={3}>
										<img
											src={process.env.PUBLIC_URL + "/lang/express.svg"}
											alt="csvg"
										></img>
									</Grid>
								</Grid>
							</Box>
						</CardContent>
					</CardActionArea>
				</Card>
				<Card sx={{ maxWidth: 345 }}>
					<CardActionArea>
						<CardContent>
							<Typography gutterBottom variant="h5" component="div">
								Databases
							</Typography>
							<Box
								sx={{
									display: "flex",
									wrap: "wrap",
									mt: "1rem",
									alignItems: "center"
								}}
							>
								<Grid
									container
									rowSpacing={6}
									columnSpacing={{ xs: 1, sm: 2, md: 3 }}
								>
									<Grid item xs={4}>
										<img
											src={process.env.PUBLIC_URL + "/databases/mysql.svg"}
											alt="csvg"
										></img>
									</Grid>
									<Grid item xs={4}>
										<img
											src={process.env.PUBLIC_URL + "/databases/postgresql.svg"}
											alt="csvg"
										></img>
									</Grid>
									<Grid item xs={4}>
										<img
											src={process.env.PUBLIC_URL + "/databases/mongodb.svg"}
											alt="csvg"
										></img>
									</Grid>
									<Grid item xs={4}>
										<img
											src={process.env.PUBLIC_URL + "/databases/dynamodb.svg"}
											alt="csvg"
										></img>
									</Grid>
									<Grid item xs={4}>
										<img
											src={
												process.env.PUBLIC_URL + "/databases/elasticsearch.svg"
											}
											alt="csvg"
										></img>
									</Grid>
									<Grid item xs={4}>
										<img
											src={process.env.PUBLIC_URL + "/databases/aws-rds.svg"}
											alt="csvg"
										></img>
									</Grid>
								</Grid>
							</Box>
						</CardContent>
					</CardActionArea>
				</Card>
				<Card sx={{ maxWidth: 345 }}>
					<CardActionArea>
						<CardContent>
							<Typography gutterBottom variant="h5" component="div">
								Technologies
							</Typography>
							<Box
								sx={{
									display: "flex",
									wrap: "wrap",
									mt: "1rem",
									alignItems: "center"
								}}
							>
								<Grid
									container
									rowSpacing={6}
									columnSpacing={{ xs: 1, sm: 2, md: 3 }}
								>
									<Grid item xs={3}>
										<img
											src={process.env.PUBLIC_URL + "/tech/windows.svg"}
											alt="csvg"
										></img>
									</Grid>

									<Grid item xs={3}>
										<img
											src={process.env.PUBLIC_URL + "/tech/linux.svg"}
											alt="csvg"
										></img>
									</Grid>
									<Grid item xs={3}>
										<img
											src={process.env.PUBLIC_URL + "/tech/ubuntu.svg"}
											alt="csvg"
										></img>
									</Grid>
									<Grid item xs={3}>
										<img
											src={process.env.PUBLIC_URL + "/tech/gcp.svg"}
											alt="csvg"
										></img>
									</Grid>
									<Grid item xs={3}>
										<img
											src={process.env.PUBLIC_URL + "/tech/aws.svg"}
											alt="csvg"
										></img>
									</Grid>
									<Grid item xs={3}>
										<img
											src={process.env.PUBLIC_URL + "/tech/ec2.svg"}
											alt="csvg"
										></img>
									</Grid>
									<Grid item xs={3}>
										<img
											src={process.env.PUBLIC_URL + "/tech/kibana.svg"}
											alt="csvg"
										></img>
									</Grid>
									<Grid item xs={3}>
										<img
											src={process.env.PUBLIC_URL + "/tech/logstash.svg"}
											alt="csvg"
										></img>
									</Grid>
								</Grid>
							</Box>
						</CardContent>
					</CardActionArea>
				</Card>
			</Box>
		</React.Fragment>
	);
}
