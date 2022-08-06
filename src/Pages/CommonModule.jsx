import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Outlet, useNavigate } from "react-router-dom";
import { themeChange } from "theme-change";

const drawerWidth = 240;
const navItems = ["skills", "experiences", "projects", "hackathons", "blogs"];

function CommonModule(props) {
	const navigate = useNavigate();
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	React.useEffect(() => {
		themeChange(false);
	}, []);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const DrawerList = (
		<List>
			{navItems.map((item) => (
				<ListItem key={item} disablePadding>
					<ListItemButton
						sx={{ textAlign: "center" }}
						onClick={() => navigate(item)}
					>
						<ListItemText primary={item} sx={{ textTransform: "capitalize" }} />
					</ListItemButton>
				</ListItem>
			))}
		</List>
	);

	const NavbarList = (
		<Box sx={{ display: { xs: "none", sm: "block" } }}>
			{navItems.map((item) => (
				<Button
					key={item}
					onClick={() => navigate(item)}
					sx={{ color: "#aaa" }}
				>
					{item}
				</Button>
			))}
		</Box>
	);

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
			<Typography
				variant="h6"
				sx={{ my: 2, cursor: "pointer" }}
				onClick={() => navigate("/")}
			>
				Prathamesh Pawar
			</Typography>
			<Divider />
			{DrawerList}
		</Box>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: "flex" }}>
			<AppBar component="nav" sx={{ backgroundColor: "#fff", color: "#000" }}>
				<Toolbar sx={{ display: "flex", flexWrap: "nowrap" }}>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: "none" } }}
					>
						<MenuIcon />
						{/* icon with text something */}
					</IconButton>
					<Typography
						variant="h6"
						component="div"
						sx={{
							flexGrow: 1,
							display: { xs: "none", sm: "block" },
							cursor: "pointer"
						}}
						onClick={() => navigate("/")}
					>
						Prathamesh Pawar
					</Typography>
					{NavbarList}
				</Toolbar>
			</AppBar>
			<Box component="nav">
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true // Better open performance on mobile.
					}}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth
						}
					}}
				>
					{drawer}
				</Drawer>
			</Box>
			<Box component="main" sx={{ p: 3 }}>
				<Toolbar />
				<Outlet />
			</Box>
		</Box>
	);
}

export default CommonModule;
